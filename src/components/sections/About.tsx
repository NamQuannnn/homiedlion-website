import Link from 'next/link';

export default function About() {
  const features = [
    'Premium Products',
    'Reliable Supply Chain',
    'Global Trading Experience',
    'Market Intelligence',
  ];

  return (
    <section className="bg-white py-20 lg:py-32 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Cột trái: Hình ảnh */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] sm:aspect-square lg:aspect-[4/5] w-full mx-auto max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-gray-100 rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex items-center justify-center">
                <span className="text-gray-400 font-medium">
                  [Image Placeholder]
                </span>
              </div>
            </div>
          </div>

          {/* Cột phải: Nội dung */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-widest text-red-800 uppercase">
                ABOUT US
              </h3>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Trusted Partner in Global Cashew Trade
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 font-light">
              <p>
                Homie D'Lion Group is committed to providing premium Raw Cashew Nuts, Cashew Kernels, and reliable logistics solutions to customers worldwide.
              </p>
              <p>
                Our focus is transparency, long-term partnerships, and market intelligence that helps clients make better business decisions.
              </p>
            </div>

            <div className="pt-2">
              <ul className="space-y-4 inline-block text-left w-full max-w-sm mx-auto lg:mx-0">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-800">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-800 text-sm">
                      ✔
                    </span>
                    <span className="font-medium text-[1.05rem]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 flex justify-center lg:justify-start">
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white font-medium rounded-md hover:bg-black transition-colors shadow-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}