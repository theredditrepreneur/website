import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cards, Section } from "@/components/Sections";
import { fractionalCci } from "@/lib/fractional-cci";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Community Intelligence Services",
  description: "Fractional Community Intelligence leadership, AI Authority and Community Intelligence audits, research, consulting and workshops.",
};

const communityAudit = services.find(service=>service.slug==="community-intelligence-audit")!;
const aiAudit = services.find(service=>service.slug==="ai-authority-audit")!;
const redditRiskAudit = services.find(service=>service.slug==="reddit-authenticity-risk-audit")!;

export default function Page() {
  return <>
    <header className="page-hero"><div className="shell"><p className="eyebrow">Professional services</p><h1>Expert Intelligence for Decisions That Matter.</h1><p className="lede">Human led analysis, research and strategic guidance for understanding AI recommendations and the community conversations shaping your market.</p></div></header>
    <Section eyebrow="Flagship executive advisory" title={fractionalCci.headline}>
      <div className="audit-feature fractional-feature"><Image src={fractionalCci.coverImage} alt={`The Redditrepreneur ${fractionalCci.serviceTitle} engagement`} width={1526} height={1017}/><div><p className="price">{fractionalCci.price}</p><h3>{fractionalCci.serviceTitle}</h3><p className="lede">{fractionalCci.shortDescription}</p><p>{fractionalCci.engagementType} · {fractionalCci.status} · {fractionalCci.commitment}</p><div className="button-row"><Link className="button" href={`/services/${fractionalCci.slug}`}>Explore the Engagement</Link></div></div></div>
    </Section>
    <Section eyebrow="Service comparison" title="Choose the Right Level of Support" className="alt">
      <div className="service-table-wrap"><table className="service-table"><thead><tr><th>Service</th><th>Best for</th><th>Investment</th><th><span className="sr-only">Next step</span></th></tr></thead><tbody>
        <tr><td><strong>{fractionalCci.serviceTitle}</strong></td><td>Ongoing Community Intelligence leadership and executive strategic support.</td><td>{fractionalCci.price}</td><td><Link className="text-link" href={`/services/${fractionalCci.slug}`}>Explore engagement</Link></td></tr>
        <tr><td><strong>{communityAudit.title}</strong></td><td>Understanding the conversations shaping your brand, competitors and market.</td><td>{communityAudit.price}</td><td><Link className="text-link" href={`/services/${communityAudit.slug}`}>View service</Link></td></tr>
        <tr><td><strong>{aiAudit.title}</strong></td><td>Understanding and strengthening the evidence shaping AI recommendations.</td><td>{aiAudit.price}</td><td><Link className="text-link" href={`/services/${aiAudit.slug}`}>View service</Link></td></tr>
        <tr><td><strong>{redditRiskAudit.title}</strong></td><td>Understanding whether Reddit participation builds trust or creates moderation and reputation risk.</td><td>{redditRiskAudit.price}</td><td><Link className="text-link" href={`/services/${redditRiskAudit.slug}`}>Explore the audit</Link></td></tr>
        <tr><td><strong>Community Intelligence Consulting</strong></td><td>Ongoing strategic guidance tailored to a specific market decision.</td><td>Custom scope</td><td><Link className="text-link" href="/services/community-intelligence-consulting">Make an enquiry</Link></td></tr>
        <tr><td><strong>Community Intelligence Research</strong></td><td>Original research into customers, competitors and emerging conversations.</td><td>Custom scope</td><td><Link className="text-link" href="/services/community-intelligence-research">Make an enquiry</Link></td></tr>
        <tr><td><strong>Community Intelligence Workshops</strong></td><td>Building practical Community Intelligence capability across a team.</td><td>Custom scope</td><td><Link className="text-link" href="/services/workshops">View workshops</Link></td></tr>
      </tbody></table></div>
    </Section>
    <Section title="All Professional Services"><Cards items={services.filter(x=>x.slug!==fractionalCci.slug).map(x=>({title:x.title,description:`${x.description}${"price" in x&&x.price?` ${x.price}.`:""}`,href:`/services/${x.slug}`,label:x.slug==="community-intelligence-audit"?"Learn About the Audit":x.slug==="ai-authority-audit"?"Learn About the AI Authority Audit":x.slug==="reddit-authenticity-risk-audit"?"Explore the Audit":"View Service"}))}/></Section>
  </>;
}
