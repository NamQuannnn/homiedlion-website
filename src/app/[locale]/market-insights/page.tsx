import { getTranslations } from "next-intl/server";

import type { Metadata } from "next";
import AppIcon from "@/components/ui/AppIcon";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { Link } from "@/i18n/routing";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "PageMetadata.marketInsights",
  });

  const url = `https://homiedlion.com/${locale}/market-insights`;

  return {
    title: t("title"),
    description: t("description"),

    alternates: {
      canonical: url,
      languages: {
        vi: "https://homiedlion.com/vi/market-insights",
        en: "https://homiedlion.com/en/market-insights",
        "x-default": "https://homiedlion.com/en/market-insights",
      },
    },

    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
      type: "website",
    },

    twitter: {
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function MarketInsightsPage({
  params,
}: PageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "MarketInsightsHub",
  });

  const sections = [
    {
      title: t("reports.title"),
      description: t("reports.description"),
      button: t("reports.button"),
      href: "/market-insights/reports",
      icon: "report" as const,
    },
    {
      title: t("priceHistory.title"),
      description: t("priceHistory.description"),
      button: t("priceHistory.button"),
      href: "/market-insights/price-history",
      icon: "price" as const,
    },
    {
      title: t("logisticsNews.title"),
      description: t("logisticsNews.description"),
      button: t("logisticsNews.button"),
      href: "/market-insights/logistics-news",
      icon: "logistics" as const,
    },
  ];

  return (
    <Section className="bg-background">
      <Container>
        <Heading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {sections.map((section) => (
            <Card
              key={section.href}
              className="group flex h-full flex-col transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
                <AppIcon
                  name={section.icon}
                  className="h-7 w-7"
                />
              </div>

              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-text">
                  {section.title}
                </h2>

                <p className="mt-4 text-base leading-7 text-text-secondary">
                  {section.description}
                </p>
              </div>

              <div className="mt-8 border-t border-border pt-5">
                <Link
                  href={section.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-hover"
                >
                  {section.button}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}