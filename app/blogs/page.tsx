import type { Metadata } from "next";
import { generateWebPageSchema } from "@/libraries/schema/webPageSchema";
import BlogsPageClient from "./BlogsPageClient";

const PAGE_TITLE = "Blogs | AdRefresh";
const PAGE_DESCRIPTION =
  "Insights on digital marketing, advertising operations, and programmatic strategy from the AdRefresh team.";
const SEO_CANONICAL_URL = "https://www.adrefresh.com/blogs/";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
};

export default function BlogsPage() {
  const webPageSchema = generateWebPageSchema({
    url: SEO_CANONICAL_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <BlogsPageClient />
    </>
  );
}
