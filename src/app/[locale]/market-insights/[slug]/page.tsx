import type { Metadata } from "next";
import Image from "next/image";
import {
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";

import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import { Link, routing } from "@/i18n/routing";
import {
  getReport,
  getReportSlugs,
} from "@/lib/reports";

const BASE_URL = "https://homiedlion.com";

type ReportPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

function isValidLocale(
  locale: string
): locale is (typeof routing.locales)[number] {
  return routing.locales.includes(
    locale as (typeof routing.locales)[number]
  );
}

export async function generateStaticParams() {
  const slugs = await getReportSlugs();

  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: ReportPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const report = await getReport(slug, locale);

  if (!report) {
    notFound();
  }

  const pageUrl = `${BASE_URL}/${locale}/market-insights/${slug}`;
  const vietnameseUrl = `${BASE_URL}/vi/market-insights/${slug}`;
  const englishUrl = `${BASE_URL}/en/market-insights/${slug}`;

  return {
    title: report.title,
    description: report.summary,

    alternates: {
      canonical: pageUrl,
      languages: {
        vi: vietnameseUrl,
        en: englishUrl,
      },
    },

    openGraph: {
      title: report.title,
      description: report.summary,
      url: pageUrl,
      siteName: "Homie D'Lion Group",
      locale: locale === "vi" ? "vi_VN" : "en_US",
      alternateLocale:
        locale === "vi" ? ["en_US"] : ["vi_VN"],
      type: "article",
      publishedTime: report.publishedAt,
      authors: ["Homie D'Lion Group"],
    },

    twitter: {
      card: "summary",
      title: report.title,
      description: report.summary,
    },
  };
}

export default async function ReportPage({
  params,
}: ReportPageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "ReportDetail",
  });

  const report = await getReport(slug, locale);

  if (!report) {
    notFound();
  }

  const pageUrl = `${BASE_URL}/${locale}/market-insights/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,

    headline: report.title,
    description: report.summary,

    datePublished: report.publishedAt,
    dateModified: report.publishedAt,

    inLanguage: locale === "vi" ? "vi-VN" : "en-US",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },

    author: {
      "@type": "Organization",
      name: "Homie D'Lion Group",
    },

    publisher: {
      "@type": "Organization",
      name: "Homie D'Lion Group",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/icon.png`,
      },
    },

    image: `${BASE_URL}/icon.png`,
  };

  return (
    <div className="w-full flex-grow">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

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
          <header className="mb-12">
            <div className="flex justify-center sm:justify-end">
              <Image
                src="/logo/homie-dlion-logo.png"
                alt="Homie D'Lion Group"
                width={220}
                height={90}
                className="h-auto w-[145px] object-contain sm:w-[175px]"
              />
            </div>

            <div className="mx-auto mt-5 max-w-2xl text-center">
              <h1 className="text-xl font-bold uppercase leading-tight text-black sm:text-2xl">
                {report.title}
              </h1>

              <p className="mt-3 text-lg font-bold text-black">
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