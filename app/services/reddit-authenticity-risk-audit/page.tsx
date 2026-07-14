import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Sections";
import { site } from "@/lib/site";

const checkout = "https://buy.stripe.com/14A6oIa1PaDqfbv3EpefC06";
const intake = "https://form.typeform.com/to/hJLG1DZc";
const route = "/services/reddit-authenticity-risk-audit";
const image = "/services/reddit-authenticity-risk-audit.jpg";

export const metadata: Metadata = {
  title: "Reddit Authenticity and Risk Audit",
  description: "Assess your Reddit authenticity, community fit, promotional risk and moderation exposure. Receive a tailored report and action plan within 7 working days.",
  alternates: { canonical: route },
  openGraph: { title: "Reddit Authenticity and Risk Audit", description: "Find out whether your Reddit presence builds trust or creates moderation, reputation and authenticity risk.", url: route, type: "website", images: [{ url: image, width: 1522, height: 939, alt: "Reddit Authenticity and Risk Audit service by The Redditrepreneur" }] },
  twitter: { card: "summary_large_image", title: "Reddit Authenticity and Risk Audit", description: "Find out whether your Reddit presence builds trust or creates moderation, reputation and authenticity risk.", images: [image] },
};

const risks = ["Removed posts","Account restrictions","Moderator action","Community backlash","Loss of trust","Artificial or promotional language","Reputational damage","Unstable AI visibility"];
const assessed = [
  ["Authenticity of participation","Whether contributions feel genuine, transparent and useful."],
  ["Community fit","Whether the brand is participating in appropriate subreddits and respecting local expectations."],
  ["Promotional risk","Content that appears overly commercial, repetitive or focused on visibility rather than value."],
  ["Moderation exposure","Activity that may create removal, restriction or account risk."],
  ["AI generated language risk","Wording that may appear generic, automated or disconnected from natural Reddit communication. This is a language and authenticity assessment, not definitive AI detection."],
  ["Trust signals","Behaviours, evidence and contributions that strengthen credibility."],
  ["Account and participation patterns","Available activity, frequency, transparency and behavioural patterns."],
  ["AI Authority implications","How authentic or inauthentic community evidence may influence brand perception and AI generated recommendations."],
] as const;
const audiences = ["Brands already participating on Reddit","SaaS companies","AI companies","Reddit marketing agencies","GEO and AI visibility agencies","Founders and employees representing their companies","Organisations planning their first Reddit strategy","Companies that have experienced removals or poor Reddit performance","Businesses using AI assisted community content","Teams concerned about reputation or moderation risk"];
const deliverables = [
  ["Executive Summary","A concise explanation of the most important findings, risks and opportunities."],
  ["Reddit Authenticity Risk Score","An overall assessment using The Redditrepreneur's independent assessment framework. It is not an official Reddit metric."],
  ["Risk Heatmap","A visual overview of low, medium and high risk areas."],
  ["Community Fit Assessment","Analysis of relevant communities, expectations and participation risks."],
  ["Account and Activity Review","Assessment of supplied brand, founder or employee Reddit accounts where applicable."],
  ["Promotional Risk Analysis","Identification of language, behaviour and patterns that may appear overly commercial."],
  ["AI Generated Language Risk Review","Assessment of wording and content patterns that may appear generic, automated or unnatural."],
  ["Moderation and Reputation Risks","Potential risks relating to subreddit rules, moderator expectations and public perception."],
  ["Trust and Authority Opportunities","Actions that can improve credibility and community acceptance."],
  ["Prioritised Recommendations","Clear recommendations ordered by importance and impact."],
  ["30 Day Action Plan","Immediate actions to improve authenticity and reduce risk."],
  ["Private Walkthrough","A private session covering the findings and recommended next steps."],
] as const;
const process = [
  ["Purchase the audit","Complete payment securely through Stripe."],
  ["Complete the intake form","Provide company details, Reddit accounts, objectives, concerns and relevant communities."],
  ["Research and analysis","The Redditrepreneur manually reviews the supplied information, relevant Reddit activity, community expectations and available public conversations."],
  ["Receive the audit","Receive the completed audit within 7 working days of the completed intake form being received, plus an invitation to a private walkthrough session."],
] as const;
const comparisons = [
  ["Chief Community Intelligence Officer","Build an ongoing Community Intelligence capability across the organisation."],
  ["Community Intelligence Audit","Understand what customers and communities believe."],
  ["AI Authority Audit","Understand how public evidence shapes AI recommendations."],
  ["Reddit Authenticity and Risk Audit","Understand whether your Reddit participation builds trust or creates risk."],
] as const;
const faqs = [
  ["Is this audit only for brands already using Reddit?","No. The audit can review an existing presence or assess a proposed Reddit strategy before activity begins."],
  ["What information do you need?","After purchasing, you complete an intake form containing company details, Reddit usernames, relevant communities, objectives and any specific concerns."],
  ["When will I receive the audit?","The completed audit is delivered within 7 working days of receiving the completed intake form."],
  ["Is the audit automated?","No. Each audit is manually researched, analysed and prepared using The Redditrepreneur's Community Intelligence methodology."],
  ["Can you guarantee that Reddit posts will not be removed?","No. Moderator decisions and platform enforcement cannot be guaranteed. The audit identifies risks and recommends safer, more authentic approaches."],
  ["Does this prove whether content was written by AI?","No. The audit assesses language and behavioural patterns that may appear generic, automated or inauthentic. It does not claim to definitively identify AI authorship."],
  ["Does the audit include implementation?","The audit provides analysis, recommendations and a 30 day action plan. Ongoing implementation can be discussed separately."],
  ["Is this affiliated with Reddit?","No. The Reddit Authenticity and Risk Audit is an independent service provided by The Redditrepreneur."],
  ["What happens after payment?","You will be directed to complete the client intake form. The 7 working day delivery period begins once the completed form is received."],
] as const;

function PurchaseLinks({ label = "Book Your Reddit Audit for £995" }: { label?: string }) {
  return <div className="risk-purchase"><a className="button" href={checkout}>{label}</a><a className="risk-intake-link" href={intake} target="_blank" rel="noopener noreferrer">Already purchased? Complete your client intake form</a></div>;
}

export default function RedditRiskAuditPage() {
  const canonical = `${site.url}${route}`;
  const schema = [
    { "@context":"https://schema.org", "@type":"Service", name:"Reddit Authenticity and Risk Audit", serviceType:"Independent Reddit authenticity, community fit and risk audit", description:"A manual, tailored assessment of Reddit authenticity, community fit, promotional risk, moderation exposure and trust opportunities.", provider:{ "@type":"Organization", name:site.name, url:site.url }, url:canonical, image:`${site.url}${image}`, areaServed:"Worldwide", offers:{ "@type":"Offer", price:"995", priceCurrency:"GBP", url:checkout, availability:"https://schema.org/InStock" } },
    { "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[{ "@type":"ListItem", position:1, name:"Home", item:site.url },{ "@type":"ListItem", position:2, name:"Services", item:`${site.url}/services` },{ "@type":"ListItem", position:3, name:"Reddit Authenticity and Risk Audit", item:canonical }] },
    { "@context":"https://schema.org", "@type":"FAQPage", mainEntity:faqs.map(([name,text])=>({ "@type":"Question", name, acceptedAnswer:{ "@type":"Answer", text } })) },
  ];
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="page-hero risk-hero"><div className="shell split"><div><p className="eyebrow">Specialist Reddit Audit</p><h1>Reddit Authenticity and Risk Audit</h1><p className="authority-subheadline">Build trust before you build visibility.</p><p className="lede">Understand whether your Reddit presence is building genuine authority or creating unnecessary moderation, reputation and trust risk.</p><p>Reddit is becoming more influential across customer research, brand perception and AI generated recommendations. At the same time, the platform is strengthening its ability to detect promotional, coordinated and artificial participation.</p><p>This audit examines whether your Reddit presence is authentic, community appropriate and capable of building lasting trust.</p><div className="risk-price"><strong>£995</strong><span>One time engagement</span></div><PurchaseLinks label="Book Your Reddit Audit" /></div><div className="authority-cover risk-cover"><Image src={image} alt="Reddit Authenticity and Risk Audit service by The Redditrepreneur" width={1522} height={939} sizes="(max-width: 980px) calc(100vw - 44px), 52vw" priority /></div></div></header>

    <Section eyebrow="The risk behind visibility" title="Reddit visibility without authenticity creates risk"><div className="risk-intro"><div><p className="lede">Reddit conversations increasingly influence customer research, brand perception, product comparisons, search visibility and AI generated recommendations.</p><p>Poorly planned activity can create public problems before it creates useful visibility. The audit helps organisations understand those risks early.</p></div><ul className="risk-list">{risks.map(item=><li key={item}>{item}</li>)}</ul></div></Section>

    <Section eyebrow="Eight assessment areas" title="What the audit assesses" className="alt"><div className="authority-grid risk-assessment-grid">{assessed.map(([title,description],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div></Section>

    <Section eyebrow="Designed for responsible participation" title="Who this is for"><div className="risk-audience-grid">{audiences.map(item=><p key={item}>{item}</p>)}</div></Section>

    <Section eyebrow="Manual, tailored analysis" title="What you receive" className="risk-deliverables dark"><div className="authority-deliverable-grid risk-deliverable-grid">{deliverables.map(([title,description])=><article key={title}><span aria-hidden>✓</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div><PurchaseLinks /></Section>

    <Section eyebrow="A clear start point" title="How delivery works"><ol className="risk-process">{process.map(([title,description],index)=><li key={title}><span>{index+1}</span><div><h3>{title}</h3><p>{description}</p>{index===1&&<a className="text-link" href={intake} target="_blank" rel="noopener noreferrer">Complete the client intake form after purchase</a>}</div></li>)}</ol><p className="notice"><strong>Delivery timing:</strong> The 7 working day delivery period begins when the completed intake form is received, not when payment is made.</p></Section>

    <Section eyebrow="Independent and transparent" title="An independent strategic assessment" className="alt"><div className="prose"><p>This audit is an independent consulting service developed by The Redditrepreneur. It is not affiliated with, endorsed by or produced by Reddit.</p><p>The audit assesses authenticity, community fit and risk based on available information, platform culture and professional judgement. It cannot guarantee that content will be approved by moderators, remain live or produce a specific business or AI visibility outcome.</p></div></Section>

    <Section eyebrow="Specialist interpretation" title="Reddit expertise combined with Community Intelligence"><div className="split"><div><p className="lede">The Redditrepreneur does not simply assess what a brand posts. We examine how the activity is likely to be interpreted by communities, moderators, customers and the wider public evidence layer influencing AI recommendations.</p><p>The work combines specialist Reddit strategy experience, Community Intelligence methodology, understanding of platform culture and manual analysis focused on trust rather than manufactured engagement.</p></div><div className="authority-principles"><p><strong>Community context</strong><span>How participation fits local expectations and conversation.</span></p><p><strong>Trust and risk</strong><span>What strengthens authority and what may weaken reputation.</span></p><p><strong>Actionable direction</strong><span>A tailored 30 day plan rather than a generic automated report.</span></p></div></div></Section>

    <Section eyebrow="Choose the right service" title="How this audit fits the service ecosystem" className="alt"><div className="risk-comparison">{comparisons.map(([title,description],index)=><article className={index===0?"flagship":undefined} key={title}><span>{index===0?"Highest level engagement":"Specialist service"}</span><h3>{title}</h3><p>{description}</p></article>)}</div><div className="button-row"><Link className="button secondary" href="/services">Compare All Services</Link></div></Section>

    <Section eyebrow="Common questions" title="Reddit Authenticity and Risk Audit FAQs"><div className="authority-faqs">{faqs.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></Section>

    <section className="authority-final risk-final"><div className="shell"><p className="eyebrow">Build a Reddit presence people genuinely trust</p><h2>Understand your authenticity risks before they affect your accounts, reputation or authority.</h2><PurchaseLinks /></div></section>
  </>;
}
