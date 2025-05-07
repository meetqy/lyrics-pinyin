import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const CtaSearch = () => {
  return (
    <>
      <section className="container py-24">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Find Your Favorite Songs</h2>
            <p className="text-muted-foreground">
              Search through our collection of Chinese songs with Lyrics Pinyin
            </p>
          </div>
          <div className="relative">
            <Input
              placeholder="Search for songs, artists, or lyrics..."
              className="pl-4 pr-12"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
