import type { APIRoute } from 'astro';
import { BOOKS } from '../data/books';

const SITE = 'https://csashoponline.com';

const staticPages = [
  '/',
  '/shop/',
  '/shop/seekers/',
  '/shop/believers/',
  '/shop/kids/',
  '/about/',
  '/author/',
  '/contact/',
  '/press-kit/',
  '/shipping-returns/',
  '/privacy-policy/',
  '/terms-of-service/',
];

export const GET: APIRoute = () => {
  const bookUrls = BOOKS.map((b) => `/books/${b.slug}/`);
  const allUrls = [...staticPages, ...bookUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (path) => `  <url>
    <loc>${SITE}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : path.startsWith('/shop') || path.startsWith('/books') ? '0.9' : '0.7'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};