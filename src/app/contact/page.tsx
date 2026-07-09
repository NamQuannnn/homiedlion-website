import PageHeader from '@/components/ui/PageHeader';
import { theme } from '@/lib/theme';

export default function ContactPage() {
  return (
    <div className="w-full flex-grow">
      <PageHeader 
        title="Contact Us" 
        breadcrumbs={[{ label: 'Contact', href: '/contact' }]} 
      />
      <section className={`bg-white ${theme.layout.section}`}>
        <div className={theme.layout.container}>
          <div className="max-w-3xl">
            <h2 className={theme.typography.h3}>Get In Touch</h2>
            <p className={`${theme.typography.bodyText} mt-6`}>
              Placeholder content for the Contact page. We will integrate an extended contact form, Google Maps, and detailed regional office addresses here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}