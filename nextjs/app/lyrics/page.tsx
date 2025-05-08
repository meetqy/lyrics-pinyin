import { Button } from "@/components/ui/button";
import { Music2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CtaHeader } from "./cta-header";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { query } from "@/apollo/client";
import { gql } from "@apollo/client";
import { getStrapiAssetUrl } from "@/lib/utils";

// Types
type SearchParams = {
  page?: string;
  difficulty?: string;
  q?: string;
};

// Constants
const PAGE_SIZE = 12;

async function fetchList(page: number) {
  const { data } = await query({
    query: gql`
      query Lyrics($sort: [String], $pagination: PaginationArg) {
        lyrics(sort: $sort, pagination: $pagination) {
          cover {
            url
          }
          name
          name_py
          author
          author_py
          documentId
        }
        lyrics_connection {
          pageInfo {
            page
            pageCount
            pageSize
            total
          }
        }
      }
    `,
    variables: {
      pagination: { pageSize: PAGE_SIZE, page },
      sort: ["createdAt:desc"],
    },
  });

  return data;
}

// Pagination Component
const PaginationControl = ({
  total,
  page,
  searchParams,
}: {
  total: number;
  page: number;
  searchParams: SearchParams;
}) => {
  const totalPages = Math.ceil(total / PAGE_SIZE);

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams();
    params.set("page", pageNumber.toString());
    if (searchParams.difficulty)
      params.set("difficulty", searchParams.difficulty);
    if (searchParams.q) params.set("q", searchParams.q);
    return `?${params.toString()}`;
  };

  return (
    <Pagination className="py-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageURL(page - 1)}
            aria-disabled={page <= 1}
            className={page <= 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {/* Current Page Info */}
        <PaginationItem>
          <span className="text-sm text-muted-foreground px-4">
            Page {page} of {totalPages}
          </span>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href={createPageURL(page + 1)}
            aria-disabled={page >= totalPages}
            className={
              page >= totalPages ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

const SongRow = ({ song }: { song: any }) => (
  <Link href={`/lyrics/${song.documentId}`}>
    <div className="group flex items-center gap-4 p-4 hover:bg-muted/50 rounded-lg transition-colors">
      {/* Cover Image */}
      <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
        <Image
          fill
          src={getStrapiAssetUrl(song.cover.url, "small")}
          alt={song.name + " cover"}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Song Info - using flex-1 to take remaining space */}
      <div className="flex-1 min-w-0">
        {/* Title */}
        <div className="space-y-0.5">
          <h3 className="font-medium line-clamp-1">{song.name}</h3>
          <p className="text-xs text-muted-foreground tracking-wide">
            {song.name_py}
          </p>
        </div>
      </div>

      {/* Artist - fixed width column */}
      <div className="w-40 hidden sm:block">
        <p className="text-sm line-clamp-1">{song.author}</p>
        <p className="text-xs text-muted-foreground">{song.author_py}</p>
      </div>

      {/* Difficulty Badge - fixed width column */}
      <div className="w-24 text-center hidden md:block">
        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
          Easy
        </span>
      </div>

      {/* Action Button - fixed width column */}
      <div className="w-32 flex-shrink-0">
        <Button variant="secondary" size="sm" className="w-full">
          <Music2 className="h-3 w-3 mr-1.5" />
          View Lyrics
        </Button>
      </div>
    </div>
  </Link>
);

export default async function LyricsListPage({
  searchParams: _searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const searchParams = await _searchParams;
  const currentPage = Number(searchParams.page || 1);
  const data = await fetchList(currentPage);
  const { pageInfo } = data.lyrics_connection;
  const { lyrics } = data;

  return (
    <div className="container py-8">
      <CtaHeader searchParams={searchParams} />

      {/* Table Header */}
      <div className="flex items-center gap-4 p-4 border-b text-sm text-muted-foreground">
        <div className="w-16" /> {/* Cover space */}
        <div className="flex-1">Song</div>
        <div className="w-40 hidden sm:block">Artist</div>
        <div className="w-24 text-center hidden md:block">Level</div>
        <div className="w-32" /> {/* Action space */}
      </div>

      {/* Songs List */}
      <div className="divide-y">
        {lyrics.map((song: any) => (
          <SongRow key={song.documentId} song={song} />
        ))}
      </div>

      {/* Empty State */}
      {lyrics.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No songs found matching your criteria
          </p>
        </div>
      )}

      {/* Pagination */}
      {pageInfo.pageCount > 1 && (
        <PaginationControl
          total={pageInfo.total}
          page={currentPage}
          searchParams={searchParams}
        />
      )}
    </div>
  );
}
