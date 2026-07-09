import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Products />
    </div>
  );
}