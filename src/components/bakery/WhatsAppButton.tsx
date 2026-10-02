import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { bakery } from "@/data/bakery";
import {
  customCakeUrl,
  generalOrderUrl,
  productOrderUrl,
} from "@/lib/whatsapp";

type Variant = "primary" | "secondary" | "ghost";

interface WhatsAppButtonProps {
  /** Pass a product name to pre-fill a product order message. */
  product?: string;
  /** "custom-cake" uses the custom cake enquiry script. */
  kind?: "general" | "custom-cake";
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Single reusable "Order on WhatsApp" button. All WhatsApp URL building lives
 * in lib/whatsapp.ts; this component only decides which script to use.
 */
export function WhatsAppButton({
  product,
  kind = "general",
  variant = "primary",
  className,
  children = "Order via WhatsApp",
}: WhatsAppButtonProps) {
  const href =
    product !== undefined
      ? productOrderUrl(product)
      : kind === "custom-cake"
        ? customCakeUrl()
        : generalOrderUrl();

  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        product
          ? `Order ${product} on WhatsApp`
          : typeof children === "string"
            ? children
            : "Order on WhatsApp"
      }
       className={cn(
         "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-wide transition-all duration-300 active:translate-y-px",
         isPrimary && "clay-btn-primary hover:brightness-[1.04] shadow-lg hover:shadow-primary/30",
         variant === "secondary" && "clay-btn-secondary hover:brightness-[0.99]",
         variant === "ghost" &&
           "text-berry-700 hover:text-berry-600 underline decoration-blush-300 decoration-2 underline-offset-4",
         className,
       )}

    >
      {isPrimary && (
        <MessageCircle className="size-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
      )}
      {children}
    </a>
  );
}

/** Compact inline text link for the footer / location rows. */
export function WhatsAppTextLink({
  product,
  className,
  children,
}: {
  product?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={product ? productOrderUrl(product) : generalOrderUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 text-sm text-berry-700 underline decoration-blush-300 decoration-2 underline-offset-4 transition-colors hover:text-berry-600",
        className,
      )}
    >
      {children ?? bakery.name}
    </a>
  );
}
