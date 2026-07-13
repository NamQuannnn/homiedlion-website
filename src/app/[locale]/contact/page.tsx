import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Contact from "@/components/sections/Contact";
import PageHeader from "@/components/ui/PageHeader";

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
    namespace: "PageMetadata.contact",
  });

  const url = `https://homiedlion.com/${locale}/contact`;

  return {
    title: t("title"),
    description: t("description"),

    alternates: {
      canonical: url,
      languages: {
        vi: "https://homiedlion.com/vi/contact",
        en: "https://homiedlion.com/en/contact",
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

export default async function ContactPage({
  params,
}: PageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "ContactPage",
  });

  return (
    <div className="w-full flex-grow">
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("heading")}
        description={t("description")}
        breadcrumbs={[
          {
            label: t("breadcrumb"),
            href: "/contact",
          },
        ]}
      />

      <Contact />
    </div>
  );
}