const urls = ["", "/hakkimizda", "/hizmetlerimiz", "/iletisim"];
const base = "https://www.dmfinans.com.tr";

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(u => `<url><loc>${base}${u}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`).join("")}
  </urlset>`;
  return new Response(xml, { headers: { "content-type": "application/xml" } });
}




