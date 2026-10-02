import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { bakery } from "@/data/bakery";
import { WhatsAppButton } from "@/components/bakery/WhatsAppButton";
import { ProductImagePlaceholder } from "@/components/bakery/ProductImagePlaceholder";

/**
 * Hero: editorial split layout — serif headline on the left, large clay-framed
 * image composition on the right. On mobile the image sits beneath the copy.
 * The image is a branded placeholder; swap in the bakery's hero photo later.
 */
export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const MotionSection = motion.section;

  return (
    <section className="relative overflow-hidden pb-14 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40">
      {/* soft decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 size-72 rounded-full bg-blush-100/70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 size-80 rounded-full bg-cream-200/60 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <MotionSection
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "show"}
        >
          <motion.p
            variants={item}
            className="eyebrow mb-6 inline-flex items-center gap-3"
          >
            <span className="h-px w-8 bg-blush-400" aria-hidden />
            Boutique Bakery • Indore
          </motion.p>

           <motion.h1
             variants={item}
             className="font-display text-[2.6rem] font-medium leading-[1.05] text-berry-800 sm:text-6xl lg:text-[4.2rem]"
           >
             Exquisite treats,
             <br />
             <em className="text-blush-600">crafted with love.</em>
           </motion.h1>


           <motion.p
             variants={item}
             className="mt-6 max-w-md text-base leading-relaxed text-cocoa-700/90 sm:text-lg"
           >
             Artisan cakes, handmade chocolates, and gourmet treats meticulously crafted for your most cherished celebrations.
           </motion.p>


          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <WhatsAppButton className="px-7 py-3.5 text-base" />
            <a
              href="#menu"
              className="clay-btn-secondary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium transition-all duration-300 hover:brightness-[0.99]"
            >
              Explore Menu
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-7 text-sm text-cocoa-700/70"
          >
            {bakery.tagline} — every order is confirmed personally on WhatsApp.
          </motion.p>
        </MotionSection>

        {/* Hero visual — placeholder until bakery photography is available */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            aria-hidden
            className="hero-decor-blob absolute -inset-5 -z-10 sm:-inset-8"
          />
          <div className="clay overflow-hidden rounded-[2.5rem]">
            <div className="aspect-[4/5]">
              <ProductImagePlaceholder
                iconClassName="size-14"
                label="Sweet Retreat signature bakes"
              />
            </div>
          </div>

          {/* floating clay chip */}
          <div className="clay-sm float-soft absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-clay-card px-5 py-3 sm:left-auto sm:right-6 sm:translate-x-0">
            <span className="size-2.5 rounded-full bg-blush-500" aria-hidden />
            <span className="text-xs font-medium tracking-wide text-berry-700">
              Made fresh in Mahalaxmi Nagar
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
