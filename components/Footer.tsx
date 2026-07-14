import Image from "next/image"; import Link from "next/link"; import { fractionalCci } from "@/lib/fractional-cci";
const groups=[
 ["Platform",[["Overview","/platform"],["Analyse","/platform/analyse"],["Discover","/platform/discover"],["Alerts","/platform/alerts"],["Pricing","https://app.theredditrepreneur.com/pricing"]]],
 ["Research",[["Research hub","/research"],["Brand Engagement","/brands-engaging-with-community-intelligence"],["Blog","https://blog.theredditrepreneur.com"],["Knowledge base","https://research.theredditrepreneur.com"],["Glossary","https://blog.theredditrepreneur.com/glossary/"],["Weekly","https://theredditrepreneur.substack.com/"]]],
 ["Services",[[fractionalCci.navigationLabel,`/services/${fractionalCci.slug}`],["AI Authority Audit","/services/ai-authority-audit"],["Community Intelligence Audit","/services/community-intelligence-audit"],["Consulting","/services/community-intelligence-consulting"],["All services","/services"]]],
 ["Company",[["About","/about"],["Founder","/founder"],["Contact","/contact"],["Privacy","/privacy"],["Cookies","/cookies"],["Terms","/terms"]]],
] as const;
const socials=[
  {label:"LinkedIn",href:"https://www.linkedin.com/company/the-redditrepreneur/",icon:<><rect x="3" y="9" width="4" height="12"/><circle cx="5" cy="5" r="2"/><path d="M11 21V9h4v2c1-2 6-3 6 4v6h-4v-6c0-2-2-3-3-1v7z"/></>},
  {label:"X",href:"https://x.com/Redditrepreneur",icon:<path d="M4 3l16 18M20 3L4 21"/>},
  {label:"YouTube",href:"https://www.youtube.com/@theredditrepreneur",icon:<><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l6 3-6 3z"/></>},
  {label:"Facebook",href:"https://www.facebook.com/profile.php?id=61591573800978",icon:<path d="M14 8h4V4h-4c-4 0-6 2-6 6v3H5v4h3v5h5v-5h4l1-4h-5v-3c0-1 0-2 1-2z"/>},
  {label:"Instagram",href:"https://www.instagram.com/theredditrepreneur/",icon:<><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></>},
  {label:"TikTok",href:"https://www.tiktok.com/@redditrepreneur",icon:<path d="M15 3v11a5 5 0 1 1-4-5v4a2 2 0 1 0 1 2V3h3c1 3 3 4 6 4v4c-2 0-4-1-6-2"/>},
] as const;
export function Footer(){return <footer><div className="shell footer-grid"><div><Image src="/brand/redditrepreneur-logo.png" alt="The Redditrepreneur" width={150} height={150}/><p><strong>The Home of Community Intelligence.</strong></p><p>The Redditrepreneur is a Community Intelligence platform and research company helping businesses understand what online communities say about their brand, competitors and market.</p></div>{groups.map(([name,links])=><div key={name}><h2>{name}</h2>{links.map(([label,href])=><Link key={label} href={href}>{label}</Link>)}</div>)}</div><div className="shell legal"><span>© {new Date().getFullYear()} The Redditrepreneur</span><div className="social-icons">{socials.map(item=><a key={item.label} href={item.href} aria-label={item.label} title={item.label} rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true">{item.icon}</svg></a>)}</div></div></footer>}
