import Link from 'next/link';

export default function MarketInsights() {
  const insights = [
    {
      title: 'Market Reports',
      description: 'Weekly and monthly market analysis.',
      icon: '📄',
      buttonText: 'Read Reports',
      link: '/market-insights/reports',
    },
    {
      title: 'Price Trends',
      description: 'Interactive price charts and historical data.',
      icon: '📈',
      buttonText: 'View Charts',
      link: '/market-insights/trends',
    },
    {
      title: 'Industry News',
      description: 'Latest news from global cashew markets.',
      icon: '📰',
      buttonText: 'Read News',
      link: '/market-insights/news',
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-32 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Phần Tiêu đề Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h3 className="text-sm font-bold tracking-widest text-red-800 uppercase">
            MARKET INSIGHTS
          </h3>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Latest Cashew Market Updates
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Stay informed with market reports, price trends and industry news from Homie D'Lion Group.
          </p>
        </div>

        {/* Lưới thông tin */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((item, index) => (
            <div 
              key={index}
              className="bg-[#FAF8F5] rounded-2xl p-8 flex flex-col h-full shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-6 bg-white w-14 h-14 flex items-center justify-center rounded-xl shadow-sm">
                {item.icon}
              </div>
              <div className="flex-grow space-y-3">
                <h4 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="pt-8 mt-auto">
                <Link 
                  href={item.link}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-gray-900 font-medium rounded-md border border-gray-200 hover:bg-gray-50 hover:text-red-800 transition-colors shadow-sm"
                >
                  {item.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}