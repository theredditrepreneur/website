"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["Brands", "/#brands"],
  ["Community Intelligence", "/community-intelligence"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function Header(){
  const [open,setOpen]=useState(false);
  const pathname=usePathname();
  useEffect(()=>setOpen(false),[pathname]);
  return <header className="site-header"><a className="skip" href="#main">Skip to content</a><div className="shell nav"><Link href="/" className="brand" onClick={()=>setOpen(false)}><Image src="/brand/redditrepreneur-logo.png" alt="The Redditrepreneur" width={88} height={88} priority/></Link><nav aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav><button className="mobile-menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(value=>!value)}><span aria-hidden>{open?"×":"☰"}</span> Menu</button>{open&&<nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</nav>}</div></header>;
}
