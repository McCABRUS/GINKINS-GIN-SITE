import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
const baseUrl = 'https://ginkinsgin.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about-ginkins`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/our-gins`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cocktails-pairings`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/where-to-buy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/accolades`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sustainability`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/subscribe`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/retailers`,
      lastModified: new Date(),
    },
  ];
}
