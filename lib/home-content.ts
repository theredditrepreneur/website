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

export const featuredResearch = [
  { type: "Case study", title: "X-Men '97 Season 2", summary: "How trust, interpretation and participation are rewarding the community that believed in the series.", date: "24 July 2026", cta: "Read the case study", image: "/research/x-men-97-community-intelligence.jpg", href: "https://blog.theredditrepreneur.com/x-men-97-season-2-community-intelligence-episode-6/" },
  { type: "Case study", title: "The Rest Is Football", summary: "How community success creates evidence, reduces uncertainty and opens new commercial opportunities.", date: "24 July 2026", cta: "Read the case study", image: "/research/rest-is-football-community-success.webp", href: "https://blog.theredditrepreneur.com/the-rest-is-football-community-success-business-opportunities/" },
  { type: "Analysis", title: "HubSpot Made Reddit a Performance Marketing Channel", summary: "Why Reddit, forums and AI search are becoming part of the modern acquisition engine.", date: "24 July 2026", cta: "Read the analysis", image: "/research/hubspot-reddit-performance-marketing.webp", href: "https://blog.theredditrepreneur.com/hubspot-just-made-reddit-a-performance-marketing-channel/" },
  { type: "Scorecard", title: "Roblox Community Intelligence Scorecard", summary: "Roblox excels at participation while moderation, support and creator experience reveal important opportunities.", date: "23 July 2026", cta: "Read the Scorecard", image: "/research/roblox-scorecard.webp", href: "https://blog.theredditrepreneur.com/roblox-community-intelligence-scorecard/" },
  { type: "Research", title: "Community Intelligence Is an Early Warning System", summary: "How emerging customer needs, competitor shifts and market trends appear before traditional research catches up.", date: "21 July 2026", cta: "Read the research", image: "/research/community-intelligence-early-warning.webp", href: "https://blog.theredditrepreneur.com/community-intelligence-is-an-early-warning-system/" },
  { type: "Scorecard", title: "Nike Community Intelligence Scorecard", summary: "Nike still leads culture, but challenger brands are changing conversations about performance, innovation and value.", date: "20 July 2026", cta: "Read the Scorecard", image: "/research/nike-scorecard.webp", href: "https://blog.theredditrepreneur.com/nike-community-intelligence-scorecard/" },
];
