import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.aasmundkvitvang.no/",
      lastModified: new Date(),
    },
  ];
}
