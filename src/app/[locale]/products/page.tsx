import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
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
    namespace: "PageMetadata.products",
  });

  const url = `https://homiedlion.com/${locale}/products`;

  return {
    title: t("title"),
    description: t("description"),

    alternates: {
      canonical: url,
      languages: {
        vi: "https://homiedlion.com/vi/products",
        en: "https://homiedlion.com/en/products",
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

export default async function ProductsPage() {
  const t = await getTranslations("ProductsPage");

  const products = [
    {
      title: t("rawCashewNuts.title"),
      description: t("rawCashewNuts.description"),
      href: "/products/raw-cashew-nuts",
    },
    {
      title: t("cashewKernels.title"),
      description: t("cashewKernels.description"),
      href: "/products/cashew-kernels",
    },
    {
      title: t("freightServices.title"),
      description: t("freightServices.description"),
      href: "/products/freight-services",
    },
  ];

  return (
    <div className="w-full flex-grow">
      <PageHeader
        title={t("title")}
        breadcrumbs={[
          {
            label: t("breadcrumb"),
            href: "/products",
          },
        ]}
      />

      <Section className="bg-surface">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              {t("eyebrow")}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              {t("heading")}
            </h2>

            <p className="mt-6 text-lg leading-8 text-text-secondary">
              {t("description")}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {products.map((product) => (
              <Card
                key={product.href}
                className="flex h-full flex-col"
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-text">
                    {product.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-text-secondary">
                    {product.description}
                  </p>
                </div>

                <div className="mt-8">
                  <Button
                    href={product.href}
                    variant="outline"
                  >
                    {t("learnMore")} →
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-border bg-background p-8 text-center sm:p-10">
            <h3 className="text-2xl font-bold text-text">
              {t("brokerage.title")}
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-text-secondary">
              {t("brokerage.description")}
            </p>

            <div className="mt-8">
              <Button href="/contact">
                {t("brokerage.button")}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}