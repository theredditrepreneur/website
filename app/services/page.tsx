import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cards, Section } from "@/components/Sections";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Community Intelligence Services",
  description: "Human led AI Authority and Community Intelligence audits, research, consulting and workshops.",
};

export default function Page() {
  return <>
    <header className="page-hero"><div className="shell"><p className="eyebrow">Professional services</p><h1>Expert Intelligence for Decisions That Matter.</h1><p className="lede">Human led analysis, research and strategic guidance for understanding AI recommendations and the community conversations shaping your market.</p></div></header>
    <Section eyebrow="Flagship service" title="AI Authority Audit">
      <div className="audit-feature authority-home-feature"><Image src="/services/ai-authority-audit.jpg" alt="The Redditrepreneur AI Authority Audit service cover" width={800} height={800}/><div><h3>Discover what AI believes about your brand and why.</h3><p className="lede">Understand the recommendations, competitor positioning, community conversations and evidence shaping AI answers before customers ever click.</p><ul className="audit-points"><li>AI recommendation analysis</li><li>Community Intelligence analysis</li><li>Competitor comparison</li><li>Evidence gap analysis</li><li>AI Authority Score</li><li>30 day and 90 day roadmaps</li></ul><div className="button-row"><Link className="button" href="/services/ai-authority-audit">Learn About the AI Authority Audit</Link></div></div></div>
    </Section>
    <Section eyebrow="Service comparison" title="Choose the Right Level of Support" className="alt">
      <div className="service-table-wrap"><table className="service-table"><thead><tr><th>Service</th><th>Best for</th><th>Investment</th><th><span className="sr-only">Next step</span></th></tr></thead><tbody><tr><td><strong>AI Authority Audit</strong></td><td>Understanding and strengthening the evidence shaping AI recommendations.</td><td>Secure checkout</td><td><Link className="text-link" href="/services/ai-authority-audit">View service</Link></td></tr><tr><td><strong>Community Intelligence Audit</strong></td><td>Understanding the conversations shaping your brand, competitors and market.</td><td>£595</td><td><Link className="text-link" href="/services/community-intelligence-audit">View service</Link></td></tr><tr><td><strong>Community Intelligence Consulting</strong></td><td>Ongoing strategic guidance tailored to a specific market decision.</td><td>Custom scope</td><td><Link className="text-link" href="/services/community-intelligence-consulting">Make an enquiry</Link></td></tr><tr><td><strong>Community Intelligence Research</strong></td><td>Original research into customers, competitors and emerging conversations.</td><td>Custom scope</td><td><Link className="text-link" href="/services/community-intelligence-research">Make an enquiry</Link></td></tr><tr><td><strong>Workshops</strong></td><td>Building practical Community Intelligence capability across a team.</td><td>From £1,495</td><td><Link className="text-link" href="/services/workshops">View workshops</Link></td></tr></tbody></table></div>
    </Section>
    <Section title="All Professional Services"><Cards items={services.slice(1).map(x=>({title:x.title,description:`${x.description}${"price" in x&&x.price?` ${x.price}.`:""}`,href:`/services/${x.slug}`,label:x.slug==="community-intelligence-audit"?"Learn About the Audit":"View Service"}))}/></Section>
  </>;
}
