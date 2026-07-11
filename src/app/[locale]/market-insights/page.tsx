import { getLocale, getTranslations } from "next-intl/server";

import ReportCard from "@/components/reports/ReportCard";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import { getAllReports } from "@/lib/reports";

export default async function MarketInsightsPage() {
  const locale = await getLocale();
  const t = await getTranslations("MarketInsightsPage");

  const reports = await getAllReports(locale);

  return (
    <div className="w-full flex-grow">
      <PageHeader
        title={t("title")}
        breadcrumbs={[
          {
            label: t("breadcrumb"),
            href: "/market-insights",
          },
        ]}
      />

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