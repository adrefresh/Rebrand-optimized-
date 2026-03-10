import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Required for Next.js static export (output: export)
export const dynamic = 'force-static';

const APP_DIR  = path.join(process.cwd(), 'app');
const JSON_PATH = path.join(process.cwd(), 'app', 'json-data', 'case-studies.json');
const BASE_URL  = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adrefresh.com';

function scanRoutes(dir: string, routes: string[] = [], currentRoute = ''): string[] {
  const items = fs.readdirSync(dir);

  if (items.includes('page.tsx') && !dir.endsWith(']')) {
    routes.push(currentRoute === '' ? '/' : currentRoute);
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

export async function GET() {
  const staticRoutes = scanRoutes(APP_DIR);

  // case-studies.json is an object keyed by slug, not an array
  const caseStudyRoutes: string[] = fs.existsSync(JSON_PATH)
    ? Object.keys(JSON.parse(fs.readFileSync(JSON_PATH, 'utf8')))
        .map((slug) => `/client-success/${slug}`)
    : [];

  const coreRoutes = staticRoutes.filter(
    (r) => !r.startsWith('/client-success') && r !== '/privacy-policy'
  );

  const routeLabel = (r: string) =>
    r === '/' ? 'Home' : r.replace(/\//g, ' ').trim().replace(/\b\w/g, (c) => c.toUpperCase());

  const content = [
    `# AdRefresh`,
    `> AdRefresh is a Digital Marketing and Advertising Operations partner delivering programmatic strategy, AI-enhanced AdOps, and scalable remote media teams.`,
    ``,
    `## Core Pages`,
    ...coreRoutes.map((r) => `- [${routeLabel(r)}](${BASE_URL}${r})`),
    ``,
    `## Case Studies`,
    ...caseStudyRoutes.map((r) => `- [${r.split('/').pop()}](${BASE_URL}${r})`),
    ``,
    `## Optional`,
    `- [Privacy Policy](${BASE_URL}/privacy-policy)`,
  ].join('\n');

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400',
    },
  });
}