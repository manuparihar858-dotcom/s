import { Reveal } from "@/components/bakery/Reveal";

const points = [
  {
    title: "Freshly Made",
    text: "Bakes prepared in small batches with care.",
  },
  {
    title: "Thoughtfully Crafted",
    text: "Every treat is finished by hand, with attention to detail.",
  },
  {
    title: "Made for Every Occasion",
    text: "From everyday cravings to celebrations big and small.",
  },
];

/** Short trust/intro band directly under the hero. */
export function TrustIntro() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="clay relative overflow-hidden rounded-[2.5rem] px-6 py-12 sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 size-44 rounded-full bg-blush-100/80 blur-2xl"
          />
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl leading-tight text-berry-800 sm:text-4xl">
              Made with care.{" "}
              <em className="text-blush-600">Shared with love.</em>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cocoa-700/90">
              Sweet Retreat is a small boutique bakery in Indore, baking fresh
              cakes, chocolates and teatime treats for neighbours, friends and
              every celebration in between.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {points.map((point) => (
              <div
                key={point.title}
                className="clay-sm rounded-3xl px-6 py-7 text-center"
              >
                <h3 className="font-display text-lg font-semibold text-berry-700">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cocoa-700/80">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
