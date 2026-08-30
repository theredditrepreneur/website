import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Sections";

export const metadata:Metadata={title:"Tonte Bo Douglas, Founder",description:"Meet Tonte Bo Douglas, founder of The Redditrepreneur and its portfolio of intelligence brands.",alternates:{canonical:"/founder"}};

export default function Page(){return <><header className="page-hero"><div className="shell founder-compact"><div><p className="eyebrow">Founder</p><h1>Tonte Bo Douglas</h1><p className="lede">Founder of The Redditrepreneur, an intelligence company for emerging digital communities.</p><div className="button-row"><a className="button" href="https://www.linkedin.com/in/tontebodouglas" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a></div></div><Image className="founder" src="/founder/tonte-bo-douglas.jpg" alt="Tonte Bo Douglas" width={400} height={400}/></div></header><Section title="Built from inside online communities"><div className="narrow-copy"><p>Tonte’s experience includes working directly at Reddit and building Reddit and community presences for Greggs, Expedia, Vrbo and Hotels.com.</p><p>He founded The Redditrepreneur to identify digital communities becoming meaningful industries and build specialist intelligence brands around them.</p><p>The Bloxline and The CHNNL are the first brands in that portfolio.</p></div><div className="button-row"><Link className="button secondary" href="/#brands">Explore our brands</Link></div></Section></>}
