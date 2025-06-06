import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { getStrapiAssetUrl } from "@/lib/utils";
import { query } from "@/apollo/client";
import { gql } from "@apollo/client";
import { Metadata } from "next";
import { PinyinBox } from "./pinyin-box";
import { Controls } from "./controls";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const lyric = await fetchLyric(id);

  return {
    title: `${lyric.name} - ${lyric.author}`,
    description: `Learn "${lyric.name}" (${lyric.name_py}) by ${lyric.author} with pinyin lyrics. Perfect for Chinese language learners.`,
  };
}

async function fetchLyric(id: string) {
  const { data } = await query({
    query: gql`
      query Lyric($documentId: ID!) {
        lyric(documentId: $documentId) {
          author
          author_py
          cover {
            url
          }
          downloads
          lyrics
          lyrics_py
          name
          name_py
          views
        }
      }
    `,
    variables: {
      documentId: id,
    },
  });

  return data.lyric;
}

export default async function LyricsDetailPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: { [key: string]: string | string[] | undefined } }) {
  const { items = "top", align = "center" } = await searchParams;
  const { id } = await params;
  const lyric = await fetchLyric(id);
  const lyrics = lyric.lyrics.split("\n");
  const lyricsPinyin = lyric.lyrics_py.split("\n");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background/80 to-background">
      {/* Hero Section */}
      <div className="relative">
        {/* Content */}
        <div className="container max-w-screen-lg relative z-10 pt-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Album Cover */}
            <div className="w-[200px] md:w-[280px] shrink-0 mx-auto md:mx-0">
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-xl ring-1 ring-white/10">
                <Image src={getStrapiAssetUrl(lyric.cover.url, "small")} alt={lyric.name + "cover"} fill className="object-cover" priority />
              </div>
            </div>

            {/* Song Info */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <div className="space-y-6">
                {/* Title & Artist */}
                <div className="space-y-2">
                  <h1 className="text-3xl md:text-5xl font-bold">{lyric.name}</h1>
                  <p className="text-lg md:text-xl text-primary/90">{lyric.name_py}</p>
                  <div className="space-y-1 pt-2">
                    <p className="text-lg">{lyric.author}</p>
                    <p className="text-sm text-muted-foreground">{lyric.author_py}</p>
                  </div>
                </div>

                {/* Difficulty Rating */}
                <div className="container max-w-screen-lg relative z-10 py-12">
                  <div className="flex items-center h-16 gap-4">
                    <Button size="lg" variant="outline" className="w-full">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Controls align={align as "left" | "center" | "right"} items={items as "top" | "bottom"} />

      {/* Lyrics Section */}
      <PinyinBox lyrics={lyrics} lyricsPinyin={lyricsPinyin} items={items as "top" | "bottom"} align={align as "left" | "center" | "right"} />
    </div>
  );
}
