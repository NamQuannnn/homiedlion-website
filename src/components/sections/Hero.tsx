import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full py-20 lg:py-32 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight">
            Homie D&apos;Lion Group
          </h1>
          <p className="text-2xl sm:text-3xl font-light text-red-800 tracking-wide">
            Built with Trust and Effort
          </p>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto pt-4">
            Global Cashew Trading & Market Intelligence
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link
            href="/products"
            className="w-full sm:w-auto px-8 py-3 bg-red-800 text-white font-medium rounded-md hover:bg-red-900 transition-colors"
          >
            Explore Products
          </Link>
          <Link
            href="/market-insights"
            className="w-full sm:w-auto px-8 py-3 bg-white text-gray-900 border border-gray-300 font-medium rounded-md hover:bg-gray-50 transition-colors shadow-sm"
          >
            Market Insights
          </Link>
        </div>
      </div>
    </section>
  );
}
