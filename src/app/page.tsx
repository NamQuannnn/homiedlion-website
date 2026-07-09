import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import MarketInsights from "@/components/sections/MarketInsights";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Products />
      <MarketInsights />
    </div>
  );
}