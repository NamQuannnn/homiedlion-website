import PageHeader from '@/components/ui/PageHeader';
import { theme } from '@/lib/theme';

export default function RawCashewNutsPage() {
  return (
    <div className="w-full flex-grow">
      <PageHeader 
        title="Raw Cashew Nuts" 
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Raw Cashew Nuts', href: '/products/raw-cashew-nuts' }
        ]} 
      />
      <section className={`bg-white ${theme.layout.section}`}>
        <div className={theme.layout.container}>
          <div className="max-w-3xl">
            <h2 className={theme.typography.h3}>Premium RCN Sourcing</h2>
            <p className={`${theme.typography.bodyText} mt-6`}>
              Placeholder content for Raw Cashew Nuts. Detailed specifications, trusted origins, quality metrics, and packaging options will be displayed here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}