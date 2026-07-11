import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import { reports } from "@/content/reports/reports";
import { Link } from "@/i18n/routing";

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
  const language = locale === "vi" ? "vi" : "en";

  const t = await getTranslations({
    locale,
    namespace: "ReportDetail",
  });

  const report = reports.find((item) => item.slug === slug);

  if (!report) {
    notFound();
  }

  return (
    <div className="w-full flex-grow">
      <PageHeader
        title={report.title[language]}
        breadcrumbs={[
          {
            label: t("library"),
            href: "/market-insights",
          },
          {
            label: report.title[language],
            href: `/market-insights/${report.slug}`,
          },
        ]}
      />

      <Section className="bg-[#f5f5f5]">
        <Container>
          <article className="mx-auto max-w-[900px] bg-white px-8 py-12 shadow-sm sm:px-14 lg:px-20">
            <header className="relative mb-10 text-center">
              <div className="mb-7 flex justify-center sm:absolute sm:right-0 sm:top-0 sm:mb-0">
                <Image
                  src="/logo/homie-dlion-logo.png"
                  alt="Homie D'Lion Group"
                  width={190}
                  height={80}
                  className="h-auto w-[150px] object-contain sm:w-[180px]"
                />
              </div>

              <div className="mx-auto max-w-xl pt-2 sm:pt-16">
                <h1 className="text-xl font-bold uppercase leading-tight text-black sm:text-2xl">
                  {report.title[language]}
                </h1>

                <p className="mt-1 text-lg font-bold text-black">
                  {report.period[language]}
                </p>
              </div>
            </header>

            <div className="space-y-6">
              {report.content.map((block, index) => {
                if (block.type === "paragraph") {
                  return (
                    <p
                      key={index}
                      className="text-justify text-[15px] leading-7 text-black sm:text-base"
                    >
                      {block.content[language]}
                    </p>
                  );
                }

                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="pt-2 text-base font-bold text-black underline decoration-1 underline-offset-2"
                    >
                      {block.content[language]}
                    </h2>
                  );
                }

                return (
                  <ul
                    key={index}
                    className="list-disc space-y-1 pl-8 text-[15px] leading-7 text-black sm:text-base"
                  >
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item[language]}</li>
                    ))}
                  </ul>
                );
              })}
            </div>

            <footer className="mt-12 text-base font-bold uppercase text-black">
              Homie D&apos;Lion Group
            </footer>
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