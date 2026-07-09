import type { MetadataRoute } from "next";

const baseUrl = "https://homiedlion.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/products",
    "/products/raw-cashew-nuts",
    "/products/cashew-kernels",
    "/products/freight-services",
    "/market-insights",
    "/contact",
  ];

  return routes.flatMap((route) => [
    {
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.8,
    },
    {
      url: `${baseUrl}/vi${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.8,
    },
  ]);
}