"use client";

import Link from "next/link";
import { useEffect } from "react";

export function FractionalPageView(){
  useEffect(()=>{window.dispatchEvent(new CustomEvent("redditrepreneur:analytics",{detail:{event:"fractional_cci_page_viewed"}}));},[]);
  return null;
}

export function TrackedLink({href,eventName,className,children}:{href:string;eventName:string;className?:string;children:React.ReactNode}){
  return <Link href={href} className={className} onClick={()=>window.dispatchEvent(new CustomEvent("redditrepreneur:analytics",{detail:{event:eventName}}))}>{children}</Link>;
}
