import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Music, Book, Download, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-12">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight">
          About Lyrics Pinyin
        </h1>
        <p className="text-muted-foreground text-lg">
          Making Chinese music accessible to language learners worldwide
        </p>
      </div>

      {/* Mission Section */}
      <section className="space-y-6 mb-16">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          Lyrics Pinyin was created to help Chinese language learners improve
          their pronunciation and comprehension through music. We believe that
          learning through songs makes the process more enjoyable and effective.
        </p>
      </section>

      {/* Features Section */}
      <section className="space-y-8 mb-16">
        <h2 className="text-2xl font-semibold">What We Offer</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Music className="w-5 h-5 text-primary" />
              <h3 className="font-medium">Synchronized Lyrics</h3>
            </div>
            <p className="text-muted-foreground">
              Chinese characters perfectly aligned with pinyin pronunciation
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Book className="w-5 h-5 text-primary" />
              <h3 className="font-medium">Learning Tools</h3>
            </div>
            <p className="text-muted-foreground">
              Easy-to-follow format with clear pronunciation guides
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5 text-primary" />
              <h3 className="font-medium">Free Downloads</h3>
            </div>
            <p className="text-muted-foreground">
              Download lyrics in PDF format for offline learning
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              <h3 className="font-medium">User Friendly</h3>
            </div>
            <p className="text-muted-foreground">
              Simple and intuitive interface for all learning levels
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="space-y-8 mb-16">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <div className="space-y-4">
          <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
            <li>Browse our collection of Chinese songs</li>
            <li>Select a song you want to learn</li>
            <li>View the synchronized pinyin lyrics</li>
            <li>Download or print for offline practice</li>
          </ol>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center space-y-6">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p className="text-muted-foreground">
          Have questions or suggestions? We'd love to hear from you.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/about/contact">Contact Us</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/#faq">View FAQ</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
