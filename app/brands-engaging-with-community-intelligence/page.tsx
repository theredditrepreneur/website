import type { Metadata } from "next";
import { BrandEngagementCard, BrandEngagementView, EngagementCta } from "@/components/BrandEngagement";
import { Section } from "@/components/Sections";
import { publishedBrandEngagements } from "@/lib/brand-engagements";
import { site } from "@/lib/site";

const title = "Brands Engaging With Community Intelligence";
const description = "See how brands are responding to The Redditrepreneur's Community Intelligence Scorecards and research through real, unsolicited public interactions.";
const canonical = "/brands-engaging-with-community-intelligence";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: "website", images: [{ url: "/proof/honest-burgers-community-intelligence-engagement.jpg", width: 1170, height: 538, alt: publishedBrandEngagements[0].screenshotAlt }] },
  twitter: { card: "summary_large_image", title, description, images: ["/proof/honest-burgers-community-intelligence-engagement.jpg"] },
};

export default function Page() {
  const url = `${site.url}${canonical}`;
  const schema = [
    { "@context": "https://schema.org", "@type": "CollectionPage", name: title, description, url, mainEntity: { "@type": "ItemList", itemListElement: publishedBrandEngagements.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.headline, description: item.context })) } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.url }, { "@type": "ListItem", position: 2, name: title, item: url }] },
  ];
  return <>
    <BrandEngagementView eventName="brand_engagement_page_viewed" />
    <header className="page-hero engagement-page-hero"><div className="shell"><p className="eyebrow">Community Intelligence in Practice</p><h1>Brands Are Already Engaging With Community Intelligence</h1><p className="lede">Real public responses from organisations engaging with The Redditrepreneur's Community Intelligence research.</p><div className="button-row"><EngagementCta className="button" href="https://blog.theredditrepreneur.com/scorecards" eventName="scorecard_cta_clicked">Explore the Scorecards</EngagementCta><EngagementCta className="button secondary" href="/community-intelligence" eventName="community_intelligence_cta_clicked">What Is Community Intelligence?</EngagementCta></div></div></header>
    <Section eyebrow="Public brand responses" title="Community Intelligence in the Real World" intro="Community Intelligence is most valuable when it creates a clearer understanding between brands and the communities shaping their reputation. As The Redditrepreneur publishes Scorecards, case studies and original research, some of the organisations analysed have begun joining the conversation." className="engagement-section"><div className="brand-engagement-list">{publishedBrandEngagements.map((item) => <BrandEngagementCard key={item.slug} item={item} />)}</div></Section>
    <Section title="Why Brand Engagement Matters" className="alt"><div className="prose"><p>Community Intelligence surfaces how communities perceive brands, where trust is being strengthened, where friction exists and what organisations can learn from those conversations.</p><p>When brands respond, it creates a direct bridge between public community insight and business decision making.</p></div></Section>
    <Section title="How These Interactions Are Documented"><div className="methodology-grid"><p>Only public brand responses are shown.</p><p>Screenshots are used for context and attribution.</p><p>Responses are not presented as endorsements.</p><p>Brands are not described as clients unless there is a formal relationship.</p><p>Context is written factually.</p><p>The original public interaction is linked where possible.</p><p>Screenshots are not altered beyond basic optimisation.</p></div></Section>
    <Section eyebrow="Understand your reputation" title="See How Your Brand Is Being Discussed" intro="The Redditrepreneur helps organisations understand how online communities shape trust, recommendations, product decisions and AI visibility." className="engagement-final dark"><div className="button-row"><EngagementCta className="button" href="https://blog.theredditrepreneur.com/scorecards" eventName="scorecard_cta_clicked">Explore Community Intelligence Scorecards</EngagementCta><EngagementCta className="button secondary" href="/services/community-intelligence-audit" eventName="audit_cta_clicked">Learn About the Community Intelligence Audit</EngagementCta></div></Section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
