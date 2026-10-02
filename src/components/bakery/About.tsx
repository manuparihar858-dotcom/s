import { SectionHeading } from "@/components/bakery/SectionHeading";
import { Reveal } from "@/components/bakery/Reveal";
import { ProductImagePlaceholder } from "@/components/bakery/ProductImagePlaceholder";

/**
 * Short about section. Only states what the bakery shared: a boutique home
 * bakery in Mahalaxmi Nagar, Indore. No founding year, owner names, awards or
 * statistics are invented.
 */
export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 pb-16 sm:pb-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <div className="clay relative overflow-hidden rounded-[2.5rem]">
            <div className="aspect-[4/3]">
              <ProductImagePlaceholder
                iconClassName="size-12"
                label="The Sweet Retreat kitchen"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title={
              <>
                A Sweet Retreat <em className="text-blush-600">in Indore</em>
              </>
            }
          />
          <Reveal delay={0.08}>
            <p className="mt-5 text-base leading-relaxed text-cocoa-700/90">
              Sweet Retreat is a boutique artisan home bakery nestled in Mahalaxmi Nagar,
              Indore. We specialize in curated cakes, handmade chocolates, gourmet
              brownies, and delicate muffins — each creation reflecting a commitment
              to quality ingredients and a personal touch.
            </p>
            <p className="mt-4 text-base leading-relaxed text-cocoa-700/90">
              Every order is handled with personal attention via WhatsApp, allowing
              us to discuss custom preferences, sizes, and availability to ensure your
              treats are exactly as imagined.
            </p>
            <p className="script-text mt-6 text-2xl">Homemade with Love</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
