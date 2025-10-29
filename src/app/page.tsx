import Schema from "@/components/seo/Schema";
import HeroSection from "@/components/home/HeroSection";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhyUs from "@/components/home/WhyUs";
import FullScreenHero from "@/components/home/FullScreenHero";
import AllinialGlobal from "@/components/home/AllinialGlobal";
import SustainableSection from "@/components/home/SustainableSection";
import WeKnowHow from "@/components/home/WeKnowHow";

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dmfinans.com.tr";
  
  return (
    <>
      <Schema type="WebSite" id="schema-website" data={{
        name: "DMFinans", url: siteUrl,
        potentialAction:{ "@type":"SearchAction", target:`${siteUrl}/search?q={query}`, "query-input":"required name=query" }
      }} />
      <Schema type="Organization" id="schema-org" data={{ name:"DMFinans", url:siteUrl, logo:`${siteUrl}/logo.png` }} />

          <HeroSection/>
          <SustainableSection/>
          <WhatWeDo/>
          <AllinialGlobal/>
          <FullScreenHero/>
          <WhyUs/>
          <WeKnowHow/>
    </>
  );
}