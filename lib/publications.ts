export type Publication = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  url: string;
  status: "Active" | "Planned";
  featured: boolean;
  accent: "bloxline" | "chnnl";
  topics: string[];
  ownershipLine: string;
};

export const publications: Publication[] = [
  {
    slug: "the-bloxline",
    name: "The Bloxline",
    tagline: "Understanding the business and culture of Roblox.",
    description: "The Bloxline is a specialist intelligence brand covering the business and culture of Roblox. It explains the studios, games, creators, technology, careers and communities building the ecosystem, and works with Roblox games and studios to build and cultivate communities around their titles.",
    image: "/publications/the-bloxline-logo-current.jpg",
    imageAlt: "The Bloxline logo",
    imageWidth: 1254,
    imageHeight: 1254,
    url: process.env.NEXT_PUBLIC_BLOXLINE_URL || "https://www.thebloxline.com/",
    status: "Active",
    featured: true,
    accent: "bloxline",
    topics: ["Roblox", "Games", "Studios", "Creators", "Technology", "Careers"],
    ownershipLine: "An intelligence brand from The Redditrepreneur",
  },
  {
    slug: "the-chnnl",
    name: "The CHNNL",
    tagline: "Understanding the new creator economy.",
    description: "The CHNNL covers creators, social commerce, platforms, agencies, brands and the businesses being built around online influence.",
    image: "/publications/the-chnnl-logo.jpg",
    imageAlt: "The CHNNL logo",
    imageWidth: 1254,
    imageHeight: 1254,
    url: process.env.NEXT_PUBLIC_CHNNL_URL || "https://thechnnl.com/",
    status: "Active",
    featured: true,
    accent: "chnnl",
    topics: ["Creators", "Social commerce", "Platforms", "Agencies", "Brands", "Online influence"],
    ownershipLine: "An intelligence brand from The Redditrepreneur",
  },
];

export const featuredPublications = publications.filter((publication) => publication.featured);
export const bloxline = publications[0];
export const chnnl = publications[1];
