import PageHeader from '@/components/ui/PageHeader';
import { theme } from '@/lib/theme';

export default function ProductsPage() {
  return (
    <div className="w-full flex-grow">
      <PageHeader 
        title="Our Products" 
        breadcrumbs={[{ label: 'Products', href: '/products' }]} 
      />
      <section className={`bg-white ${theme.layout.section}`}>
        <div className={theme.layout.container}>
          <div className="max-w-3xl">
            <h2 className={theme.typography.h3}>Premium Agricultural Products & Logistics</h2>
            <p className={`${theme.typography.bodyText} mt-6`}>
              Placeholder content for the main Products page. An overview of our offerings in Raw Cashew Nuts, Cashew Kernels, and global Freight Services will be displayed here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}