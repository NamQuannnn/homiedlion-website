import { useTranslations } from "next-intl";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function Products() {
  const t = useTranslations("Products");

  const products = [
    {
      title: t("rawCashewNuts.title"),
      description: t("rawCashewNuts.description"),
      link: "/products/raw-cashew-nuts",
    },
    {
      title: t("cashewKernels.title"),
      description: t("cashewKernels.description"),
      link: "/products/cashew-kernels",
    },
    {
      title: t("freightServices.title"),
      description: t("freightServices.description"),
      link: "/products/freight-services",
    },
  ];

  return (
    <Section className="bg-background">
      <Container>
        <Heading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.link}
              className="flex h-full flex-col"
            >
              <div className="flex-grow space-y-4">
                <h3 className="text-xl font-semibold text-text">
                  {product.title}
                </h3>

                <p className="text-base leading-7 text-text-secondary">
                  {product.description}
                </p>
              </div>

              <div className="mt-8">
                <Button
                  href={product.link}
                  variant="outline"
                >
                  {t("learnMore")} →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}