import type { MetadataRoute } from "next";

// lacy.is is a single page.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://lacy.is", changeFrequency: "monthly", priority: 1 }];
}
