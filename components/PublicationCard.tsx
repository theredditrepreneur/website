import Image from "next/image";
import type { Publication } from "@/lib/publications";

export function PublicationCard({publication}:{publication:Publication}){
  return <article className={`publication-card publication-card--${publication.accent}`}>
    <div className="publication-card-media">
      <Image src={publication.image} alt={publication.imageAlt} width={publication.imageWidth} height={publication.imageHeight} sizes="(max-width: 980px) 100vw, 50vw"/>
import Link from "next/link";
import type { Publication } from "@/lib/publications";

export function PublicationCard({publication,secondaryHref}:{publication:Publication;secondaryHref?:string}){
  return <article className="publication-card">
    <div className="publication-card-media">
      <Image src={publication.banner} alt={`${publication.name}, ${publication.tagline}`} width={2048} height={683} sizes="(max-width: 980px) 100vw, 58vw"/>
    </div>
    <div className="publication-card-body">
      <p className="publication-ownership">{publication.ownershipLine}</p>
      <div className="publication-heading"><div><h3>{publication.name}</h3><p className="publication-tagline">{publication.tagline}</p></div><span>{publication.status}</span></div>
      <p>{publication.description}</p>
      <a className={`button publication-button publication-button--${publication.accent}`} href={publication.url} target="_blank" rel="noopener noreferrer">Explore {publication.name} <span aria-hidden>↗</span></a>
      <div className="button-row">
        <a className="button bloxline-button" href={publication.url} target="_blank" rel="noopener noreferrer">Visit {publication.name} <span aria-hidden>↗</span></a>
        {secondaryHref&&<Link className="button secondary" href={secondaryHref}>Learn how it fits our research</Link>}
      </div>
    </div>
  </article>;
}
