"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { BrandEngagement } from "@/lib/brand-engagements";

function emit(event: string) {
  window.dispatchEvent(new CustomEvent("redditrepreneur:analytics", { detail: { event } }));
}

export function BrandEngagementView({ eventName }: { eventName: string }) {
  useEffect(() => emit(eventName), [eventName]);
  return null;
}

export function BrandEngagementSectionView() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        emit("brand_engagement_section_viewed");
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} aria-hidden="true" className="engagement-observer" />;
}

export function BrandEngagementCard({ item, compact = false }: { item: BrandEngagement; compact?: boolean }) {
  return <article className={`brand-engagement-card${compact ? " compact" : ""}`}>
    <div className="brand-engagement-copy">
      <div className="engagement-meta"><span>{item.brandName}</span><span>{item.platform}</span><span>{item.interactionType}</span>{item.date && <time>{item.date}</time>}</div>
      <h3>{item.headline}</h3>
      <p>{item.context}</p>
      <p className="engagement-disclosure">{item.disclosure}</p>
      {(item.publicInteractionUrl || item.relatedContentUrl) && <div className="button-row">
        {item.publicInteractionUrl && <a className="text-link" href={item.publicInteractionUrl} onClick={() => emit("brand_engagement_item_clicked")}>View the public interaction</a>}
        {item.relatedContentUrl && <a className="text-link" href={item.relatedContentUrl} onClick={() => emit("brand_engagement_item_clicked")}>Read the related Scorecard</a>}
      </div>}
    </div>
    <div className="brand-engagement-image"><Image src={item.screenshot} alt={item.screenshotAlt} width={1170} height={538} sizes="(max-width: 980px) calc(100vw - 44px), 55vw" /></div>
  </article>;
}

export function EngagementCta({ href, eventName, className, children }: { href: string; eventName: string; className: string; children: React.ReactNode }) {
  return <Link href={href} className={`${className} engagement-cta`} onClick={() => emit(eventName)}>{children}</Link>;
}
