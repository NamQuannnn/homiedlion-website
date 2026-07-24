import type { Metadata } from "next";
import {
  getLocale,
  getTranslations,
} from "next-intl/server";

import ReportCard from "@/components/reports/ReportCard";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { getAllReports } from "@/lib/reports";

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
    namespace: "PageMetadata.reports",
  });

  const url = `https://homiedlion.com/${locale}/market-insights/reports`;

  return {
    title: t("title"),
    description: t("description"),

    alternates: {

      canonical: url,
    
      languages: {
        vi: "https://homiedlion.com/vi/market-insights/reports",
        en: "https://homiedlion.com/en/market-insights/reports",
        "x-default": "https://homiedlion.com/en/market-insights/reports",
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

export default async function MarketInsightsPage() {
  const locale = await getLocale();
  const t = await getTranslations("MarketInsightsPage");

  const reports = await getAllReports(locale);

  return (
    <div className="w-full flex-grow">

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              {t("eyebrow")}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              {t("heading")}
            </h2>

            <p className="mt-6 text-lg leading-8 text-text-secondary">
              {t("description")}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reports.map((report) => (
              <ReportCard
                key={report.slug}
                report={report}
                locale={locale}
                readLabel={t("readReport")}
              />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}