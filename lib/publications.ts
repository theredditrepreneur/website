export type Publication = {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  banner: string;
  url: string;
  status: "Active" | "Planned";
  featured: boolean;
  topics: string[];
  audiences: string[];
  ownershipLine: string;
  launchDate: string;
  external: boolean;
};

export const publications: Publication[] = [
  {
    name: "The Bloxline",
    tagline: "The Adult’s Guide to Roblox",
    description: "The Bloxline helps adults understand the games, companies, studios, creators and culture shaping Roblox.",
    logo: "/publications/the-bloxline-logo.png",
    banner: "/publications/the-bloxline-banner.png",
    url: process.env.NEXT_PUBLIC_BLOXLINE_URL || "https://www.thebloxline.com/",
    status: "Active",
    featured: true,
    topics: ["Roblox", "Gaming", "Education", "Creators", "Studios", "Safety"],
    audiences: ["Parents", "Teachers", "Professionals", "Studios", "Brands"],
    ownershipLine: "A specialist publication from The Redditrepreneur",
    launchDate: "2026",
    external: true,
  },
];

export const featuredPublications = publications.filter((publication) => publication.featured);
export const bloxline = publications[0];
