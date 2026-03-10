/**
 * scripts/generate-llms.ts
 *
 * Run after `next build` to generate llms.txt into the `out/` folder.
 * This replaces the route.ts approach which doesn't work with output: "export"
 *
 * Add to package.json:
 *   "build": "next build && npx ts-node --project tsconfig.scripts.json scripts/generate-llms.ts"
 *
 * Or simpler — use tsx (no tsconfig needed):
 *   npm install tsx --save-dev
 *   "build": "next build && npx tsx scripts/generate-llms.ts"
 */

import fs from "fs";
import path from "path";

const APP_DIR   = path.join(process.cwd(), "app");
const JSON_PATH = path.join(process.cwd(), "app", "json-data", "case-studies.json");
const OUT_DIR   = path.join(process.cwd(), "out");
const BASE_URL  = process.env.NEXT_PUBLIC_SITE_URL || "https://www.adrefresh.com";

// ── Scan app/ folder for static routes ──────────────────────────────────────
function scanRoutes(dir: string, routes: string[] = [], currentRoute = ""): string[] {
  const items = fs.readdirSync(dir);

  if (items.includes("page.tsx") && !dir.endsWith("]")) {
    routes.push(currentRoute === "" ? "/" : currentRoute);
  }

  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (
      fs.statSync(fullPath).isDirectory() &&
      !["api", "actions", "components", "json-data", "layouts", "lib", "llms.txt"].includes(item) &&
      !item.startsWith("_") &&
      !item.startsWith("[")
    ) {
      scanRoutes(fullPath, routes, `${currentRoute}/${item}`);
    }
  }

  return routes;
}

// ── Build content ────────────────────────────────────────────────────────────
const staticRoutes = scanRoutes(APP_DIR);

const caseStudyRoutes: string[] = fs.existsSync(JSON_PATH)
  ? Object.keys(JSON.parse(fs.readFileSync(JSON_PATH, "utf8"))).map(
      (slug) => `/client-success/${slug}`
    )
  : [];

const coreRoutes = staticRoutes.filter(
  (r) => !r.startsWith("/client-success") && r !== "/privacy-policy"
);

const routeLabel = (r: string) =>
  r === "/"
    ? "Home"
    : r.replace(/\//g, " ").trim().replace(/\b\w/g, (c) => c.toUpperCase());

const content = [
  `# AdRefresh`,
  `> AdRefresh is a Digital Marketing and Advertising Operations partner delivering programmatic strategy, AI-enhanced AdOps, and scalable remote media teams.`,
  ``,
  `## Core Pages`,
  ...coreRoutes.map((r) => `- [${routeLabel(r)}](${BASE_URL}${r})`),
  ``,
  `## Case Studies`,
  ...caseStudyRoutes.map((r) => `- [${r.split("/").pop()}](${BASE_URL}${r})`),
  ``,
  `## Optional`,
  `- [Privacy Policy](${BASE_URL}/privacy-policy)`,
].join("\n");

// ── Write to out/ folder ─────────────────────────────────────────────────────
if (!fs.existsSync(OUT_DIR)) {
  console.error("❌ out/ folder not found. Run `next build` first.");
  process.exit(1);
}

fs.writeFileSync(path.join(OUT_DIR, "llms.txt"), content, "utf8");
console.log("✅ llms.txt generated in out/");
console.log(content);