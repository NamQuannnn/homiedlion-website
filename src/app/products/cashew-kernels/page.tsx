import PageHeader from '@/components/ui/PageHeader';
import { theme } from '@/lib/theme';

export default function CashewKernelsPage() {
  return (
    <div className="w-full flex-grow">
      <PageHeader 
        title="Cashew Kernels" 
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Cashew Kernels', href: '/products/cashew-kernels' }
        ]} 
      />
      <section className={`bg-white ${theme.layout.section}`}>
        <div className={theme.layout.container}>
          <div className="max-w-3xl">
            <h2 className={theme.typography.h3}>Processed to Perfection</h2>
            <p className={`${theme.typography.bodyText} mt-6`}>
              Placeholder content for Cashew Kernels. Information regarding processing standards, kernel grades (W240, W320, etc.), and international certifications will go here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}