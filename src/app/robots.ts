import { MetadataRoute } from 'next';

// Dynamic robots directive configuration for search engine indexing
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',       // Disallow crawling api endpoints
        '/_next/',     // Disallow crawling Next.js internal build files
        '/private/',   // Disallow crawling administrative or drafts folders
      ],
    },
    sitemap: 'https://sandeepkatariya.com/sitemap.xml',
  };
}
