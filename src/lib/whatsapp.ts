import { bakery, whatsappMessages } from "@/data/bakery";

/**
 * Reusable WhatsApp click-to-chat helpers.
 *
 * Every "Order on WhatsApp" button in the app goes through this module so the
 * phone number, URL format and message format are defined exactly once.
 * wa.me links work on both desktop (web.whatsapp.com) and mobile (app deep link).
 */

export function generalOrderUrl(): string {
  return `https://wa.me/${bakery.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessages.general,
  )}`;
}

export function customCakeUrl(): string {
  return `https://wa.me/${bakery.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessages.customCake,
  )}`;
}

/** Pre-filled order enquiry for a single product. */
export function productOrderUrl(productName: string): string {
  return `https://wa.me/${bakery.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessages.product(productName),
  )}`;
}

export const whatsappUrl = {
  general: generalOrderUrl,
  customCake: customCakeUrl,
  product: productOrderUrl,
} as const;
