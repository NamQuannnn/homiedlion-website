import Link from 'next/link';

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
    <section className="bg-[#FAF8F5] py-20 lg:py-32 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Phần Tiêu đề Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h3 className="text-sm font-bold tracking-widest text-red-800 uppercase">
            OUR PRODUCTS
          </h3>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Homie D'Lion Group supplies premium agricultural products and logistics services for customers around the world.
          </p>
        </div>

        {/* Lưới sản phẩm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 flex flex-col h-full shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-6 bg-red-50 w-16 h-16 flex items-center justify-center rounded-2xl">
                {product.icon}
              </div>
              <div className="flex-grow space-y-4">
                <h4 className="text-xl font-bold text-gray-900">
                  {product.title}
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  {product.description}
                </p>
              </div>
              <div className="pt-8 mt-auto">
                <Link 
                  href={product.link}
                  className="inline-flex items-center text-red-800 font-medium hover:text-red-900 transition-colors"
                >
                  Learn More 
                  <span className="ml-2 text-xl leading-none">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}