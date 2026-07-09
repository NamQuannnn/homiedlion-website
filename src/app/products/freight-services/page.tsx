import PageHeader from '@/components/ui/PageHeader';
import { theme } from '@/lib/theme';

export default function FreightServicesPage() {
  return (
    <div className="w-full flex-grow">
      <PageHeader 
        title="Freight Services" 
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Freight Services', href: '/products/freight-services' }
        ]} 
      />
      <section className={`bg-white ${theme.layout.section}`}>
        <div className={theme.layout.container}>
          <div className="max-w-3xl">
            <h2 className={theme.typography.h3}>Global Logistics Support</h2>
            <p className={`${theme.typography.bodyText} mt-6`}>
              Placeholder content for Freight Services. Details about our ocean freight, shipping routes, customs clearance, and supply chain solutions will be displayed here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}