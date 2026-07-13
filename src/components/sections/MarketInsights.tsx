import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function MarketInsights() {
  const t = useTranslations("MarketInsights");

  const reportsLink = "/market-insights";

  const insights = [
    {
      title: t("reports.title"),
      description: t("reports.description"),
      icon: "📄",
      buttonText: t("reports.button"),
      link: "/market-insights/reports",
    },
    {
      title: t("trends.title"),
      description: t("trends.description"),
      icon: "📈",
      buttonText: t("trends.button"),
      link: "/market-insights/price-history",
    },
    {
      title: t("news.title"),
      description: t("news.description"),
      icon: "🚢",
      buttonText: t("news.button"),
      link: "/market-insights/logistics-news",
    },
  ];

  return (
    <Section className="bg-surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              {t("eyebrow")}
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 text-lg leading-8 text-text-secondary">
              {t("description")}
            </p>

            <div className="mt-8">
              <Link
                href={reportsLink}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                {t("exploreInsights")}
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-bold text-text">
                  {t("stats.categoriesValue")}
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  {t("stats.categoriesLabel")}
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-text">
                  {t("stats.trackingValue")}
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  {t("stats.trackingLabel")}
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-text">
                  {t("stats.coverageValue")}
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  {t("stats.coverageLabel")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {insights.map((item) => (
            <Card key={item.link} className="flex h-full flex-col">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-3xl">
                {item.icon}
              </div>

              <div className="flex-grow space-y-3">
                <h3 className="text-xl font-semibold text-text">
                  {item.title}
                </h3>

                <p className="text-base leading-7 text-text-secondary">
                  {item.description}
                </p>
              </div>

              <div className="mt-8">
                <Button href={item.link} variant="outline">
                  {item.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}