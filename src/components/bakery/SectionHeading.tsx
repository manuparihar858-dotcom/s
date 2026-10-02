import { Reveal } from "@/components/bakery/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  align?: "center" | "left";
  className?: string;
}

/**
 * Shared section header: uppercase spaced eyebrow, elegant serif title,
 * optional muted lead paragraph. Keeps editorial rhythm consistent site-wide.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={
        centered
          ? "mx-auto max-w-2xl text-center"
          : `max-w-2xl ${className ?? ""}`
      }
    >
      {eyebrow && (
        <p className="eyebrow mb-4 flex items-center gap-3 justify-center">
          <span className="h-px w-8 bg-blush-300" aria-hidden />
          {eyebrow}
          <span className="h-px w-8 bg-blush-300" aria-hidden />
        </p>
      )}
      <h2 className="font-display text-3xl leading-tight text-berry-800 sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-base leading-relaxed text-cocoa-700/90 ${
            centered ? "mx-auto" : ""
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
