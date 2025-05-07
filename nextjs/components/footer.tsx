import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Lyrics Pinyin</h3>
            <p className="text-sm text-muted-foreground">
              Learn Chinese through music. Free tools for synchronized pinyin
              lyrics.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://x.com/meetqy"
                  className="gap-2"
                  target="_blank"
                >
                  <Twitter className="w-4 h-4" />
                  Follow on Twitter
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://github.com/meetqy/lyrics-pinyin"
                  className="gap-2"
                  target="_blank"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-medium">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/lyrics"
                  className="text-muted-foreground hover:text-primary"
                >
                  Popular Songs
                </Link>
              </li>
              <li>
                <Link
                  href="/latest"
                  className="text-muted-foreground hover:text-primary"
                >
                  Latest Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="space-y-4">
            <h4 className="font-medium">Help & Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#faq"
                  className="text-muted-foreground hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/about/guide"
                  className="text-muted-foreground hover:text-primary"
                >
                  User Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/about/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about/privacy"
                  className="text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/about/terms"
                  className="text-muted-foreground hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 mt-8 border-t text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Lyrics Pinyin. All rights reserved.
          </p>
          <p>Made with ❤️ for Chinese learners worldwide</p>
        </div>
      </div>
    </footer>
  );
};
