import { Button } from "@/components/ui/button";
import { StarIcon, Music2, Download, Printer, Eye } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container max-w-[1000px] mx-auto text-center space-y-12">
        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
            Chinese Songs with{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
              Lyrics Pinyin
            </span>
          </h1>
          <p className="text-muted-foreground text-xl mx-auto max-w-2xl">
            Access Chinese songs with synchronized Lyrics Pinyin. View online,
            print or download - your perfect companion for learning Mandarin
            through music.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { icon: Eye, text: "Synchronized View", desc: "Chinese & Pinyin" },
            {
              icon: Printer,
              text: "Print Lyrics",
              desc: "Dual language format",
            },
            { icon: Download, text: "PDF Download", desc: "Save for offline" },
            {
              icon: Music2,
              text: "Full Pinyin",
              desc: "Every character covered",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-4 rounded-lg bg-background/60 hover:bg-background/80 transition-colors"
            >
              <feature.icon className="w-6 h-6 text-primary mb-2" />
              <span className="font-medium">{feature.text}</span>
              <span className="text-sm text-muted-foreground">
                {feature.desc}
              </span>
            </div>
          ))}
        </div>

        {/* CTA & Stats Section */}
        <div className="space-y-8">
          {/* CTA Buttons */}
          <div className="space-y-4">
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="min-w-[200px]" asChild>
                <Link href={"/lyrics"}>Start Learning</Link>
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px]">
                Browse Songs
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              100% Free • No Registration Required • Instant Access
            </p>
          </div>

          {/* Stats & Social Proof */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
              </div>
              <span>
                <span className="font-medium">4.9/5</span> from{" "}
                <span className="font-medium">1,000+ users</span>
              </span>
            </div>
            <div className="flex gap-8">
              <p>
                <span className="font-bold text-xl">500+</span>
                <span className="block text-muted-foreground">Songs</span>
              </p>
              <p>
                <span className="font-bold text-xl">10,000+</span>
                <span className="block text-muted-foreground">Downloads</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
