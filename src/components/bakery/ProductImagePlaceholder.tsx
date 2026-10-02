import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductImagePlaceholderProps {
  /** Tailwind text size class for the icon. */
  iconClassName?: string;
  className?: string;
  label?: string;
}

/**
 * Tasteful branded stand-in used until real product photography arrives.
 * The parent decides the aspect ratio; swap in a real <img> by replacing
 * this component's usage with the image URL from the product data.
 */
export function ProductImagePlaceholder({
  iconClassName = "size-10",
  className,
  label,
}: ProductImagePlaceholderProps) {
  return (
    <div
      aria-hidden={label ? undefined : true}
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-3",
        "bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.9),rgba(244,221,226,0.55)_55%,rgba(235,196,208,0.35))] text-blush-500",
        className,
      )}
    >
      <span className="flex size-16 items-center justify-center rounded-full bg-white/70 shadow-[inset_0_2px_0_rgba(255,255,255,0.9),inset_-4px_-6px_12px_rgba(199,152,138,0.2),0_8px_16px_-8px_rgba(122,74,62,0.25)]">
        <Sparkles className={iconClassName} strokeWidth={1.5} />
      </span>
      {label && (
        <span className="px-4 text-center text-[0.65rem] font-medium uppercase tracking-[0.22em] text-blush-500/80">
          {label}
        </span>
      )}
    </div>
  );
}
