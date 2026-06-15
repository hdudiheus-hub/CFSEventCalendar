const isGitHubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGitHubPages
    ? {
        basePath: '/CFSEventCalendar',
        assetPrefix: '/CFSEventCalendar/',
      }
    : {}),
};

export default nextConfig;
