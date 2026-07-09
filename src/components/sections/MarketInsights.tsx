import Link from 'next/link';
import { theme } from '@/lib/theme';

export default function MarketInsights() {
  const insights = [
    {
      title: 'Market Reports',
      description: 'Weekly and monthly market analysis.',
      icon: '📄',
      buttonText: 'Read Reports',
      link: '/market-insights/reports',
    },
    {
      title: 'Price Trends',
      description: 'Interactive price charts and historical data.',
      icon: '📈',
      buttonText: 'View Charts',
      link: '/market-insights/trends',
    },
    {
      title: 'Industry News',
      description: 'Latest news from global cashew markets.',
      icon: '📰',
      buttonText: 'Read News',
      link: '/market-insights/news',
    },
  ];

  return (
    <section className={`bg-white ${theme.layout.section}`}>
      <div className={theme.layout.container}>
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className={theme.typography.sectionSubtitle}>
            MARKET INSIGHTS
          </span>
          <h2 className={theme.typography.h2}>
            Latest Cashew Market Updates
          </h2>
          <p className={theme.typography.bodyText}>
            Stay informed with market reports, price trends and industry news from Homie D'Lion Group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((item, index) => (
            <div key={index} className={theme.cards.base}>
              <div className={theme.cards.iconWrapper}>
                {item.icon}
              </div>
              <div className="flex-grow space-y-3">
                <h4 className={theme.typography.h4}>
                  {item.title}
                </h4>
                <p className={theme.typography.bodyText}>
                  {item.description}
                </p>
              </div>
              <div className="pt-8 mt-auto">
                <Link href={item.link} className={theme.buttons.outline}>
                  {item.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}