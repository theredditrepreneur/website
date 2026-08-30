import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { publications } from "@/lib/publications";
import { site } from "@/lib/site";
import "./globals.css";
import "./polish.css";
import "./publication.css";
import "./publications.css";
import "./intelligence-company.css";
import "./authority.css";
import "./fractional.css";
import "./engagement.css";
import "./risk-audit.css";
import "./mobile-polish.css";

export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:"The Redditrepreneur | Intelligence for Emerging Digital Communities",template:"%s | The Redditrepreneur"},description:"The Redditrepreneur builds specialist intelligence brands around emerging digital communities, including The Bloxline and The CHNNL.",keywords:["emerging digital communities","intelligence brands","Community Intelligence","creator economy intelligence","Roblox business intelligence"],alternates:{canonical:"/"},openGraph:{type:"website",siteName:site.name,title:"Intelligence for Emerging Digital Communities",description:"The Redditrepreneur builds specialist intelligence brands where communities become industries.",images:[{url:"/brand/redditrepreneur-logo.png",width:1024,height:1024,alt:"The Redditrepreneur"}]},twitter:{card:"summary_large_image",title:"Intelligence for Emerging Digital Communities",description:"We go where communities become industries.",images:["/brand/redditrepreneur-logo.png"]}};

export default function RootLayout({children}:{children:React.ReactNode}){const schema={"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":`${site.url}/#organisation`,name:site.name,url:site.url,logo:`${site.url}/brand/redditrepreneur-logo.png`,description:"An intelligence company that builds specialist intelligence brands around emerging digital communities.",founder:{"@id":`${site.url}/#tonte-bo-douglas`},owns:publications.map(publication=>({"@type":"Organization",name:publication.name,url:publication.url})),sameAs:["https://www.linkedin.com/company/the-redditrepreneur/","https://x.com/Redditrepreneur","https://www.instagram.com/theredditrepreneur/"]},{"@type":"Person","@id":`${site.url}/#tonte-bo-douglas`,name:"Tonte Bo Douglas",url:`${site.url}/founder`,jobTitle:"Founder",worksFor:{"@id":`${site.url}/#organisation`}},{"@type":"WebSite","@id":`${site.url}/#website`,name:site.name,url:site.url,publisher:{"@id":`${site.url}/#organisation`}}]};return <html lang="en-GB"><body><Header/><main id="main">{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>}
