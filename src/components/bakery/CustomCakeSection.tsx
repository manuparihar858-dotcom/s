import { Cake } from "lucide-react";
import { WhatsAppButton } from "@/components/bakery/WhatsAppButton";
import { Reveal } from "@/components/bakery/Reveal";

/** "Made for Your Moment" — custom cake enquiry section. */
export function CustomCakeSection() {
  return (
    <section
      id="custom-cakes"
      className="scroll-mt-24 pb-16 sm:pb-24"
      aria-labelledby="custom-cakes-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="clay relative overflow-hidden rounded-[2.5rem] px-6 py-14 text-center sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 -bottom-16 size-56 rounded-full bg-blush-100/80 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 size-44 rounded-full bg-cream-200/70 blur-2xl"
            />

            <div className="relative mx-auto max-w-xl">
              <span
                aria-hidden
                className="clay-sm mx-auto mb-6 flex size-16 items-center justify-center rounded-full text-blush-600"
              >
                <Cake className="size-7" strokeWidth={1.5} />
              </span>

              <p className="eyebrow mb-3">Custom Cakes</p>
              <h2
                id="custom-cakes-heading"
                className="font-display text-3xl leading-tight text-berry-800 sm:text-4xl"
              >
                Made for <em className="text-blush-600">Your Moment</em>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-cocoa-700/90">
                Planning a birthday, anniversary, celebration or special
                occasion? Talk to Sweet Retreat about your cake requirements.
              </p>

              <div className="mt-8 flex justify-center">
                <WhatsAppButton
                  kind="custom-cake"
                  className="px-7 py-3.5 text-base"
                >
                  Discuss Your Cake on WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
