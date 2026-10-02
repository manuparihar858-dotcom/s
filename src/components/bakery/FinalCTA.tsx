import { ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/components/bakery/WhatsAppButton";
import { Reveal } from "@/components/bakery/Reveal";

/** Final call-to-action band before the footer. */
export function FinalCTA() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="clay relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 top-0 size-56 rounded-full bg-blush-100/80 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-14 bottom-0 size-52 rounded-full bg-cream-200/70 blur-3xl"
            />

            <div className="relative mx-auto max-w-xl">
              <h2 className="font-display text-4xl leading-tight text-berry-800 sm:text-5xl">
                Something Sweet{" "}
                <em className="text-blush-600">Is Waiting.</em>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-cocoa-700/90">
                Explore the menu and place your order directly with Sweet
                Retreat on WhatsApp.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <WhatsAppButton className="w-full px-8 py-4 text-base sm:w-auto" />
                <a
                  href="#menu"
                  className="clay-btn-secondary inline-flex w-full items-center justify-center gap-2 px-8 py-4 text-base font-medium transition-all duration-300 hover:brightness-[0.99] sm:w-auto"
                >
                  View Menu
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
