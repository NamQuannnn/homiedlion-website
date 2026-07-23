import { getTranslations } from "next-intl/server";

import PriceHistoryChart from "@/components/market-insights/PriceHistoryChart";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { getPriceHistory } from "@/lib/price-history";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function PriceHistoryPage({
  params,
}: PageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "PriceHistoryPage",
  });

  const priceHistory = await getPriceHistory();

  return (
    <Section className="bg-background">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {t("eyebrow")}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl">
            {t("title")}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
            {t("description")}
          </p>
        </div>

        <div className="mt-16">
          <PriceHistoryChart
            data={priceHistory.rows}
            grades={priceHistory.grades}
          />
        </div>
      </Container>
    </Section>
  );
}