import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { menuCategories } from "@/data/bakery";
import { productOrderUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/bakery/SectionHeading";
import { Reveal } from "@/components/bakery/Reveal";

/**
 * "Explore Our Menu" — elegant numbered tabs (one per category) with a large
 * clay panel listing that category's products. Every product gets its own
 * WhatsApp order link, generated from its exact name.
 */
export function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const reduceMotion = useReducedMotion();
  const active =
    menuCategories.find((category) => category.id === activeId) ??
    menuCategories[0];
  const activeIndex = menuCategories.findIndex(
    (category) => category.id === activeId,
  );

  const go = (offset: number) => {
    const next =
      (activeIndex + offset + menuCategories.length) % menuCategories.length;
    setActiveId(menuCategories[next].id);
  };

  return (
    <section
      id="menu"
      className="scroll-mt-24 pb-16 sm:pb-24"
      aria-labelledby="menu-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Menu"
          title={
            <>
              Explore <em className="text-blush-600">Our Menu</em>
            </>
          }
          lead="From celebration cakes to homemade brownies and everyday treats, explore the Sweet Retreat collection."
        />

        {/* Category tabs */}
        <Reveal className="mt-10">
          <p className="mb-4 text-center text-sm text-cocoa-700/75 sm:hidden">
            Pick a category to browse
          </p>
          <div
            role="tablist"
            aria-label="Menu categories"
            className="clay-inset flex gap-2 overflow-x-auto rounded-full p-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {menuCategories.map((category) => {
              const isActive = category.id === activeId;
              return (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(category.id)}
                  className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? "clay-btn-primary"
                      : "text-cocoa-800 hover:bg-white/60"
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active category panel */}
        <Reveal className="mt-8" key={active.id}>
          <div className="clay relative overflow-hidden rounded-[2.5rem] px-6 py-10 sm:px-10 sm:py-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-12 -top-12 size-48 rounded-full bg-blush-100/70 blur-2xl"
            />
            <motion.div
              key={active.id}
              initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="eyebrow mb-2 text-blush-600">
                    {active.number} — {active.name}
                  </p>
                  <h3
                    id="menu-heading"
                    className="font-display text-3xl font-semibold text-berry-800 sm:text-4xl"
                  >
                    {active.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-cocoa-700/85 sm:text-base">
                    {active.blurb}
                  </p>
                </div>

                {/* Desktop arrows */}
                <div className="hidden gap-2 sm:flex">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label={`Previous category: ${
                      menuCategories[
                        (activeIndex - 1 + menuCategories.length) %
                          menuCategories.length
                      ].name
                    }`}
                    className="clay-sm flex size-11 items-center justify-center rounded-full text-berry-700 transition-transform hover:scale-105"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label={`Next category: ${
                      menuCategories[(activeIndex + 1) % menuCategories.length]
                        .name
                    }`}
                    className="clay-sm flex size-11 items-center justify-center rounded-full text-berry-700 transition-transform hover:scale-105"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>

              {/* Product list */}
              <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {active.products.map((productName) => (
                  <li key={productName}>
                    <a
                      href={`#order-${active.id}`}
                      onClick={(event) => {
                        event.preventDefault();
                        window.open(
                          productOrderUrl(productName),
                          "_blank",
                          "noopener,noreferrer",
                        );
                      }}
                      className="clay-sm group flex items-center justify-between gap-3 rounded-2xl px-4 py-3.5 transition-transform duration-300 hover:-translate-y-0.5"
                      aria-label={`Order ${productName} on WhatsApp`}
                    >
                      <span className="text-sm font-medium leading-snug text-cocoa-800">
                        {productName}
                      </span>
                      <Sparkles
                        className="size-4 shrink-0 text-blush-400 transition-colors group-hover:text-blush-600"
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
