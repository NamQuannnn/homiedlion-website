import PageHeader from '@/components/ui/PageHeader';
import { theme } from '@/lib/theme';

export default function MarketInsightsPage() {
  return (
    <div className="w-full flex-grow">
      <PageHeader 
        title="Market Insights" 
        breadcrumbs={[{ label: 'Market Insights', href: '/market-insights' }]} 
      />
      <section className={`bg-white ${theme.layout.section}`}>
        <div className={theme.layout.container}>
          <div className="max-w-3xl">
            <h2 className={theme.typography.h3}>Industry News & Trends</h2>
            <p className={`${theme.typography.bodyText} mt-6`}>
              Placeholder content for Market Insights. Future updates will include a dynamic list of articles, weekly price trends, and comprehensive cashew market reports.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}