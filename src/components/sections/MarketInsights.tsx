import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function MarketInsights() {
  const insights = [
    {
      title: "Market Reports",
      description:
        "Weekly and monthly cashew market analysis for better trading decisions.",
      icon: "📄",
      buttonText: "Read Reports",
      link: "/market-insights/reports",
    },
    {
      title: "Price Trends",
      description:
        "Track RCN and kernel price movements across key origins and markets.",
      icon: "📈",
      buttonText: "View Charts",
      link: "/market-insights/trends",
    },
    {
      title: "Industry News",
      description:
        "Latest updates from global cashew origins, buyers, exporters and logistics.",
      icon: "📰",
      buttonText: "Read News",
      link: "/market-insights/news",
    },
  ];

  return (
    <Section className="bg-surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              MARKET INSIGHTS
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
              Cashew market intelligence for global trade
            </h2>

            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Stay informed with market reports, price trends and industry news
              from Homie D&apos;Lion Group.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/market-insights">Explore Insights</Button>

              <Button href="/market-insights/reports" variant="outline">
                View Reports
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-bold text-text">3</p>
                <p className="mt-1 text-sm text-text-secondary">
                  Insight categories
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-text">24/7</p>
                <p className="mt-1 text-sm text-text-secondary">
                  Market tracking
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-text">Global</p>
                <p className="mt-1 text-sm text-text-secondary">
                  Cashew coverage
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