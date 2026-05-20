const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.nationaltruckschool.com'
      }
    ]
  },
  async redirects() {
    return [
      { source: '/training-programs', destination: '/programs', permanent: true },
      { source: '/training-programs/', destination: '/programs', permanent: true },
      { source: '/tips-for-students', destination: '/student-tips', permanent: true },
      { source: '/tips-for-students/', destination: '/student-tips', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/contact-us/', destination: '/contact', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/about-us/', destination: '/about', permanent: true }
    ];
  }
};

module.exports = withNextIntl(nextConfig);
