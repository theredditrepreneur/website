import type { Metadata } from "next";
import { Section } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata:Metadata={title:"Contact",description:"Contact The Redditrepreneur about research, strategy, community work or intelligence-brand partnerships.",alternates:{canonical:"/contact"}};
const reasons=[["Research","Understand a community, market, audience or opportunity."],["Strategy","Turn Community Intelligence into business decisions."],["Community","Build an authentic presence within an emerging community."],["Partnerships","Work with The Bloxline, The CHNNL or the wider portfolio."]];

export default function Page(){return <><header className="page-hero"><div className="shell"><p className="eyebrow">Contact</p><h1>Start a conversation.</h1><p className="lede">Tell us which community, market or opportunity you are trying to understand.</p></div></header><Section title="How can we help?"><div className="work-grid">{reasons.map(([title,description])=><article key={title}><h3>{title}</h3><p>{description}</p><a className="text-link" href={`mailto:${site.email}?subject=${encodeURIComponent(title+" enquiry")}`}>Email about {title.toLowerCase()} <span aria-hidden>→</span></a></article>)}</div><div className="narrow-copy contact-note"><p>Or email <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a>.</p></div></Section></>}
