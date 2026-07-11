import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import { Link } from "@/i18n/routing";
import { getReport, getReportSlugs } from "@/lib/reports";

type ReportPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getReportSlugs();

  return slugs.map((slug) => ({ slug }));
}

export default async function ReportPage({
  params,
}: ReportPageProps) {
  const { locale, slug } = await params;

  const t = await getTranslations({
    locale,
    namespace: "ReportDetail",
  });

  const report = await getReport(slug, locale);

  if (!report) {
    notFound();
  }

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

      <Section className="bg-[#f3f4f6]">
        <Container>
          <article className="mx-auto max-w-[900px] bg-white px-7 py-10 shadow-md sm:px-12 sm:py-14 lg:px-20">
            <header className="relative mb-10">
              <div className="mb-8 flex justify-center sm:absolute sm:right-0 sm:top-0 sm:mb-0">
                <Image
                  src="/logo/homie-dlion-logo.png"
                  alt="Homie D'Lion Group"
                  width={220}
                  height={90}
                  className="h-auto w-[160px] object-contain sm:w-[190px]"
                />
              </div>

              <div className="mx-auto max-w-xl text-center sm:pt-20">
                <h1 className="text-xl font-bold uppercase leading-tight text-black sm:text-2xl">
                  {report.title}
                </h1>

                <p className="mt-2 text-lg font-bold text-black">
                  {report.period}
                </p>
              </div>
            </header>

            <div
              className="report-content"
              dangerouslySetInnerHTML={{
                __html: report.contentHtml,
              }}
            />
          </article>

          <div className="mx-auto mt-8 flex max-w-[900px] flex-col gap-4 sm:flex-row">
            <a
              href={report.downloadFile}
              download
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
            >
              {t("download")}
            </a>

            <Link
              href="/market-insights"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-text transition hover:bg-gray-50"
            >
              {t("back")}
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}