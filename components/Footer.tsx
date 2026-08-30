import Image from "next/image";
import Link from "next/link";
import { bloxline, chnnl } from "@/lib/publications";

const links=[["Brands","/#brands"],["Community Intelligence","/community-intelligence"],["About","/about"],["Contact","/contact"]] as const;
import { bloxline } from "@/lib/publications";

const groups=[
  ["Publications",[["All publications","/publications"],["The Bloxline",bloxline.url],["Research","https://blog.theredditrepreneur.com"],["Industries","/#industries"],["Frameworks","https://blog.theredditrepreneur.com/frameworks"]]],
  ["Work with us",[["Services","/services"],["Community Intelligence Audit","/services/community-intelligence-audit"],["AI Authority Audit","/services/ai-authority-audit"],["Software","/platform"],["Software pricing","https://app.theredditrepreneur.com/pricing"]]],
  ["Company",[["About","/about"],["Founder","/founder"],["Contact","/contact"],["Brand engagement","/brands-engaging-with-community-intelligence"],["Privacy","/privacy"],["Cookies","/cookies"],["Terms","/terms"]]],
] as const;

const socials=[
  {label:"LinkedIn",href:"https://www.linkedin.com/company/the-redditrepreneur/",icon:<><rect x="3" y="9" width="4" height="12"/><circle cx="5" cy="5" r="2"/><path d="M11 21V9h4v2c1-2 6-3 6 4v6h-4v-6c0-2-2-3-3-1v7z"/></>},
  {label:"X",href:"https://x.com/Redditrepreneur",icon:<path d="M4 3l16 18M20 3L4 21"/>},
  {label:"YouTube",href:"https://www.youtube.com/@theredditrepreneur",icon:<><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l6 3-6 3z"/></>},
  {label:"Instagram",href:"https://www.instagram.com/theredditrepreneur/",icon:<><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></>},
] as const;

export function Footer(){return <footer><div className="shell intelligence-footer"><div className="footer-statement"><Image src="/brand/redditrepreneur-logo.png" alt="The Redditrepreneur" width={130} height={130}/><p><strong>Intelligence for emerging digital communities.</strong></p><p>We build specialist intelligence brands where communities become industries.</p></div><div><h2>Explore</h2>{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</div><div><h2>Our brands</h2><a href={bloxline.url} target="_blank" rel="noopener noreferrer">The Bloxline</a><a href={chnnl.url} target="_blank" rel="noopener noreferrer">The CHNNL</a><Link href="/publications">All intelligence brands</Link></div><div><h2>Company</h2><Link href="/privacy">Privacy</Link><Link href="/cookies">Cookies</Link><Link href="/terms">Terms</Link></div></div><div className="shell legal"><span>© {new Date().getFullYear()} The Redditrepreneur</span><div className="social-icons">{socials.map(item=><a key={item.label} href={item.href} aria-label={item.label} title={item.label} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true">{item.icon}</svg></a>)}</div></div></footer>}
export function Footer(){return <footer><div className="shell footer-grid"><div><Image src="/brand/redditrepreneur-logo.png" alt="The Redditrepreneur" width={150} height={150}/><p><strong>Community Intelligence for the world’s most important industries.</strong></p><p>The Redditrepreneur publishes research that helps businesses understand what online communities really think.</p><p className="footer-publication-note"><a href={bloxline.url} target="_blank" rel="noopener noreferrer">The Bloxline</a> is a specialist publication from The Redditrepreneur.</p></div>{groups.map(([name,links])=><div key={name}><h2>{name}</h2>{links.map(([label,href])=>href.startsWith("http")?<a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>:<Link key={label} href={href}>{label}</Link>)}</div>)}</div><div className="shell legal"><span>© {new Date().getFullYear()} The Redditrepreneur</span><div className="social-icons">{socials.map(item=><a key={item.label} href={item.href} aria-label={item.label} title={item.label} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true">{item.icon}</svg></a>)}</div></div></footer>}
