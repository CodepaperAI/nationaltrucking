import type { MetadataRoute } from 'next';
import { seoPages } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nationaltruckschool.com';
  const paths = [
    ...Object.values(seoPages).map((page) => page.path),
    '/es',
    '/privacy-policy',
    '/site-map',
    '/accessibility-statement'
  ];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7
  }));
}
