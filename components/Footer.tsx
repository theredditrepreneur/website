import Image from "next/image";
import Link from "next/link";
import { bloxline, chnnl } from "@/lib/publications";

const links=[["Brands","/#brands"],["Community Intelligence","/community-intelligence"],["About","/about"],["Contact","/contact"]] as const;
const socials=[
  {label:"LinkedIn",href:"https://www.linkedin.com/company/the-redditrepreneur/",icon:<><rect x="3" y="9" width="4" height="12"/><circle cx="5" cy="5" r="2"/><path d="M11 21V9h4v2c1-2 6-3 6 4v6h-4v-6c0-2-2-3-3-1v7z"/></>},
  {label:"X",href:"https://x.com/Redditrepreneur",icon:<path d="M4 3l16 18M20 3L4 21"/>},
  {label:"YouTube",href:"https://www.youtube.com/@theredditrepreneur",icon:<><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l6 3-6 3z"/></>},
  {label:"Instagram",href:"https://www.instagram.com/theredditrepreneur/",icon:<><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></>},
] as const;

export function Footer(){return <footer><div className="shell intelligence-footer"><div className="footer-statement"><Image src="/brand/redditrepreneur-logo.png" alt="The Redditrepreneur" width={130} height={130}/><p><strong>Intelligence for emerging digital communities.</strong></p><p>We build specialist intelligence brands where communities become industries.</p></div><div><h2>Explore</h2>{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</div><div><h2>Our brands</h2><a href={bloxline.url} target="_blank" rel="noopener noreferrer">The Bloxline</a><a href={chnnl.url} target="_blank" rel="noopener noreferrer">The CHNNL</a><Link href="/publications">All intelligence brands</Link></div><div><h2>Company</h2><Link href="/privacy">Privacy</Link><Link href="/cookies">Cookies</Link><Link href="/terms">Terms</Link></div></div><div className="shell legal"><span>© {new Date().getFullYear()} The Redditrepreneur</span><div className="social-icons">{socials.map(item=><a key={item.label} href={item.href} aria-label={item.label} title={item.label} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true">{item.icon}</svg></a>)}</div></div></footer>}
