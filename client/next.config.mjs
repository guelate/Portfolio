/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
          },
        ],
    }
};

export default nextConfig;

// hostname: 'portfoliokillian.vercel.app',