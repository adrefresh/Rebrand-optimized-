import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

const APP_DIR  = path.join(process.cwd(), 'app');
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adrefresh.com';

// Extracts a named metadata field (title or description) from a page.tsx.
// Handles:
//   field: "single-line string"
//   field:\n    "multi-line string"
//   field: { default: "string", ... }   (title only)
//   field: data.meta.field              → resolved from the page's JSON file
function extractField(src: string, field: 'title' | 'description', pagePath: string): string {
  // title: { default: "..." }
  if (field === 'title') {
    const defaultMatch = src.match(/title\s*:\s*\{\s*default\s*:\s*["']([^"']+)["']/);
    if (defaultMatch) return defaultMatch[1];
  }

  // field: "..." or field:\n    "..."  (handles template literals and line breaks)
  const direct = src.match(new RegExp(`${field}\\s*:\\s*[\\n\\s]*["'\`]([^"'\`]+)["'\`]`));
  if (direct) return direct[1].trim();

  // field: data.meta.field  → resolve from JSON
  if (src.includes(`data.meta.${field}`)) {
    const jsonImport = src.match(/from\s+["'](@\/app\/json-data\/[^"']+)["']/);
    if (jsonImport) {
      const jsonPath = path.join(process.cwd(), jsonImport[1].replace('@/', ''));
      if (fs.existsSync(jsonPath)) {
        const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        if (json?.meta?.[field]) return json.meta[field];
      }
    }
  }

  return '';
}

function scanRoutes(
  dir: string,
  routes: Array<{ route: string; pagePath: string }> = [],
  currentRoute = ''
): Array<{ route: string; pagePath: string }> {
  const items = fs.readdirSync(dir);

  if (items.includes('page.tsx') && !dir.endsWith(']')) {
    routes.push({
      route: currentRoute === '' ? '/' : currentRoute,
      pagePath: path.join(dir, 'page.tsx'),
    });
  }

  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (
      fs.statSync(fullPath).isDirectory() &&
      !['api', 'actions', 'components', 'json-data', 'layouts', 'lib', 'llms.txt'].includes(item) &&
      !item.startsWith('_') &&
      !item.startsWith('[')
    ) {
      scanRoutes(fullPath, routes, `${currentRoute}/${item}`);
    }
  }
  return routes;
}

function formatEntry(title: string, url: string, description: string): string {
  const desc = description ? `: ${description}` : '';
  return `- [${title}](${url})${desc}`;
}

export async function GET() {
  const allRoutes = scanRoutes(APP_DIR);

  const coreRoutes = allRoutes.filter(
    ({ route }) => !route.startsWith('/client-success') && route !== '/privacy-policy'
  );

  // Case studies — keyed by slug, title + subtitle come from JSON
  const caseStudiesPath = path.join(APP_DIR, 'json-data', 'case-studies.json');
  type CaseEntry = { title: string; listingTitle?: string; subtitle?: string; excerpt?: string };
  const caseStudyRoutes: Array<{ route: string; title: string; description: string }> =
    fs.existsSync(caseStudiesPath)
      ? Object.entries(
          JSON.parse(fs.readFileSync(caseStudiesPath, 'utf8')) as Record<string, CaseEntry>
        ).map(([slug, entry]) => ({
          route: `/client-success/${slug}`,
          title: entry.listingTitle ?? entry.title,
          description: entry.excerpt ?? entry.subtitle ?? '',
        }))
      : [];

  const content = [
    `# AdRefresh`,
    `> AdRefresh is a Digital Marketing and Advertising Operations partner delivering`,
    `> programmatic strategy, AI-enhanced AdOps, and scalable remote media teams.`,
    ``,
    `## Core Pages`,
    ...coreRoutes.map(({ route, pagePath }) => {
      const src = fs.readFileSync(pagePath, 'utf8');
      const title = extractField(src, 'title', pagePath);
      const description = extractField(src, 'description', pagePath);
      return formatEntry(title, `${BASE_URL}${route}`, description);
    }),
    ``,
    `## Case Studies`,
    ...caseStudyRoutes.map(({ route, title, description }) =>
      formatEntry(title, `${BASE_URL}${route}`, description)
    ),
    ``,
    `## Optional`,
    `- [Privacy Policy](${BASE_URL}/privacy-policy): Legal information and data handling policies.`,
  ].join('\n');

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400',
    },
  });
}