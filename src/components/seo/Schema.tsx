import Script from "next/script";

type Props = {
  type: "Organization" | "WebSite" | "ProfessionalService" | "ContactPage";
  data: Record<string, any>;
  id?: string;
};

export default function Schema({ type, data, id }: Props) {
  const jsonLd = { "@context": "https://schema.org", "@type": type, ...data };
  return <Script id={id ?? `schema-${type.toLowerCase()}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}




