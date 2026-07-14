export type BrandEngagement = {
  brandName: string;
  slug: string;
  headline: string;
  context: string;
  platform: string;
  interactionType: string;
  date?: string;
  screenshot: string;
  screenshotAlt: string;
  brandLogo?: string;
  relatedContentUrl?: string;
  publicInteractionUrl?: string;
  disclosure: string;
  featured: boolean;
  published: boolean;
  displayOrder: number;
  seoTitle: string;
  metaDescription: string;
};

export const brandEngagements: BrandEngagement[] = [
  {
    brandName: "Honest Burgers",
    slug: "honest-burgers-community-intelligence-scorecard-response",
    headline: "Honest Burgers Responded to a Community Intelligence Scorecard",
    context: "After The Redditrepreneur published a Community Intelligence Scorecard analysing the best burger restaurants in Manchester, Honest Burgers joined the LinkedIn discussion and highlighted its focus on homemade ingredients and guest experience.",
    platform: "LinkedIn",
    interactionType: "Public brand response",
    screenshot: "/proof/honest-burgers-community-intelligence-engagement.jpg",
    screenshotAlt: "Honest Burgers LinkedIn comment responding positively to The Redditrepreneur's Community Intelligence Scorecard about burger restaurants in Manchester",
    disclosure: "This was a public, unsolicited response. Honest Burgers is not presented as a client, partner or endorser of The Redditrepreneur.",
    featured: true,
    published: true,
    displayOrder: 1,
    seoTitle: "Honest Burgers Community Intelligence Scorecard Response",
    metaDescription: "The public Honest Burgers response to The Redditrepreneur's Community Intelligence Scorecard about burger restaurants in Manchester.",
  },
];

export const publishedBrandEngagements = brandEngagements
  .filter((item) => item.published)
  .sort((a, b) => a.displayOrder - b.displayOrder);

export const featuredBrandEngagements = publishedBrandEngagements.filter((item) => item.featured);
