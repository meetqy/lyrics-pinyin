import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ApolloWrapper } from "@/apollo/apollo-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Chinese Songs with Lyrics Pinyin",
    template: "%s | Lyrics Pinyin",
  },
  description:
    "Learn Chinese through music with synchronized pinyin lyrics. A free tool for Chinese language learners worldwide.",
  authors: [
    {
      name: "meetqy",
      url: "https://github.com/meetqy",
    },
  ],
  creator: "meetqy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lyrics-pinyin.com",
    title: "Lyrics Pinyin - Learn Chinese Through Music",
    description:
      "Learn Chinese through music with synchronized pinyin lyrics. A free tool for Chinese language learners worldwide.",
    siteName: "Lyrics Pinyin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyrics Pinyin - Learn Chinese Through Music",
    description: "Learn Chinese through music with synchronized pinyin lyrics",
    creator: "@meetqy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://lyrics-pinyin.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <head>
          <script
            async
            data-domain="lyrics-pinyin.com"
            src="https://plausible.moyuo.com/js/script.js"
          />
        </head>
        <ApolloWrapper>
          <Header />
          {children}
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
}
