import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import MediaViewer from "@/components/reports/MediaViewer";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import { reports } from "@/content/reports/reports";

type ReportPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export default async function ReportPage({
  params,
}: ReportPageProps) {
  const { locale, slug } = await params;

  const t = await getTranslations({
    locale,
    namespace: "ReportDetail",
  });

  const report = reports.find((item) => item.slug === slug);

  if (!report) {
    notFound();
  }

  const formattedDate = new Intl.DateTimeFormat(
    locale === "vi" ? "vi-VN" : "en-GB",
    {
      day: "2-digit",
      month: locale === "vi" ? "2-digit" : "long",
      year: "numeric",
    }
  ).format(new Date(`${report.publishedAt}T00:00:00`));

  return (
    <div className="w-full flex-grow">
      <PageHeader
        title={report.title}
        breadcrumbs={[
          {
            label: t("library"),
            href: "/market-insights",
          },
          {
            label: report.title,
            href: `/market-insights/${report.slug}`,
          },
        ]}
      />

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <h1 className="text-3xl font-bold tracking-tight text-text sm:text-5xl">
                {report.title}
              </h1>

              <time
                dateTime={report.publishedAt}
                className="mt-4 block text-sm font-medium text-text-secondary"
              >
                {formattedDate}
              </time>

              <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">
                {report.summary}
              </p>
            </div>

            <div className="mt-10">
              <MediaViewer
                src={report.file}
                title={report.title}
              />
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={report.file}
                download
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                {t("download")}
              </a>

              <Button href="/market-insights" variant="outline">
                {t("back")}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}