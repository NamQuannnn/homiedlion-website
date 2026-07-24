import type { MetadataRoute } from "next";

import { getImpactSlugs } from "@/lib/our-impact";
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
  "/market-insights/reports",
  "/market-insights/price-history",
  "/market-insights/logistics-news",
  "/our-impact",
  "/contact",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [reportSlugs, impactSlugs] = await Promise.all([
    getReportSlugs(),
    getImpactSlugs(),
  ]);

  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: now,
      changeFrequency:
        route === ""
          ? "weekly"
          : route === "/market-insights/price-history"
            ? "weekly"
            : "monthly",
      priority:
        route === ""
          ? 1
          : route === "/market-insights"
            ? 0.9
            : route === "/market-insights/reports"
              ? 0.85
              : route === "/market-insights/price-history"
                ? 0.85
                : route === "/our-impact"
                  ? 0.8
                  : 0.75,
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

  const impactPages: MetadataRoute.Sitemap = impactSlugs.flatMap((slug) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/our-impact/${slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.65,
      alternates: {
        languages: {
          vi: `${BASE_URL}/vi/our-impact/${slug}`,
          en: `${BASE_URL}/en/our-impact/${slug}`,
        },
      },
    }))
  );

  return [
    ...staticPages,
    ...reportPages,
    ...impactPages,
  ];
}