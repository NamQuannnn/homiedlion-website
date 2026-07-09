import PageHeader from '@/components/ui/PageHeader';
import { theme } from '@/lib/theme';

export default function AboutPage() {
  return (
    <div className="w-full flex-grow">
      <PageHeader 
        title="About Us" 
        breadcrumbs={[{ label: 'About', href: '/about' }]} 
      />
      <section className={`bg-white ${theme.layout.section}`}>
        <div className={theme.layout.container}>
          <div className="max-w-3xl">
            <h2 className={theme.typography.h3}>Our Story</h2>
            <p className={`${theme.typography.bodyText} mt-6`}>
              Placeholder content for the About page. Detailed information about Homie D'Lion Group's history, mission, vision, and core values will be displayed here in future sprints.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}