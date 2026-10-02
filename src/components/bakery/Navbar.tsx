import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { bakery } from "@/data/bakery";
import { WhatsAppButton } from "@/components/bakery/WhatsAppButton";
import { generalOrderUrl } from "@/lib/whatsapp";
import logo from "@/assets/Logo.jpg";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Custom Cakes", href: "#custom-cakes" },
  { label: "Contact", href: "#contact" },
];

/** Sticky navigation. Translucent cream bar that firms up on scroll. */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-clay-card/85 shadow-[0_10px_30px_-16px_rgba(122,74,62,0.3)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8 sm:h-[4.5rem]">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt={bakery.name}
            className="size-9 object-contain"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-wide text-berry-800">
              {bakery.name}
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-cocoa-700/60">
              {bakery.tagline}
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-cocoa-800 transition-colors hover:text-berry-600"
            >
              {link.label}
            </a>
          ))}
          <WhatsAppButton className="px-5 py-2.5 text-sm" />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="clay-sm flex size-11 items-center justify-center rounded-full text-berry-700 lg:hidden"
        >
          <Menu className="size-5" />
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-berry-800/25 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="clay absolute inset-x-3 top-3 overflow-hidden rounded-3xl p-6"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-semibold text-berry-800">
                {bakery.name}
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="clay-inset flex size-10 items-center justify-center rounded-full text-berry-700"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="mt-6 flex flex-col divide-y divide-blush-100">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-4 text-lg font-display font-medium text-berry-800"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href={generalOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="clay-btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 py-3.5 text-base font-medium"
            >
              <MessageCircle className="size-5" aria-hidden />
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
