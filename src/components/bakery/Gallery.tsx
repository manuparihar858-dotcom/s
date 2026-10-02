import { Camera } from "lucide-react";
import { SectionHeading } from "@/components/bakery/SectionHeading";
import { Reveal } from "@/components/bakery/Reveal";
import { ProductImagePlaceholder } from "@/components/bakery/ProductImagePlaceholder";

/**
 * Editorial asymmetric gallery. Uses tasteful branded placeholders for now —
 * replace each tile with a real photo from the bakery later; the grid layout
 * and ratios are already tuned for photography.
 */
const galleryTiles = [
  { ratio: "aspect-[4/5]", span: "sm:row-span-2" },
  { ratio: "aspect-[4/3]", span: "" },
  { ratio: "aspect-[4/3]", span: "" },
  { ratio: "aspect-[4/3]", span: "sm:col-span-2" },
  { ratio: "aspect-[4/5]", span: "" },
  { ratio: "aspect-[4/3]", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="pb-16 sm:pb-24" aria-label="Gallery">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              A Little Taste of <em className="text-blush-600">Sweet Retreat</em>
            </>
          }
          lead="Fresh from the oven — a peek at the bakes, celebrations and little moments from our kitchen."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:grid-rows-2 lg:gap-5">
          {galleryTiles.map((tile, index) => (
            <Reveal
              key={index}
              delay={0.04 * (index % 3)}
              className={tile.span}
            >
              <div
                className={`clay h-full overflow-hidden rounded-[2rem] ${tile.ratio}`}
              >
                <ProductImagePlaceholder
                  iconClassName={index % 3 === 0 ? "size-9" : "size-7"}
                  label={
                    index % 3 === 0 ? "From our kitchen" : "Sweet Retreat bakes"
                  }
                  className="h-full"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="inline-flex items-center gap-2 text-sm text-cocoa-700/60">
            <Camera className="size-4" aria-hidden />
            Real bakery photographs coming soon.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
