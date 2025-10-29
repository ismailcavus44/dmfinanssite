export async function GET() {
  const body = `User-agent: *
Allow: /
Sitemap: https://www.dmfinans.com.tr/sitemap.xml`;
  return new Response(body, { headers: { "content-type": "text/plain" } });
}




