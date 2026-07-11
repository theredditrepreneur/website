export const site = {
  name: "The Redditrepreneur",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://theredditrepreneur.com",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://app.theredditrepreneur.com",
  blogUrl: process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.theredditrepreneur.com",
  researchUrl: process.env.NEXT_PUBLIC_RESEARCH_URL || "https://research.theredditrepreneur.com",
  email: "theredditrepreneur@gmail.com",
  freeScoreEnabled: process.env.NEXT_PUBLIC_FREE_SCORE_ENABLED === "true",
  freeScoreUrl: process.env.NEXT_PUBLIC_FREE_SCORE_URL || "",
};

export const primaryCta = site.freeScoreEnabled && site.freeScoreUrl
  ? { label: "Generate Your Free Score", href: site.freeScoreUrl }
  : { label: "Explore the Platform", href: site.appUrl };

export type CardItem = { title: string; description: string; href: string; label?: string };

export const products = [
  { slug:"reddit-authority-system", title:"The Reddit Authority System", price:"£149", image:"/products/reddit-authority-system.png", description:"A complete framework for building genuine authority, earning visibility and creating value through Reddit.", checkout:"https://buy.stripe.com/6oU3cw1vjcLy6EZdeZefC01" },
  { slug:"reddit-os", title:"The Reddit OS Operating System", price:"£99", image:"/products/reddit-os.png", description:"Documents, spreadsheets and templates for researching Reddit, tracking conversations and organising strategic opportunities.", checkout:"https://buy.stripe.com/3cIeVeb5TaDq2oJej3efC02" },
  { slug:"aeo-strategy-playbook", title:"The Redditrepreneur AEO Strategy Playbook for Brands", price:"£9.99", image:"/products/aeo-playbook.png", description:"A practical guide to building authority, earning citations and improving visibility in AI search.", checkout:"https://buy.stripe.com/fZuaEY0rf4f2e7rgrbefC03" },
  { slug:"authority-bundle", title:"The Redditrepreneur Authority Bundle", price:"£249", image:"/products/authority-bundle.png", description:"The Reddit Authority System, Reddit OS and AEO Strategy Playbook together in one complete bundle.", checkout:"https://buy.stripe.com/5kQ4gA5Lzh1O2oJdeZefC04" },
] as const;

export const services = [
  { slug:"community-intelligence-audit", title:"Community Intelligence Audit", price:"£595", description:"A strategic analysis led by a human expert, covering the conversations shaping your brand, competitors and market, delivered within seven days.", checkout:"https://buy.stripe.com/28E4gA6PD5j6fbvgrbefC00" },
  { slug:"community-intelligence-consulting", title:"Community Intelligence Consulting", description:"Strategic guidance for teams using online conversations to improve marketing, products and positioning." },
  { slug:"community-intelligence-research", title:"Community Intelligence Research", description:"Custom research into customer behaviour, competitor positioning and emerging market conversations." },
  { slug:"competitor-intelligence-analysis", title:"Competitor Intelligence Analysis", description:"Understand how communities compare competitors, where trust is built and where differentiation is possible." },
  { slug:"workshops", title:"Community Intelligence Workshops", price:"From £1,495", description:"Practical team training for building Community Intelligence capability." },
  { slug:"reddit-strategy-consulting", title:"Reddit Strategy Consulting", description:"Build a credible, useful Reddit strategy around the communities that matter to your market." },
] as const;

export const solutions = [
  {slug:"marketing",title:"Marketing",description:"Understand customer language, objections and recommendations."},
  {slug:"product",title:"Product",description:"Identify recurring pain points, unmet needs and feature requests."},
  {slug:"customer-insights",title:"Customer Insights",description:"Learn what customers say when the brand is not in the room."},
  {slug:"competitive-intelligence",title:"Competitive Intelligence",description:"Understand why communities choose competitors."},
  {slug:"ai-search-visibility",title:"AI Search Visibility",description:"Build authority around the conversations AI answer engines use for context."},
  {slug:"agencies",title:"Agencies",description:"Deliver research and strategy informed by communities for clients."},
] as const;
