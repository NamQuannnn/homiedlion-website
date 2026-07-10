import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function Products() {
  const products = [
    {
      title: "Raw Cashew Nuts",
      description:
        "Premium quality RCN sourced from trusted origins including West Africa.",
      icon: "🌰",
      link: "/products/raw-cashew-nuts",
    },
    {
      title: "Cashew Kernels",
      description:
        "High-quality processed kernels meeting international export standards.",
      icon: "🥜",
      link: "/products/cashew-kernels",
    },
    {
      title: "Freight Services",
      description:
        "Reliable global shipping and logistics support for international trade.",
      icon: "🚢",
      link: "/products/freight-services",
    },
  ];

  return (
    <Section className="bg-background">
      <Container>
        <Heading
          eyebrow="OUR PRODUCTS"
          title="What We Offer"
          description="Homie D'Lion Group supplies premium agricultural products and logistics services for customers around the world."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.link} className="flex h-full flex-col">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-3xl">
                {product.icon}
              </div>

              <div className="flex-grow space-y-4">
                <h3 className="text-xl font-semibold text-text">
                  {product.title}
                </h3>

                <p className="text-base leading-7 text-text-secondary">
                  {product.description}
                </p>
              </div>

              <div className="mt-8">
                <Button href={product.link} variant="outline">
                  Learn More →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}