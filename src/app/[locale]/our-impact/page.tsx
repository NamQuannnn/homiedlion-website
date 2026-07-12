import { getTranslations } from "next-intl/server";

import ImpactCard from "@/components/our-impact/ImpactCard";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { getAllImpactStories } from "@/lib/our-impact";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function OurImpactPage({
  params,
}: PageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "OurImpact",
  });

  const stories = await getAllImpactStories(locale);

  return (
    <Section className="bg-background">
      <Container>
        <Heading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        {stories.length === 0 ? (
          <div className="mt-20 rounded-3xl border border-dashed border-border p-16 text-center">
            <h3 className="text-2xl font-bold">
              No stories yet
            </h3>

            <p className="mt-4 text-text-secondary">
              Add your first story inside
              <br />
              <code>src/content/our-impact</code>
            </p>
          </div>
        ) : (
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {stories.map((story) => (
              <ImpactCard
                key={story.slug}
                story={story}
                locale={locale}
                readLabel={t("readStory")}
              />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}