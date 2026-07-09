import { useTranslations } from "next-intl";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <Section className="relative bg-[#FAF8F5]">
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Heading
            eyebrow={t("subtitle")}
            title={t("title")}
            description={t("description")}
          />

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/products">{t("exploreProducts")}</Button>

            <Button href="/market-insights" variant="outline">
              {t("marketInsights")}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}