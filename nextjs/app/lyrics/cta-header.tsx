"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export const CtaHeader = ({ searchParams }: { searchParams: any }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const params = useSearchParams();

  const handleSearch = (term: string) => {
    const newParams = new URLSearchParams(params.toString());
    if (term) {
      newParams.set("q", term);
    } else {
      newParams.delete("q");
    }
    newParams.delete("page"); // Reset to first page on new search
    startTransition(() => {
      router.push(`?${newParams.toString()}`);
    });
  };

  const handleDifficultyChange = (value: string) => {
    const newParams = new URLSearchParams(params.toString());
    if (value === "all") {
      newParams.delete("difficulty");
    } else {
      newParams.set("difficulty", value);
    }
    newParams.delete("page"); // Reset to first page on filter change
    startTransition(() => {
      router.push(`?${newParams.toString()}`);
    });
  };

  return (
    <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-10">
        {/* Page Header */}
        <div className="max-w-2xl mx-auto space-y-4 text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Chinese Song Lyrics
          </h1>
          <p className="text-lg text-muted-foreground">
            Find lyrics with pinyin for your favorite Chinese songs. Learn
            pronunciation through music.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by song title, artist or lyrics..."
                className="pl-10 h-10"
                defaultValue={searchParams.q || ""}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <Select
              defaultValue={searchParams.difficulty || "all"}
              onValueChange={handleDifficultyChange}
            >
              <SelectTrigger className="w-full sm:w-[180px] h-10">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
