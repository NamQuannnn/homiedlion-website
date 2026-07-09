import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function MarketInsights() {
  const insights = [
    {
      title: "Market Reports",
      description: "Weekly and monthly market analysis.",
      icon: "📄",
      buttonText: "Read Reports",
      link: "/market-insights/reports",
    },
    {
      title: "Price Trends",
      description: "Interactive price charts and historical data.",
      icon: "📈",
      buttonText: "View Charts",
      link: "/market-insights/trends",
    },
    {
      title: "Industry News",
      description: "Latest news from global cashew markets.",
      icon: "📰",
      buttonText: "Read News",
      link: "/market-insights/news",
    },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <Heading
          eyebrow="MARKET INSIGHTS"
          title="Latest Cashew Market Updates"
          description="Stay informed with market reports, price trends and industry news from Homie D'Lion Group."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {insights.map((item) => (
            <Card key={item.link} className="flex h-full flex-col">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FAF8F5] text-3xl">
                {item.icon}
              </div>

              <div className="flex-grow space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-base leading-7 text-gray-600">
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