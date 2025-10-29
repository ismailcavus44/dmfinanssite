"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function Breadcrumbs() {
  const path = usePathname();
  const segments = path.split("/").filter(Boolean);
  const items = [{ name: "Anasayfa", href: "/" }, ...segments.map((s, i) => ({
    name: s === "hakkimizda" ? "Hakkımızda" : s === "hizmetlerimiz" ? "Hizmetlerimiz" : s === "iletisim" ? "İletişim" : s,
    href: "/" + segments.slice(0, i + 1).join("/")
  }))];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dmfinans.com.tr"}${item.href}`
    }))
  };

  return (
    <div className="text-sm text-gray-600 mb-6">
      <Script id="breadcrumbs-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>
      {items.map((item, idx) => (
        <span key={item.href}>
          <Link href={item.href} className="no-underline hover:text-primary-700">{item.name}</Link>
          {idx < items.length - 1 && <span className="mx-2 text-gray-400">/</span>}
        </span>
      ))}
    </div>
  );
}




