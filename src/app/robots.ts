import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/login", "/signup", "/(protected)/*"],
    },
    sitemap: "https://www.madhavamfoundation.com/sitemap.xml",
  };
}
