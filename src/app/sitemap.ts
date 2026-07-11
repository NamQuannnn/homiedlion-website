import type { MetadataRoute } from "next";

import { getReportSlugs } from "@/lib/reports";

const BASE_URL = "https://homiedlion.com";
const locales = ["vi", "en"] as const;

const staticRoutes = [
  "",
  "/about",
  "/products",
  "/products/raw-cashew-nuts",
  "/products/cashew-kernels",
  "/products/freight-services",
  "/market-insights",
  "/contact",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const reportSlugs = await getReportSlugs();
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority:
        route === ""
          ? 1
          : route === "/market-insights"
            ? 0.9
            : 0.8,
      alternates: {
        languages: {
          vi: `${BASE_URL}/vi${route}`,
          en: `${BASE_URL}/en${route}`,
        },
      },
    }))
  );

  const reportPages: MetadataRoute.Sitemap = reportSlugs.flatMap((slug) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/market-insights/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          vi: `${BASE_URL}/vi/market-insights/${slug}`,
          en: `${BASE_URL}/en/market-insights/${slug}`,
        },
      },
    }))
  );

  return [...staticPages, ...reportPages];
}