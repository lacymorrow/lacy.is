import type { MetadataRoute } from "next";

import { SITE_URL } from "~/site";

// lacy.is is a single page.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL, changeFrequency: "monthly", priority: 1 }];
}
