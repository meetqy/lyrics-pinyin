import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ApolloWrapper } from "@/apollo/apollo-wrapper";
import { AdsBottomFixed } from "./components/ads-bottom-fixed";

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
  description: "Learn Chinese through music with synchronized pinyin lyrics. A free tool for Chinese language learners worldwide.",
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
    description: "Learn Chinese through music with synchronized pinyin lyrics. A free tool for Chinese language learners worldwide.",
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
      <head>
        <script async data-domain="lyrics-pinyin.com" src="https://plausible.moyuo.com/js/script.js" />
        <script async data-cfasync="false" src="//immoderatebreathtaking.com/a8159570bd9cc2174147fecbdeaa2ccf/invoke.js"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ApolloWrapper>
          <Header />
          <AdsBottomFixed />
          {children}
          <div id="container-a8159570bd9cc2174147fecbdeaa2ccf" className="fixed w-36 left-0 top-24 z-50"></div>
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
}
