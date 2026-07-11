import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import PageHeader from "@/components/ui/PageHeader";
import { theme } from "@/lib/theme";

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

export default async function ContactPage() {
  const locale = await getTranslations("ContactPage");

  return (
    <div className="w-full flex-grow">
      <PageHeader
        title={locale("title")}
        breadcrumbs={[
          {
            label: locale("breadcrumb"),
            href: "/contact",
          },
        ]}
      />

      <section className={`bg-white ${theme.layout.section}`}>
        <div className={theme.layout.container}>
          <div className="max-w-3xl">
            <h2 className={theme.typography.h3}>
              {locale("heading")}
            </h2>

            <p className={`${theme.typography.bodyText} mt-6`}>
              {locale("description")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}