import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

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
    namespace: "PageMetadata.logisticsNews",
  });

  const url = `https://homiedlion.com/${locale}/market-insights/logistics-news`;

  return {
    title: t("title"),
    description: t("description"),

    alternates: {
      canonical: url,
      languages: {
        vi: "https://homiedlion.com/vi/market-insights/logistics-news",
        en: "https://homiedlion.com/en/market-insights/logistics-news",
        "x-default":
          "https://homiedlion.com/en/market-insights/logistics-news",
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

export default async function LogisticsNewsPage({
  params,
}: PageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "LogisticsNewsPage",
  });

  return (
    <Section className="bg-background">
      <Container>
        <Heading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-16 rounded-3xl border border-dashed border-border bg-surface p-10 text-center sm:p-16">
          <p className="text-lg font-semibold text-text">
            {t("comingSoon")}
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-secondary">
            {t("comingSoonDescription")}
          </p>
        </div>
      </Container>
    </Section>
  );
}