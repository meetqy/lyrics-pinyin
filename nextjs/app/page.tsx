import { Hero } from "./components/hero";
import { Featured } from "./components/featured";
import { Faq } from "./components/faq";
import { CtaFooter } from "./components/cta-footer";
import { query } from "@/apollo/client";
import { gql } from "@apollo/client";

export const fetchCache = "force-no-store";
export const revalidate = 0;

async function fetchFeatured() {
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
      }
    `,
    variables: {
      pagination: { pageSize: 8 },
      sort: ["createdAt:desc"],
    },
  });

  return data.lyrics;
}

export default async function Home() {
  const featured = await fetchFeatured();

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Songs */}
      <Featured lyrics={featured} />

      {/* FAQ Section */}
      <Faq />

      {/* Footer CTA */}
      <CtaFooter />
    </main>
  );
}
