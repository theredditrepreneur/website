import type { Metadata } from "next";
import Link from "next/link";
import { PublicationCard } from "@/components/PublicationCard";
import { Section } from "@/components/Sections";
import { publications, bloxline } from "@/lib/publications";
import { site } from "@/lib/site";

export const metadata:Metadata={
  title:"Publications",
  description:"Explore specialist publications from The Redditrepreneur, including The Bloxline, The Adult’s Guide to Roblox.",
  alternates:{canonical:"/publications"},
  openGraph:{title:"Specialist Publications from The Redditrepreneur",description:"The Redditrepreneur creates focused publications that help adults and professionals understand important online communities and industries.",url:"/publications",images:[{url:"/brand/redditrepreneur-logo.png",width:1024,height:1024,alt:"The Redditrepreneur"}]},
  twitter:{card:"summary_large_image",title:"Specialist Publications from The Redditrepreneur",description:"Focused publications for understanding important online communities and industries.",images:["/brand/redditrepreneur-logo.png"]},
};

export default function PublicationsPage(){
  const canonical=`${site.url}/publications`;
  const schema={"@context":"https://schema.org","@graph":[{"@type":"CollectionPage","@id":canonical,name:"Publications from The Redditrepreneur",url:canonical,description:"Specialist publications created by The Redditrepreneur.",hasPart:publications.map(publication=>({"@type":"Periodical",name:publication.name,description:publication.description,url:publication.url,publisher:{"@id":`${site.url}/#organisation`}}))},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:site.url},{"@type":"ListItem",position:2,name:"Publications",item:canonical}]}]};
  return <>
    <header className="page-hero publications-hero"><div className="shell"><p className="eyebrow">Our publishing ecosystem</p><h1>Publications from The Redditrepreneur</h1><p className="lede">The Redditrepreneur publishes Community Intelligence across major industries and builds specialist publications for audiences that need deeper, more focused understanding.</p><p className="lede">Our publications are designed to become trusted destinations in the communities they cover.</p></div></header>
    <Section eyebrow="Our first specialist publication" title="The Bloxline"><PublicationCard publication={bloxline} secondaryHref="#community-intelligence-in-practice"/></Section>
    <Section eyebrow="Focused publishing" title="Why we build specialist publications" className="alt"><div className="prose"><p>Some communities and industries are too important to understand only through occasional articles.</p><p>Specialist publications allow us to build deeper knowledge, stronger archives and more useful resources for the people who need them.</p><p>The Bloxline is our first publication built around this approach.</p></div></Section>
    <Section id="community-intelligence-in-practice" eyebrow="The research connection" title="Community Intelligence in practice"><div className="prose"><p>The Bloxline is a live example of how The Redditrepreneur applies research and publishing to a specific online ecosystem.</p><p>It studies the games, businesses, creators, parents, teachers and communities surrounding Roblox, then explains what those developments mean in plain English.</p><p>This turns broad Community Intelligence principles into focused, useful industry knowledge.</p><div className="button-row"><a className="button bloxline-button" href={bloxline.url} target="_blank" rel="noopener noreferrer">Explore The Bloxline <span aria-hidden>↗</span></a></div></div></Section>
    <Section eyebrow="Publication profile" title="The Bloxline: Building The Adult’s Guide to Roblox" className="alt"><p className="lede">The Bloxline is an independent specialist publication created by The Redditrepreneur to help adults understand Roblox.</p><div className="publication-profile-grid"><article><h3>The opportunity</h3><p>Roblox is a major part of children’s digital lives and a growing business ecosystem, but much of the available content is created for players rather than adults.</p></article><article><h3>The audience</h3><p>Parents, teachers, schools, studios, brands, journalists, investors, recruiters and adults who play Roblox.</p></article><article><h3>The editorial approach</h3><p>Clear explanations, evergreen guides, industry analysis, game context, studio coverage, education and safety.</p></article><article><h3>The long term vision</h3><p>Deeper research, jobs, studio directories, reports, membership and practical industry resources.</p></article></div></Section>
    <Section eyebrow="For organisations" title="Working in the Roblox ecosystem?" intro="The Bloxline explains the Roblox ecosystem publicly. The Redditrepreneur helps organisations understand what their own communities believe, question and want next." className="dark"><div className="button-row"><Link className="button" href="/services">Explore Community Intelligence services</Link></div></Section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </>;
}
