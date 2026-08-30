import Image from "next/image";
import Link from "next/link";
import { PublicationCard } from "@/components/PublicationCard";
import { Section } from "@/components/Sections";
import { featuredPublications } from "@/lib/publications";

const capabilities = [
  ["Editorial Intelligence", "What is happening."],
  ["Community Intelligence", "What people think."],
  ["Industry Intelligence", "Who is building the market."],
  ["Commercial Intelligence", "Where opportunities are emerging."],
];

const workAreas = [
  ["Research", "Understand a community, market, audience or opportunity."],
  ["Strategy", "Turn community intelligence into business decisions."],
  ["Community", "Build authentic presence and growth within emerging communities."],
  ["Partnerships", "Work with one of our specialist intelligence brands."],
];

export default function Home(){return <>
  <section className="hero intelligence-hero"><div className="shell"><p className="eyebrow">The Redditrepreneur</p><h1>Intelligence for emerging digital communities.</h1><p className="lede">The Redditrepreneur builds specialist intelligence brands that understand the communities, industries and economies shaping what comes next.</p><div className="button-row"><a className="button" href="#brands">Explore our brands</a></div></div></section>

  <Section id="brands" eyebrow="Our portfolio" title="Our intelligence brands" intro="Each brand focuses deeply on a specific emerging digital ecosystem."><div className="intelligence-brand-grid">{featuredPublications.map(publication=><PublicationCard key={publication.slug} publication={publication}/>)}</div><article className="future-brand"><p className="eyebrow">The portfolio grows with the opportunity</p><h3>More communities are coming.</h3><p>We launch new intelligence brands where emerging digital communities are creating meaningful industries, behaviours and business opportunities.</p></article></Section>

  <Section eyebrow="Our thesis" title="We go where communities become industries." className="alt"><div className="thesis-copy"><p>Online communities increasingly develop their own economies, careers, businesses, technologies and cultures.</p><p>The Redditrepreneur identifies these ecosystems early and builds dedicated intelligence brands to understand them.</p></div><div className="capability-grid">{capabilities.map(([title,description],index)=><article key={title}><span aria-hidden>0{index+1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></Section>

  <Section eyebrow="Our methodology" title="We start with communities." intro="Traditional business intelligence often starts with companies and markets. We start with the people creating them."><div className="narrow-copy"><p>Community Intelligence studies public conversations, behaviours, beliefs and emerging signals to understand where digital communities are heading and what businesses should pay attention to.</p><div className="button-row"><Link className="button secondary" href="/community-intelligence">Learn about Community Intelligence</Link></div></div></Section>

  <Section id="work-with-us" eyebrow="Commercial capability" title="Work with us" intro="We work with companies that want to understand, enter or grow within the digital communities covered by our intelligence brands." className="alt"><div className="work-grid">{workAreas.map(([title,description])=><article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div><div className="button-row"><Link className="button" href="/contact">Start a conversation</Link></div></Section>

  <Section eyebrow="Founder" title="Built from inside online communities."><div className="founder-compact"><Image className="founder" src="/founder/tonte-bo-douglas.jpg" alt="Tonte Bo Douglas, founder of The Redditrepreneur" width={400} height={400}/><div className="prose"><p>The Redditrepreneur was founded by Tonte Bo Douglas, whose understanding of digital communities comes from direct experience working at Reddit and building Reddit and community presences for brands including Greggs, Expedia, Vrbo and Hotels.com.</p><p>That practical experience now informs how The Redditrepreneur identifies emerging ecosystems and builds intelligence brands around them.</p><Link className="text-link" href="/about">About The Redditrepreneur <span aria-hidden>→</span></Link></div></div></Section>

  <Section title="The next major industry might already be a community." intro="We exist to understand it early." className="dark final-intelligence-cta"><div className="button-row"><a className="button" href="#brands">Explore our brands</a></div></Section>
  </>}
