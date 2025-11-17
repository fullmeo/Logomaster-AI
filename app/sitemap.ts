export default function sitemap() {
  const baseUrl = 'https://logomaster-ai.com';

  const routes = [
    '',
    '/hermetic',
    '/gallery',
    '/pricing',
    '/privacy',
    '/terms',
    '/legal',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
