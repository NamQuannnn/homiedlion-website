import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import MarketInsights from "@/components/sections/MarketInsights";
import Contact from "@/components/sections/Contact";

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
    namespace: "PageMetadata.home",
  });

  const url = `https://homiedlion.com/${locale}`;

  return {
    title: t("title"),
    description: t("description"),

    alternates: {
      canonical: url,
      languages: {
        vi: "https://homiedlion.com/vi",
        en: "https://homiedlion.com/en",
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

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Products />
      <MarketInsights />
      <Contact />
    </div>
  );
}