import { motion } from "framer-motion";
import { ArrowLeft, Cookie } from "lucide-react";

/** Friendly, on-brand 404 page. */
export default function NotFound() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen flex-col items-center justify-center bg-background px-5 text-center"
    >
      <span
        aria-hidden
        className="clay-sm mb-6 flex size-16 items-center justify-center rounded-full text-blush-600"
      >
        <Cookie className="size-7" strokeWidth={1.5} />
      </span>

      <p className="eyebrow mb-3">Sweet Retreat Web</p>

      <h1 className="font-display text-4xl text-berry-800 sm:text-5xl">
        This page seems to have{" "}
        <em className="text-blush-600">been eaten.</em>
      </h1>

      <p className="mt-4 max-w-sm text-base leading-relaxed text-cocoa-700/85">
        We couldn't find the page you were looking for — but there's plenty
        more to browse back home.
      </p>

      <a
        href="/"
        className="clay-btn-primary mt-8 inline-flex items-center gap-2 px-7 py-3.5 text-base font-medium"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to Sweet Retreat
      </a>
    </motion.main>
  );
}
