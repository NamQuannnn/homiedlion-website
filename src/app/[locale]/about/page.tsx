import { getTranslations } from "next-intl/server";

import PageHeader from "@/components/ui/PageHeader";
import { theme } from "@/lib/theme";

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");

  return (
    <div className="w-full flex-grow">
      <PageHeader
        title={t("title")}
        breadcrumbs={[
          {
            label: t("breadcrumb"),
            href: "/about",
          },
        ]}
      />

      <section className={`bg-white ${theme.layout.section}`}>
        <div className={theme.layout.container}>
          <div className="mx-auto max-w-4xl">
            <h2 className={theme.typography.h3}>
              {t("heading")}
            </h2>

            <p className={`${theme.typography.bodyText} mt-8 whitespace-pre-line`}>
              {t("paragraph1")}
            </p>

            <p className={`${theme.typography.bodyText} mt-6 whitespace-pre-line`}>
              {t("paragraph2")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}