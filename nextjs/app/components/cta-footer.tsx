import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CtaFooter = () => {
  return (
    <section className="container py-24">
      <div className="relative px-6 py-12 md:py-16 md:px-12 rounded-3xl bg-muted/50 text-center space-y-6">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/10 rounded-3xl" />

        <div className="relative max-w-2xl mx-auto space-y-8">
          {/* Main Content */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Experience Chinese Music Like Never Before
            </h2>
            <p className="text-muted-foreground text-lg">
              Start your journey with Lyrics Pinyin today - discover, learn, and
              enjoy Chinese songs with our free tools
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="gap-2">
              Start Learning Now
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Browse Popular Songs
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-2 text-sm text-muted-foreground">
            <p>No registration required • 100% Free • Updated daily</p>
          </div>
        </div>
      </div>
    </section>
  );
};
