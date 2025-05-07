import { Hero } from "./components/hero";
import { Featured } from "./components/featured";
import { Faq } from "./components/faq";
import { CtaFooter } from "./components/cta-footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Songs */}
      <Featured />

      {/* FAQ Section */}
      <Faq />

      {/* Footer CTA */}
      <CtaFooter />
    </main>
  );
}
