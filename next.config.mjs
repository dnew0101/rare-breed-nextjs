import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})({
    output: 'export',
    images: {
        unoptimized: true, //delete during production build
    },
    productionBrowserSourceMaps: true, //Lighthouse suggested this
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(test|spec)\.(js|jsx|ts|tsx)$/,
            loader: 'ignore-loader',
        });

        return config;
    }
});

export default nextConfig;