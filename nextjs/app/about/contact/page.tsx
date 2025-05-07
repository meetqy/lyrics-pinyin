import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Globe, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container max-w-4xl py-12">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-muted-foreground text-lg">
          Have questions? We'd love to hear from you.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Contact Information */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Email Card */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                href="mailto:meetqy@icloud.com"
                className="text-primary hover:underline"
              >
                meetqy@icloud.com
              </Link>
            </CardContent>
          </Card>

          {/* Website Card */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Website
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                href="https://lyrics-pinyin.com"
                className="text-primary hover:underline"
                target="_blank"
              >
                lyrics-pinyin.com
              </Link>
            </CardContent>
          </Card>

          {/* Twitter Card */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Twitter className="w-5 h-5" />
                Twitter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                href="https://twitter.com/meetqy"
                className="text-primary hover:underline"
                target="_blank"
              >
                @meetqy
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Reference */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Help</CardTitle>
            <CardDescription>
              Before reaching out, you might find answers in our documentation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Check our comprehensive FAQ and user guide for quick answers to
              common questions.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <Link href="/#faq">View FAQ</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/about/guide">User Guide</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Response Time Notice */}
        <div className="text-center text-sm text-muted-foreground mt-8">
          <p>
            We typically respond to emails within 24-48 hours during business
            days.
          </p>
          <p>For urgent matters, please check our FAQ section first.</p>
        </div>
      </div>
    </div>
  );
}
