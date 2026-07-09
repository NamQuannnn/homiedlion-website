import Link from 'next/link';
import { theme } from '@/lib/theme';

export default function Hero() {
  return (
    <section className={`relative bg-[#FAF8F5] flex flex-col items-center justify-center text-center ${theme.layout.section}`}>
      <div className="max-w-4xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h1 className={theme.typography.h1}>
            Homie D'Lion Group
          </h1>
          <p className="text-2xl sm:text-3xl font-light text-[#7A5A2B] tracking-wide">
            Built with Trust and Effort
          </p>
          <p className={`${theme.typography.bodyText} max-w-2xl mx-auto pt-4`}>
            Global Cashew Trading & Market Intelligence
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link href="/products" className={theme.buttons.primary}>
            Explore Products
          </Link>
          <Link href="/market-insights" className={theme.buttons.outline}>
            Market Insights
          </Link>
        </div>
      </div>
    </section>
  );
}