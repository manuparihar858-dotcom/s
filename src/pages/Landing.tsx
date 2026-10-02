import { Navbar } from "@/components/bakery/Navbar";
import { Hero } from "@/components/bakery/Hero";
import { TrustIntro } from "@/components/bakery/TrustIntro";
import { FeaturedProducts } from "@/components/bakery/FeaturedProducts";
import { Menu } from "@/components/bakery/Menu";
import { CustomCakeSection } from "@/components/bakery/CustomCakeSection";
import { Gallery } from "@/components/bakery/Gallery";
import { About } from "@/components/bakery/About";
import { Location } from "@/components/bakery/Location";
import { FinalCTA } from "@/components/bakery/FinalCTA";
import { Footer } from "@/components/bakery/Footer";

/**
 * Sweet Retreat — boutique bakery landing page.
 * Flow: discover → browse menu → order on WhatsApp (bakery confirms manually).
 */
export default function Landing() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustIntro />
        <FeaturedProducts />
        <Menu />
        <CustomCakeSection />
        <Gallery />
        <About />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
