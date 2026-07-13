import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

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
    namespace: "PageMetadata.about",
  });

  const url = `https://homiedlion.com/${locale}/about`;

  return {
    title: t("title"),
    description: t("description"),

    alternates: {
      canonical: url,
      languages: {
        vi: "https://homiedlion.com/vi/about",
        en: "https://homiedlion.com/en/about",
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

export default async function AboutPage({
  params,
}: PageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "AboutPage",
  });

  const values = [
    {
      icon: "🤝",
      title: t("value1Title"),
      description: t("value1Description"),
    },
    {
      icon: "🌍",
      title: t("value2Title"),
      description: t("value2Description"),
    },
    {
      icon: "📊",
      title: t("value3Title"),
      description: t("value3Description"),
    },
    {
      icon: "❤️",
      title: t("value4Title"),
      description: t("value4Description"),
    },
  ];

  const reasons = [
    {
      number: "01",
      title: t("why1Title"),
      description: t("why1Description"),
    },
    {
      number: "02",
      title: t("why2Title"),
      description: t("why2Description"),
    },
    {
      number: "03",
      title: t("why3Title"),
      description: t("why3Description"),
    },
    {
      number: "04",
      title: t("why4Title"),
      description: t("why4Description"),
    },
  ];

  return (
    <div className="w-full flex-grow">
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("heading")}
        description={t("heroDescription")}
        breadcrumbs={[
          {
            label: t("breadcrumb"),
            href: "/about",
          },
        ]}
      />

      {/* OUR STORY */}
      <Section className="relative overflow-hidden bg-background">
        {/*
          Sau này thêm ảnh nền tại đây:

          <Image
            src="/images/about/story-bg.webp"
            alt=""
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-background/90" />
        */}

        <Container className="relative z-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {t("storyEyebrow")}
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl">
            {t("storyTitle")}
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-9 text-text-secondary">
            <p>{t("paragraph1")}</p>
            <p>{t("paragraph2")}</p>
          </div>
        </Container>
      </Section>
      <Section className="relative overflow-hidden bg-background">
  <Container>
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        {t("timelineEyebrow")}
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl">
        {t("timelineTitle")}
      </h2>
    </div>

    {/* Desktop timeline */}
    <div className="relative mt-20 hidden lg:block">
      <div className="absolute left-0 right-0 top-[300px] h-[3px] bg-primary" />

      <div className="grid grid-cols-4 gap-10">
        {/* 2019 */}
        <div className="relative flex min-h-[520px] flex-col">
          <div className="pb-24">
            <p className="text-5xl font-bold text-primary">
              2019
            </p>

            <h3 className="mt-5 text-2xl font-bold text-text">
              {t("timeline2019Title")}
            </h3>

            <p className="mt-4 max-w-xs leading-7 text-text-secondary">
              {t("timeline2019Description")}
            </p>
          </div>

          <div className="absolute left-1/2 top-[240px] h-[60px] w-px -translate-x-1/2 bg-text" />

          <div className="absolute left-1/2 top-[240px] h-3 w-3 -translate-x-1/2 rotate-45 bg-text" />
        </div>

        {/* 2023 */}
        <div className="relative flex min-h-[520px] flex-col pt-[330px]">
          <div className="absolute left-1/4 top-[300px] h-[25px] w-px -translate-x-1/2 bg-text" />

          <div className="absolute left-1/4 top-[320px] h-3 w-3 -translate-x-1/2 rotate-45 bg-text" />

          <p className="text-5xl font-bold text-primary">
            2023
          </p>

          <h3 className="mt-5 text-2xl font-bold text-text">
            {t("timeline2023Title")}
          </h3>

          <p className="mt-4 max-w-xs leading-7 text-text-secondary">
            {t("timeline2023Description")}
          </p>
        </div>

        {/* 2025 */}
        <div className="relative flex min-h-[520px] flex-col">
          <div className="pb-24">
            <p className="text-5xl font-bold text-primary">
              2025
            </p>

            <h3 className="mt-5 text-2xl font-bold text-text">
              {t("timeline2025Title")}
            </h3>

            <p className="mt-4 max-w-xs leading-7 text-text-secondary">
              {t("timeline2025Description")}
            </p>
          </div>

          <div className="absolute left-1/2 top-[255px] h-[45px] w-px -translate-x-1/2 bg-text" />

          <div className="absolute left-1/2 top-[255px] h-3 w-3 -translate-x-1/2 rotate-45 bg-text" />
        </div>

        {/* Today */}
        <div className="relative flex min-h-[520px] flex-col pt-[330px]">
          <div className="absolute left-1/3 top-[300px] h-[25px] w-px -translate-x-1/2 bg-text" />

          <div className="absolute left-1/3 top-[315px] h-3 w-3 -translate-x-1/2 rotate-45 bg-text" />

          <p className="text-5xl font-bold text-primary">
            Today
          </p>

          <h3 className="mt-5 text-2xl font-bold text-text">
            {t("timelineTodayTitle")}
          </h3>

          <p className="mt-4 max-w-xs leading-7 text-text-secondary">
            {t("timelineTodayDescription")}
          </p>
        </div>
      </div>
    </div>

    {/* Mobile timeline */}
    <div className="relative mt-14 space-y-12 pl-8 lg:hidden">
      <div className="absolute bottom-0 left-2 top-0 w-px bg-primary" />

      {[
        {
          year: "2019",
          title: t("timeline2019Title"),
          description: t("timeline2019Description"),
        },
        {
          year: "2023",
          title: t("timeline2023Title"),
          description: t("timeline2023Description"),
        },
        {
          year: "2025",
          title: t("timeline2025Title"),
          description: t("timeline2025Description"),
        },
        {
          year: "Today",
          title: t("timelineTodayTitle"),
          description: t("timelineTodayDescription"),
        },
      ].map((item) => (
        <div key={item.year} className="relative">
          <div className="absolute -left-[30px] top-2 h-4 w-4 rounded-full border-4 border-background bg-primary" />

          <p className="text-3xl font-bold text-primary">
            {item.year}
          </p>

          <h3 className="mt-3 text-2xl font-bold text-text">
            {item.title}
          </h3>

          <p className="mt-3 leading-7 text-text-secondary">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </Container>
</Section>

      {/* MISSION & VISION */}
      <Section className="relative overflow-hidden bg-surface">
        {/*
          Ảnh nền sau này:
          /images/about/mission-vision-bg.webp
        */}

        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                {t("missionEyebrow")}
              </p>

              <h3 className="mt-4 text-3xl font-bold text-text">
                {t("missionTitle")}
              </h3>

              <p className="mt-6 text-lg leading-8 text-text-secondary">
                {t("missionDescription")}
              </p>
            </Card>

            <Card className="p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                {t("visionEyebrow")}
              </p>

              <h3 className="mt-4 text-3xl font-bold text-text">
                {t("visionTitle")}
              </h3>

              <p className="mt-6 text-lg leading-8 text-text-secondary">
                {t("visionDescription")}
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CORE VALUES */}
      <Section className="relative overflow-hidden bg-background">
        {/*
          Ảnh nền sau này:
          /images/about/core-values-bg.webp
        */}

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              {t("valuesEyebrow")}
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl">
              {t("valuesTitle")}
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <Card
                key={value.title}
                className="flex h-full flex-col p-8"
              >
                <div className="mb-6 text-4xl" aria-hidden="true">
                  {value.icon}
                </div>

                <h3 className="text-xl font-bold text-text">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-text-secondary">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHY HOMIE D'LION */}
      <Section className="relative mt-16 overflow-hidden bg-surface sm:mt-24">
        {/*
          Sau này thêm ảnh nền:

          <Image
            src="/images/about/why-homie-bg.webp"
            alt=""
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-background/90" />
        */}

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              {t("whyEyebrow")}
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl">
              {t("whyTitle")}
            </h2>

            <p className="mt-6 text-lg leading-8 text-text-secondary">
              {t("whyDescription")}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {reasons.map((reason) => (
              <Card
                key={reason.number}
                className="h-full p-8 sm:p-10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {reason.number}
                </p>

                <h3 className="mt-4 text-2xl font-bold text-text">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-text-secondary">
                  {reason.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}