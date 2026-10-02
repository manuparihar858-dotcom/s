import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { bakery } from "@/data/bakery";
import { generalOrderUrl } from "@/lib/whatsapp";

const quickLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Custom Cakes", href: "#custom-cakes" },
  { label: "Contact", href: "#contact" },
];

/** Minimal, elegant footer. */
export function Footer() {
  return (
    <footer className="pb-8">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="clay rounded-[2.5rem] px-6 py-10 sm:px-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-blush-300 to-blush-500 text-sm font-semibold text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.5),0_6px_14px_-6px_rgba(180,81,111,0.6)]"
                >
                  SR
                </span>
                <span className="font-display text-xl font-semibold text-berry-800">
                  {bakery.name}
                </span>
              </div>
              <p className="script-text mt-4 text-xl">{bakery.tagline}</p>
              <p className="mt-2 text-sm text-cocoa-700/75">
                {bakery.addressLines.join(", ")}
              </p>
              <a
                href={`tel:${bakery.phoneDial}`}
                className="mt-1 inline-flex items-center gap-1.5 text-sm text-cocoa-700/75 transition-colors hover:text-berry-600"
              >
                <Phone className="size-3.5" aria-hidden />
                83058 13888
              </a>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="eyebrow mb-4 text-blush-600">Quick Links</h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-cocoa-700/85 transition-colors hover:text-berry-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Order */}
            <div>
              <h3 className="eyebrow mb-4 text-blush-600">Order</h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={generalOrderUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cocoa-700/85 transition-colors hover:text-berry-600"
                  >
                    <MessageCircle className="size-3.5" aria-hidden />
                    Order on WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={bakery.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cocoa-700/85 transition-colors hover:text-berry-600"
                  >
                    <Navigation className="size-3.5" aria-hidden />
                    Google Maps / Directions
                  </a>
                </li>
              </ul>
            </div>

            {/* Friendly note */}
            <div>
              <h3 className="eyebrow mb-4 text-blush-600">Good to Know</h3>
              <p className="text-sm leading-relaxed text-cocoa-700/75">
                Every order gets a personal reply on WhatsApp, so you can ask
                about availability, sizes and pricing before you order.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-2 border-t border-blush-100 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-xs text-cocoa-700/60">
              © {new Date().getFullYear()} {bakery.name}. All rights reserved.
            </p>
            <p className="inline-flex items-center gap-1.5 text-xs text-cocoa-700/60">
              <MapPin className="size-3" aria-hidden />
              {bakery.addressLines.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
