import Link from 'next/link';
import { theme } from '@/lib/theme';

export default function Products() {
  const products = [
    {
      title: 'Raw Cashew Nuts',
      description: 'Premium quality RCN sourced from trusted origins including West Africa.',
      icon: '🌰',
      link: '/products',
    },
    {
      title: 'Cashew Kernels',
      description: 'High-quality processed kernels meeting international export standards.',
      icon: '🥜',
      link: '/products',
    },
    {
      title: 'Freight Services',
      description: 'Reliable global shipping and logistics support for international trade.',
      icon: '🚢',
      link: '/products',
    },
  ];

  return (
    <section className={`bg-[#FAF8F5] ${theme.layout.section}`}>
      <div className={theme.layout.container}>
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className={theme.typography.sectionSubtitle}>
            OUR PRODUCTS
          </span>
          <h2 className={theme.typography.h2}>
            What We Offer
          </h2>
          <p className={theme.typography.bodyText}>
            Homie D'Lion Group supplies premium agricultural products and logistics services for customers around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className={theme.cards.base}>
              <div className={theme.cards.iconWrapper}>
                {product.icon}
              </div>
              <div className="flex-grow space-y-4">
                <h4 className={theme.typography.h4}>
                  {product.title}
                </h4>
                <p className={theme.typography.bodyText}>
                  {product.description}
                </p>
              </div>
              <div className="pt-8 mt-auto">
                <Link href={product.link} className={theme.buttons.textLink}>
                  Learn More <span className="ml-2 text-xl leading-none">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}