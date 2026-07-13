import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Sections";
import { site } from "@/lib/site";

const checkout = "https://buy.stripe.com/7sYcN6b5TfXKd3n5MxefC05";

export const metadata: Metadata = {
  title: "AI Authority Audit",
  description: "Discover what AI believes about your brand, why it recommends competitors and which evidence gaps are limiting your authority.",
  alternates: { canonical: "/services/ai-authority-audit" },
  openGraph: {
    title: "AI Authority Audit | The Redditrepreneur",
    description: "Discover what AI believes about your brand and why.",
    images: [{ url: "/services/ai-authority-audit.jpg", width: 1280, height: 1280, alt: "The Redditrepreneur AI Authority Audit" }],
  },
};

const analysed = [
  ["AI platforms", "The answers, recommendations and comparisons produced by leading AI discovery platforms."],
  ["Reddit", "The public discussions that influence trust, recommendations and category understanding."],
  ["Community conversations", "What customers and experts believe, repeat, challenge and recommend in the communities that matter."],
  ["Competitor positioning", "Why competitors appear in AI answers, which claims support them and where your brand is being overlooked."],
  ["Customer language", "The questions, terms, objections and decision criteria people use when researching the category."],
  ["Evidence supporting AI answers", "The sources and signals AI systems can use to justify an answer, citation or recommendation."],
] as const;

const deliverables = [
  ["Executive Summary", "A concise view of the most important findings, risks and opportunities."],
  ["AI Recommendation Analysis", "A structured analysis of how AI platforms describe, compare and recommend your brand."],
  ["Community Intelligence Analysis", "The beliefs, recommendations and objections shaping your reputation in public communities."],
  ["Competitor Comparison", "A clear view of which competitors lead AI answers and the evidence supporting their position."],
  ["Evidence Gap Analysis", "The missing proof, sources and community signals limiting your visibility and credibility."],
  ["AI Authority Score", "A transparent assessment of your current authority across the evidence reviewed."],
  ["Citation Opportunities", "Priority topics and credible evidence opportunities that can strengthen future AI answers."],
  ["30 Day Roadmap", "Immediate actions to correct the most important gaps and create early momentum."],
  ["90 Day Roadmap", "A sequenced plan for building durable authority across content, community and external evidence."],
] as const;

const audiences = [
  ["Founders and leadership teams", "Understand how your market is being interpreted before AI recommendations influence a major buying decision."],
  ["Marketing and brand teams", "Find the language, evidence and reputation gaps affecting visibility, positioning and trust."],
  ["SEO and AI search teams", "Move beyond keyword tracking with a clear view of the sources and community evidence shaping AI answers."],
  ["Product and insight teams", "See which customer beliefs, competitor strengths and unmet needs are becoming part of AI generated advice."],
  ["Agencies and consultants", "Give clients an evidence based view of their AI authority and a practical roadmap for improvement."],
] as const;

const faqs = [
  ["Is the audit automated?", "No. The AI Authority Audit is a human led consulting service. Software can support the research, but the evidence is interpreted and turned into recommendations by The Redditrepreneur."],
  ["Which AI platforms do you analyse?", "The platform mix is selected around your market and customer journey. Scope is confirmed before the audit begins because AI products and access can change."],
  ["Is this the same as an SEO audit?", "No. An SEO audit focuses mainly on search visibility and website performance. This audit examines what AI systems appear to believe, the evidence supporting their answers and the community conversations shaping trust."],
  ["Does the audit guarantee AI citations?", "No. No responsible service can guarantee an AI recommendation or citation. The audit identifies evidence gaps and practical opportunities to strengthen authority."],
  ["What do you need from us?", "We begin with your brand, market, priority competitors, customer questions and any decisions the audit needs to support. Further requirements are confirmed after purchase."],
  ["How will the audit be delivered?", "You receive a structured written audit containing the agreed analysis, score, opportunities and 30 day and 90 day roadmaps."],
] as const;

export default function AIServicePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Authority Audit",
    serviceType: "AI authority and Community Intelligence consulting audit",
    provider: { "@type": "Organization", name: site.name, url: site.url },
    url: `${site.url}/services/ai-authority-audit`,
    description: "A human led audit of the reputation, evidence and community conversations shaping AI recommendations about a brand.",
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="page-hero authority-hero">
      <div className="shell split">
        <div>
          <p className="eyebrow">Flagship consulting service</p>
          <h1>AI Authority Audit</h1>
          <p className="authority-subheadline">Discover what AI believes about your brand and why.</p>
          <p className="lede">Traditional analytics measure website traffic. The AI Authority Audit measures the reputation, evidence and community conversations shaping AI recommendations before customers ever click.</p>
          <div className="button-row">
            <a className="button" href={checkout} target="_blank" rel="noopener noreferrer">Purchase the AI Authority Audit</a>
            <a className="button secondary" href={`mailto:${site.email}?subject=${encodeURIComponent("AI Authority Audit enquiry")}`}>Ask a Question</a>
          </div>
          <p className="authority-note">Human led analysis. Clear evidence. Prioritised action.</p>
        </div>
        <div className="authority-cover"><Image src="/services/ai-authority-audit.jpg" alt="AI Authority Audit cover showing AI answer analysis, Community Intelligence, competitor comparison, AI Authority Score, citation opportunities and a 30 day roadmap" width={1280} height={1280} priority /></div>
      </div>
    </header>

    <Section eyebrow="A new view of brand authority" title="What Is an AI Authority Audit?">
      <div className="authority-intro"><p className="lede">An AI Authority Audit is a human led investigation into how AI platforms understand, describe and recommend your brand. It connects AI answers to the public evidence, competitor positioning and community conversations that help shape them.</p><p>Instead of reporting only whether your brand appears, the audit explains the beliefs and evidence behind the answer, where competitors have stronger authority and what your team can do next.</p></div>
    </Section>

    <Section eyebrow="The customer journey has changed" title="Why AI Recommendations Matter" className="alt">
      <div className="authority-reasons"><article><strong>Answers come before visits</strong><p>Customers can form a shortlist, compare providers and reject a brand without visiting its website.</p></article><article><strong>Reputation travels across sources</strong><p>AI answers can reflect reviews, expert content, community discussion and repeated market beliefs.</p></article><article><strong>Evidence creates authority</strong><p>Clear, credible and consistent evidence gives AI systems more reason to understand and surface a brand accurately.</p></article></div>
    </Section>

    <Section eyebrow="The evidence behind the answer" title="What We Analyse" intro="We connect AI outputs with the market evidence and public conversations that make those outputs possible.">
      <div className="authority-grid">{analysed.map(([title, description], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
    </Section>

    <Section eyebrow="A decision ready audit" title="What You Receive" className="authority-deliverables dark">
      <div className="authority-deliverable-grid">{deliverables.map(([title, description]) => <article key={title}><span aria-hidden>✓</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
      <div className="button-row"><a className="button" href={checkout} target="_blank" rel="noopener noreferrer">Purchase the AI Authority Audit</a></div>
    </Section>

    <Section eyebrow="Built for consequential decisions" title="Who It Is For">
      <div className="authority-audiences">{audiences.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
    </Section>

    <Section eyebrow="The Community Intelligence advantage" title="Why The Redditrepreneur" className="alt">
      <div className="split authority-why"><div><p className="lede">AI authority is not created by website content alone. It is shaped by what customers believe, what communities repeat, which competitors people recommend and whether credible evidence supports the story.</p><p>The Redditrepreneur specialises in Community Intelligence: analysing public community conversations to understand customer behaviour, competitor positioning, emerging trends and market opportunities. That discipline makes the audit more than an AI visibility check. It explains the human beliefs behind machine generated answers.</p></div><div className="authority-principles"><p><strong>Community evidence</strong><span>What real people believe, recommend and decide.</span></p><p><strong>Competitive context</strong><span>Why another brand earns the answer or recommendation.</span></p><p><strong>Strategic action</strong><span>What to strengthen over the next 30 and 90 days.</span></p></div></div>
    </Section>

    <Section eyebrow="Common questions" title="AI Authority Audit FAQs">
      <div className="authority-faqs">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
    </Section>

    <section className="authority-final"><div className="shell"><p className="eyebrow">Know what AI believes before your customers ask</p><h2>Turn AI uncertainty into a clear authority roadmap.</h2><p>See how your brand is understood, where the evidence is weak and what to do next.</p><div className="button-row"><a className="button" href={checkout} target="_blank" rel="noopener noreferrer">Purchase the AI Authority Audit</a><Link className="button secondary" href="/services">View All Services</Link></div></div></section>
  </>;
}
