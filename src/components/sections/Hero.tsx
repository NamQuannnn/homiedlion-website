import { Link } from '@/i18n/routing';
import { theme } from '@/lib/theme';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className={`relative bg-[#FAF8F5] flex flex-col items-center justify-center text-center ${theme.layout.section}`}>
      <div className="max-w-4xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h1 className={theme.typography.h1}>
            {t('title')}
          </h1>
          <p className="text-2xl sm:text-3xl font-light text-[#7A5A2B] tracking-wide">
            {t('subtitle')}
          </p>
          <p className={`${theme.typography.bodyText} max-w-2xl mx-auto pt-4`}>
            {t('description')}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link href="/products" className={theme.buttons.primary}>
            {t('exploreProducts')}
          </Link>
          <Link href="/market-insights" className={theme.buttons.outline}>
            {t('marketInsights')}
          </Link>
        </div>
      </div>
    </section>
  );
}