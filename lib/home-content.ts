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
  { type: "Research", title: "The Death of Social Listening", summary: "Why brands need context, trust and consensus, not just mention counts.", date: "3 July 2026", cta: "Read the research", image: "/research/social-listening.png", href: "https://blog.theredditrepreneur.com/the-death-of-social-listening-why-brands-are-switching-to-community-intelligence/" },
  { type: "Benchmark", title: "2026 B2B SaaS Benchmarks", summary: "Tracking Share of Consensus across B2B SaaS community conversations.", date: "3 July 2026", cta: "Read the benchmark", image: "/research/b2b-saas-benchmarks.jpg", href: "https://blog.theredditrepreneur.com/the-2026-b2b-saas-community-intelligence-benchmarks-tracking-share-of-consensus/" },
  { type: "Index", title: "Community Intelligence Index #1", summary: "The state of online communities and the signals shaping brands and markets.", date: "1 July 2026", cta: "Read the Index", image: "/research/community-intelligence-index.png", href: "https://blog.theredditrepreneur.com/community-intelligence-index-1-the-state-of-online-communities-june-2026/" },
  { type: "Scorecard", title: "Gymshark Scorecard", summary: "An editorial application of the Community Intelligence Scorecard to Gymshark.", date: "6 July 2026", cta: "Read the Scorecard", image: "/research/gymshark-scorecard.png", href: "https://blog.theredditrepreneur.com/the-redditrepreneur-community-intelligence-scorecard-gymshark/" },
  { type: "Case study", title: "Streamer University", summary: "What a creator led institution reveals about participation, trust and Community Intelligence.", date: "8 July 2026", cta: "Read the case study", image: "/research/streamer-university.png", href: "https://blog.theredditrepreneur.com/what-streamer-university-teaches-us-about-community-intelligence/" },
  { type: "Case study", title: "GTA 6", summary: "What millions of online conversations reveal about the weight of expectation.", date: "29 June 2026", cta: "Read the case study", image: "/research/gta-6.png", href: "https://blog.theredditrepreneur.com/gta-6-the-weight-of-expectation/" },
];
