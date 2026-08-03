import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

const APP_DIR = path.join(process.cwd(), 'app');
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adrefresh.com';

// Extracts a named metadata field (title or description) from a page.tsx.
function extractField(src: string, field: 'title' | 'description', pagePath: string): string {
  // Look for PAGE_TITLE or PAGE_DESCRIPTION constants
  const constName = field === 'title' ? 'PAGE_TITLE' : 'PAGE_DESCRIPTION';
  const constMatch = src.match(
    new RegExp(`const\\s+${constName}\\s*=\\s*(["'\`])((?:\\\\.|(?!\\1).)*)\\1`)
  );
  if (constMatch) return constMatch[2];

  // Look for generateMetadata function with return statement
  const generateMetadataRegex = new RegExp(
    `generateMetadata\\s*\\([^)]*\\)\\s*\\{[\\s\\S]*?return\\s*\\{[\\s\\S]*?${field}\\s*:\\s*(["'\`])((?:\\\\.|(?!\\1).)*)\\1`,
    's'
  );
  const generateMatch = src.match(generateMetadataRegex);
  if (generateMatch) return generateMatch[2];

  // title: { default: "..." }
  if (field === 'title') {
    const defaultMatch = src.match(/title\s*:\s*\{\s*default\s*:\s*["']([^"']+)["']/);
    if (defaultMatch) return defaultMatch[1];
  }

  // field: "..." or field:\n    "..."
  const direct = src.match(
    new RegExp(`${field}\\s*:\\s*[\\n\\s]*(["'\`])((?:\\\\.|(?!\\1).)*)\\1`)
  );
  if (direct) return direct[2].trim();

  // field: data.meta.field → resolve from JSON
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
    ({ route }) =>
      !route.startsWith('/client-success') &&
      !route.startsWith('/blogs') &&
      route !== '/privacy-policy'
  );

  // case-studies.json is an array — read it directly, don't Object.entries() it
  const caseStudiesPath = path.join(APP_DIR, 'json-data', 'case-studies.json');
  type CaseEntry = { slug: string; title: string; subtitle?: string };
  const caseStudyRoutes: Array<{ route: string; title: string; description: string }> =
    fs.existsSync(caseStudiesPath)
      ? (JSON.parse(fs.readFileSync(caseStudiesPath, 'utf8')) as CaseEntry[]).map((entry) => ({
          route: `/client-success/${entry.slug}`,
          title: entry.title,
          description: entry.subtitle ?? '',
        }))
      : [];

  // blogs.json is also an array — same treatment
  const blogsPath = path.join(APP_DIR, 'json-data', 'blogs.json');
  type BlogEntry = { slug: string; title: string; excerpt?: string };
  const blogRoutes: Array<{ route: string; title: string; description: string }> =
    fs.existsSync(blogsPath)
      ? (JSON.parse(fs.readFileSync(blogsPath, 'utf8')) as BlogEntry[]).map((entry) => ({
          route: `/blogs/${entry.slug}`,
          title: entry.title,
          description: entry.excerpt ?? '',
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
    `## Blogs`,
    ...blogRoutes.map(({ route, title, description }) =>
      formatEntry(title, `${BASE_URL}${route}`, description)
    ),
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
