/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    productionBrowserSourceMaps: true, //Lighthouse suggested this
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(test|spec)\.(js|jsx|ts|tsx)$/,
            loader: 'ignore-loader',
        });
        return config;
    }
};

export default nextConfig;
