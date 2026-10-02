import { featuredProducts } from "@/data/bakery";
import { ProductCard } from "@/components/bakery/ProductCard";
import { Reveal } from "@/components/bakery/Reveal";
import { SectionHeading } from "@/components/bakery/SectionHeading";

/** "Featured Treats" — six signature products from the menu. */
export function FeaturedProducts() {
  return (
    <section id="featured" className="pb-16 sm:pb-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Treats"
          title={
            <>
              Loved from the <em className="text-blush-600">very first bite</em>
            </>
          }
          lead="A little peek at the Sweet Retreat collection. Spot something you like? Order it on WhatsApp and we'll confirm availability personally."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {featuredProducts.map((product, index) => (
            <Reveal key={product.name} delay={0.05 * (index % 3)}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
