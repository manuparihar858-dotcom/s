import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FeaturedProduct } from "@/data/bakery";
import { WhatsAppButton } from "@/components/bakery/WhatsAppButton";
import { ProductImagePlaceholder } from "@/components/bakery/ProductImagePlaceholder";

interface ProductCardProps {
  product: FeaturedProduct;
  className?: string;
}

/**
 * Reusable product card. Shows image (or branded placeholder), name, category
 * label and a WhatsApp order button. No prices — the bakery confirms on chat.
 */
export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <article
      className={cn(
        "clay group flex h-full flex-col overflow-hidden rounded-[2rem] transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
    >
      {/* Image area — replace with real photo when available */}
      <div className="relative aspect-[5/4] overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <ProductImagePlaceholder
            iconClassName="size-9"
            className="transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
        <span className="eyebrow absolute left-4 top-4 rounded-full bg-white/85 px-3.5 py-1.5 text-[0.6rem] text-berry-700 shadow-sm backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col items-center gap-1 px-5 pb-6 pt-5 text-center">
        <h3 className="font-display text-xl font-semibold leading-snug text-berry-800">
          {product.name}
        </h3>
        <p className="text-xs uppercase tracking-[0.2em] text-cocoa-700/60">
          {product.category}
        </p>

        <div className="mt-auto pt-5">
          <WhatsAppButton
            product={product.name}
            className="px-5 py-2.5 text-sm"
          >
            <Sparkles className="size-4" aria-hidden />
            Order via WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
