import { site } from "@/lib/site";

export const ecosystem = [
  { icon: "01", title: "Live Community Intelligence SaaS", description: "Analyse conversations and discover market opportunities in one focused workspace.", href: site.appUrl, label: "Explore the Platform" },
  { icon: "02", title: "Original research", description: "Read evidence led reports and case studies explaining what communities mean.", href: "/research", label: "Read the Research" },
  { icon: "03", title: "Community Intelligence Scorecard", description: "Understand presence, trust, consensus, responsiveness and authority.", href: "https://blog.theredditrepreneur.com/the-redditrepreneur-community-intelligence-scorecard/", label: "View the Scorecard" },
  { icon: "04", title: "Community Intelligence Weekly", description: "Follow the developments and community conversations worth watching.", href: "https://theredditrepreneur.substack.com/", label: "Read Community Intelligence Weekly" },
  { icon: "05", title: "Community Intelligence Index", description: "Track recurring signals shaping brands, markets and online communities.", href: "https://blog.theredditrepreneur.com/community-intelligence-index-1-the-state-of-online-communities-june-2026/", label: "Explore the Index" },
  { icon: "06", title: "Product Hunt launch", description: "See the public launch of The Redditrepreneur Community Intelligence Platform.", href: "https://www.producthunt.com/products/the-redditrepreneur/launches/the-redditrepreneur", label: "View the Product Hunt Launch" },
];

export const frameworkIndex = "https://research.theredditrepreneur.com/Frameworks-385026b0422280efa23ec3c6236b7dda?pvs=21";
export const frameworks = [
  { title: "Community Gravity", description: "The force that attracts people to a community, keeps them engaged and encourages participation over time." },
  { title: "Expectation Gravity", description: "The pressure created when community expectations begin shaping how every new action or announcement is interpreted." },
  { title: "Trust Collapse", description: "The point at which disappointment becomes a deeper loss of confidence in a brand, leader or institution." },
  { title: "Narrative Compression", description: "The process through which future possibilities become treated as if they are already present realities." },
  { title: "Belief Correction", description: "A recalibration in confidence where belief becomes more cautious while underlying trust remains intact." },
  { title: "Mission Premium", description: "The additional trust, loyalty and value created when people believe they are participating in a meaningful mission." },
  { title: "Hype Hangover", description: "The correction that follows when community belief and excitement move faster than available evidence." },
  { title: "Market Gravity", description: "The force that pulls powerful narratives back towards measurable evidence, results and commercial reality." },
  { title: "Community Intelligence Stack", description: "A structured system for turning community conversations into evidence, interpretation and strategic action." },
  { title: "Share of Consensus", description: "A measure of how strongly community recommendations and repeated agreement favour one brand or position." },
].map(item => ({ ...item, href: frameworkIndex, label: `Read about ${item.title}` }));

export const scorecardDimensions = [
  { title: "Community Presence", description: "How consistently and meaningfully a brand appears in relevant community conversations." },
  { title: "Community Trust", description: "The confidence communities place in a brand based on experience, credibility and reliability." },
  { title: "Share of Consensus", description: "How often repeated recommendations and agreement favour the brand within its category." },
  { title: "Insight Responsiveness", description: "How effectively a brand recognises and responds to the needs and signals communities reveal." },
  { title: "Community Authority", description: "The strength of the brand's earned expertise, usefulness and influence within community decisions." },
];

export const audiences = [
  { title: "Founders", description: "Understand market demand, customer objections and competitive opportunities before making major decisions.", href: "/solutions/competitive-intelligence" },
  { title: "Marketing teams", description: "Use the language, recommendations and objections found in communities to create stronger positioning and campaigns.", href: "/solutions/marketing" },
  { title: "Product teams", description: "Identify recurring pain points, unmet needs, feature requests and reasons customers switch.", href: "/solutions/product" },
  { title: "Insight teams", description: "Add unsolicited community conversations to surveys, analytics and traditional customer research.", href: "/solutions/customer-insights" },
  { title: "Community teams", description: "Understand what strengthens trust, participation, advocacy and long term community health.", href: "/community-intelligence" },
  { title: "Agencies", description: "Deliver stronger research, strategy and recommendations using real community evidence.", href: "/solutions/agencies" },
];

export const industries = [
  { icon: "GA", title: "Gaming", description: "Understanding what players, fans and gaming communities really think.", href: "https://blog.theredditrepreneur.com/search?q=Gaming", label: "Explore gaming research" },
  { icon: "AI", title: "AI", description: "Understanding how people use, trust and talk about artificial intelligence.", href: "https://blog.theredditrepreneur.com/topics/ai-search", label: "Explore AI research" },
  { icon: "SP", title: "Sport", description: "Understanding fan communities, trusted voices and the conversations behind the headlines.", href: "https://blog.theredditrepreneur.com/search?q=Sport", label: "Explore sport research" },
  { icon: "SA", title: "SaaS", description: "Understanding customer frustrations, product feedback, competitor mentions and signs of churn.", href: "https://blog.theredditrepreneur.com/search?q=SaaS", label: "Explore SaaS research" },
  { icon: "CB", title: "Consumer Brands", description: "Understanding how community conversations influence trust and buying decisions.", href: "https://blog.theredditrepreneur.com/topics/consumer-brands", label: "Explore consumer brand research" },
  { icon: "EN", title: "Entertainment", description: "Understanding fandoms, creators, streaming, culture and audience behaviour.", href: "https://blog.theredditrepreneur.com/search?q=Entertainment", label: "Explore entertainment research" },
];

export const researchCategories = [
  { icon: "01", title: "Editorial Analysis", description: "Clear explanations of what major news reveals about communities." },
  { icon: "02", title: "Community Research", description: "Research into what people think, feel, trust and reject." },
  { icon: "03", title: "Scorecards and Indexes", description: "Structured comparisons of brands, products and communities." },
  { icon: "04", title: "Frameworks", description: "Original ways to understand community behaviour and business impact." },
];

export const communityIntelligenceBenefits = [
  "What people really think",
  "Who and what they trust",
  "Why opinions are changing",
  "What customers want next",
  "Where reputation risks are growing",
  "What action the business should take",
];

export const commercialOffers = [
  { slug: "fractional-chief-community-intelligence-officer", title: "Community Intelligence Retainer", audience: "Leadership teams that need ongoing Community Intelligence direction.", receives: "Executive briefings, strategic sessions, monitoring and direct advisory support." },
  { slug: "community-intelligence-audit", audience: "Businesses that need a focused view of their brand, competitors and market.", receives: "A human led report with findings, risks, opportunities and recommended actions." },
  { slug: "workshops", title: "Community Intelligence Workshop", audience: "Teams building practical Community Intelligence capability.", receives: "A tailored, hands on session built around the team’s priorities." },
  { slug: "ai-authority-audit", audience: "Brands that need to understand the evidence shaping AI recommendations.", receives: "AI recommendation analysis, evidence gaps, citation opportunities and a clear roadmap." },
  { slug: "reddit-authenticity-risk-audit", audience: "Brands planning or reviewing their participation on Reddit.", receives: "A manual assessment of authenticity, community fit, moderation exposure and trust risk." },
];

export const featuredResearch = [
  { type: "Gaming", title: "Fortnite's AI Characters Are Becoming Community Members That Never Log Off", summary: "What conversational AI characters could mean for trust, participation and community life inside Fortnite.", date: "30 July 2026", cta: "Read article", image: "/research/fortnite-ai-characters.webp", href: "https://blog.theredditrepreneur.com/fortnite-ai-characters-community-members/" },
  { type: "Sport", title: "Every Community Has Its Own David Ornstein", summary: "What football transfer reporting reveals about how authority and trust move through every community.", date: "29 July 2026", cta: "Read article", image: "/research/david-ornstein-community-authority.webp", href: "https://blog.theredditrepreneur.com/every-community-has-its-own-david-ornstein/" },
  { type: "Gaming", title: "GTA VI Is Becoming the Game That Sells the Entire Gaming Ecosystem", summary: "Why one game could drive console sales through the pull of a shared community experience.", date: "29 July 2026", cta: "Read article", image: "/research/gta-vi-gaming-ecosystem.webp", href: "https://blog.theredditrepreneur.com/gta-vi-selling-the-entire-gaming-ecosystem/" },
  { type: "Gaming", title: "Even Your Xbox Game Disc Now Needs Permission From the Internet", summary: "How platform outages are changing what physical ownership means to gaming communities.", date: "29 July 2026", cta: "Read article", image: "/research/xbox-internet-permission.webp", href: "https://blog.theredditrepreneur.com/xbox-game-disc-needs-internet-permission/" },
  { type: "Entertainment", title: "Netflix Has Become Britain's Default TV Channel", summary: "How Netflix is becoming a primary doorway through which British audiences discover television.", date: "29 July 2026", cta: "Read article", image: "/research/netflix-britain-default-tv.webp", href: "https://blog.theredditrepreneur.com/netflix-has-become-britains-default-tv-channel/" },
  { type: "AI", title: "Companies Are Building an Invisible AI Workforce", summary: "Why businesses must identify, manage and explain the AI agents operating inside their organisations.", date: "29 July 2026", cta: "Read article", image: "/research/cyera-invisible-ai-workforce.webp", href: "https://blog.theredditrepreneur.com/cyera-invisible-ai-workforce/" },
];
