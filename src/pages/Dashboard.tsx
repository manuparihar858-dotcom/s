import { ArrowLeft } from "lucide-react";
import { WhatsAppButton } from "@/components/bakery/WhatsAppButton";
import { bakery } from "@/data/bakery";

/**
 * V1 of the Sweet Retreat site is a single public landing page with WhatsApp
 * ordering — no accounts or dashboards yet. This simple page exists so the
 * template's /dashboard route stays functional during the demo.
 */
export default function Dashboard() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="clay w-full max-w-lg rounded-[2.5rem] px-8 py-12 text-center">
        <p className="eyebrow mb-3">Sweet Retreat Web</p>
        <h1 className="font-display text-3xl text-berry-800">
          You've found the demo corner
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-cocoa-700/85">
          The full bakery experience — browsing the menu and ordering on
          WhatsApp — lives on the home page. There's nothing to sign up for
          here in version one.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/"
            className="clay-btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to Site
          </a>
          <WhatsAppButton className="px-6 py-3 text-base" />
        </div>
        <p className="mt-6 text-xs text-cocoa-700/60">
          {bakery.name} · {bakery.addressLines.join(", ")}
        </p>
      </div>
    </main>
  );
}
