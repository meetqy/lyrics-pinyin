import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight, EyeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getStrapiAssetUrl } from "@/lib/utils";

type FeaturedProps = {
  lyrics: {
    cover: { url: string };
    name: string;
    name_py: string;
    author: string;
    author_py: string;
    documentId: string;
  }[];
};

export const Featured = ({ lyrics }: FeaturedProps) => {
  return (
    <section className="container max-w-screen-xl py-24">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Popular Chinese Songs</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Start with these trending songs - each with synchronized pinyin lyrics</p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lyrics.map((_, index) => (
            <Card key={index} className="group relative overflow-hidden py-0 hover:shadow-lg transition-all duration-300">
              <Link href={`/lyrics/${_.documentId}`} className="absolute inset-0 z-10" aria-label={`View ${_.name}(${_.name_py}) lyrics pinyin`} />
              <div className="relative">
                <div className="aspect-square relative">
                  <Image src={getStrapiAssetUrl(_.cover.url, "small")} alt="Song cover" width={500} height={500} className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-80 transition-opacity" />
                </div>

                {/* Song Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-medium text-lg leading-none text-black">{_.name}</h3>
                      <p className="text-sm text-black/90">{_.name_py}</p>
                    </div>
                    <div className="flex items-center gap-1 text-black">
                      <EyeIcon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">109</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex justify-center gap-12 pt-8">
          {[
            { number: "500+", label: "Songs" },
            { number: "10K+", label: "Users" },
            { number: "4.9/5", label: "Rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-bold">{stat.number}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center pt-8">
          <Button asChild size="lg">
            <Link href="/lyrics" className="gap-2">
              View All Songs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
