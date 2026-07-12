import type { Metadata } from "next";
import {
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";

import ImpactGallery from "@/components/our-impact/ImpactGallery";
import ImpactHero from "@/components/our-impact/ImpactHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Link, routing } from "@/i18n/routing";
import {
  getImpactSlugs,
  getImpactStory,
} from "@/lib/our-impact";

const BASE_URL = "https://homiedlion.com";

type ImpactStoryPageProps = {
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
  const slugs = await getImpactSlugs();

  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: ImpactStoryPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const story = await getImpactStory(slug, locale);

  if (!story) {
    notFound();
  }

  const pageUrl = `${BASE_URL}/${locale}/our-impact/${slug}`;
  const vietnameseUrl = `${BASE_URL}/vi/our-impact/${slug}`;
  const englishUrl = `${BASE_URL}/en/our-impact/${slug}`;

  return {
    title: story.title,
    description: story.summary,

    alternates: {
      canonical: pageUrl,
      languages: {
        vi: vietnameseUrl,
        en: englishUrl,
      },
    },

    openGraph: {
      title: story.title,
      description: story.summary,
      url: pageUrl,
      siteName: "Homie D'Lion Group",
      locale: locale === "vi" ? "vi_VN" : "en_US",
      alternateLocale:
        locale === "vi" ? ["en_US"] : ["vi_VN"],
      type: "article",
      publishedTime: story.publishedAt,
      images: [
        {
          url: story.coverImage,
          alt: story.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: story.title,
      description: story.summary,
      images: [story.coverImage],
    },
  };
}

export default async function ImpactStoryPage({
  params,
}: ImpactStoryPageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: "OurImpactDetail",
  });

  const story = await getImpactStory(slug, locale);

  if (!story) {
    notFound();
  }

  const formattedDate = new Intl.DateTimeFormat(
    locale === "vi" ? "vi-VN" : "en-GB",
    {
      day: "2-digit",
      month: locale === "vi" ? "2-digit" : "long",
      year: "numeric",
    }
  ).format(new Date(`${story.publishedAt}T00:00:00`));

  const pageUrl = `${BASE_URL}/${locale}/our-impact/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: story.title,
    description: story.summary,
    image: `${BASE_URL}${story.coverImage}`,
    datePublished: story.publishedAt,
    dateModified: story.publishedAt,
    inLanguage: locale === "vi" ? "vi-VN" : "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    author: {
      "@id": `${BASE_URL}/#organization`,
    },
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
  };

  return (
    <div className="w-full flex-grow">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <ImpactHero
        title={story.title}
        summary={story.summary}
        coverImage={story.coverImage}
        date={formattedDate}
        location={story.location}
      />

      <Section className="bg-background">
        <Container>
          <div className="mx-auto max-w-3xl">
            <nav
              className="impact-fade-up mb-12 flex flex-wrap items-center gap-2 text-sm text-text-secondary"
              aria-label="Breadcrumb"
            >
              <Link
                href="/our-impact"
                className="transition hover:text-primary"
              >
                {t("library")}
              </Link>

              <span aria-hidden="true">/</span>

              <span className="text-text">{story.title}</span>
            </nav>

            <article
              className="impact-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              <div
                className="report-content"
                dangerouslySetInnerHTML={{
                  __html: story.contentHtml,
                }}
              />
            </article>
          </div>

          <ImpactGallery
            images={story.images}
            title={story.title}
            eyebrow={t("galleryEyebrow")}
            galleryTitle={t("galleryTitle")}
            locale={locale}
          />

          <div className="mx-auto mt-14 max-w-6xl">
            <Link
              href="/our-impact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-text transition hover:border-primary hover:text-primary"
            >
              <span aria-hidden="true">←</span>
              {t("back")}
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}