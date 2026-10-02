import { MapPin, Navigation, Phone } from "lucide-react";
import { bakery } from "@/data/bakery";
import { WhatsAppButton } from "@/components/bakery/WhatsAppButton";
import { Reveal } from "@/components/bakery/Reveal";

/** Location & contact: address, phone, and Call / WhatsApp / Directions CTAs. */
export function Location() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 pb-16 sm:pb-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="clay relative overflow-hidden rounded-[2.5rem] px-6 py-12 sm:px-12 sm:py-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-14 -bottom-14 size-52 rounded-full bg-blush-100/70 blur-3xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="eyebrow mb-3">Find Us</p>
                 <h2
                   id="contact-heading"
                   className="font-display text-3xl leading-tight text-berry-800 sm:text-4xl"
                 >
                   Connect with{" "}
                   <em className="text-blush-600">Sweet Retreat</em>
                 </h2>


                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="clay-sm mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full text-berry-700">
                      <MapPin className="size-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-berry-800">
                        {bakery.name}
                      </p>
                      {bakery.addressLines.map((line) => (
                        <p key={line} className="text-sm text-cocoa-700/85">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="clay-sm mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full text-berry-700">
                      <Phone className="size-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-berry-800">
                        Phone
                      </p>
                      <a
                        href={`tel:${bakery.phoneDial}`}
                        className="text-sm text-cocoa-700/85 underline decoration-blush-300 decoration-2 underline-offset-4 transition-colors hover:text-berry-600"
                      >
                        {bakery.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={`tel:${bakery.phoneDial}`}
                  className="clay-btn-secondary inline-flex flex-1 items-center justify-center gap-2 px-6 py-3.5 text-base font-medium transition-all duration-300 hover:brightness-[0.99]"
                >
                  <Phone className="size-5" aria-hidden />
                  Call
                </a>
                <WhatsAppButton className="flex-1 px-6 py-3.5 text-base" />
                <a
                  href={bakery.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-btn-secondary inline-flex flex-1 items-center justify-center gap-2 px-6 py-3.5 text-base font-medium transition-all duration-300 hover:brightness-[0.99]"
                >
                  <Navigation className="size-5" aria-hidden />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
