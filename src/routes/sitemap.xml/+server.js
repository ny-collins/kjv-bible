import { books } from '$lib/data/Books.json';

export async function GET() {
  const headers = { 'Content-Type': 'application/xml' };
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add main page
  xml += `
  <url>
    <loc>https://kjv-bible-7mw.pages.dev/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`;

  // Add book pages
  for (const book of books) {
    xml += `
  <url>
    <loc>https://kjv-bible-7mw.pages.dev/book/${book}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;

    // Add chapter pages
    const bookModule = await import(`$lib/data/${book}.json`);
    const bookData = bookModule.default;
    for (const chapter of bookData.chapters) {
      xml += `
  <url>
    <loc>https://kjv-bible-7mw.pages.dev/book/${book}/${chapter.chapter}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>`;
    }
  }

  xml += `
</urlset>`;

  return new Response(xml, { headers });
}