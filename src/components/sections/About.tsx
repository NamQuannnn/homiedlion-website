import { useTranslations } from "next-intl";

import AboutSlider from "@/components/sections/AboutSlider";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function About() {
  const t = useTranslations("About");

  const features = [
    t("features.premiumProducts"),
    t("features.reliableSupplyChain"),
    t("features.globalTradingExperience"),
    t("features.marketIntelligence"),
  ];

  return (
    <Section className="bg-surface">
      <Container>
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md sm:aspect-square lg:aspect-[4/5] lg:max-w-none">
              <div className="absolute inset-0 overflow-hidden rounded-3xl border border-border shadow-sm">
                <AboutSlider />
              </div>
            </div>
          </div>

          <div className="w-full space-y-8 text-center lg:w-1/2 lg:text-left">
            <Heading
              eyebrow={t("eyebrow")}
              title={t("title")}
              center={false}
            />

            <div className="space-y-6">
              <p className="text-base leading-7 text-text-secondary">
                {t("description1")}
              </p>

              <p className="text-base leading-7 text-text-secondary">
                {t("description2")}
              </p>
            </div>

            <ul className="mx-auto inline-block w-full max-w-sm space-y-4 text-left lg:mx-0">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center space-x-3 text-text"
                >
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary-light text-sm text-primary">
                    ✔
                  </span>

                  <span className="text-[1.05rem] font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center pt-6 lg:justify-start">
              <Button href="/about">{t("learnMore")}</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}