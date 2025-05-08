import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getStrapiAssetUrl = (
  url: string,
  size?: "small" | "medium" | "large" | "thumbnail"
) => {
  if (
    process.env.NEXT_PUBLIC_ASSET_STRAPI_URL ===
    process.env.NEXT_PUBLIC_STRAPI_URL
  ) {
    return process.env.NEXT_PUBLIC_STRAPI_URL + url;
  }

  const pathname = url.replace(
    process.env.NEXT_PUBLIC_ASSET_STRAPI_URL + "/",
    ""
  );

  const src = `${process.env.NEXT_PUBLIC_ASSET_STRAPI_URL}/${
    size ? size + "_" : ""
  }${pathname}`;

  return src;
};
