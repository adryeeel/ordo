import type { NextConfig } from 'next';

const config: NextConfig = {
    typedRoutes: true,
    reactCompiler: true,
    output: 'standalone',
    transpilePackages: ['@ordo/ui'],
    allowedDevOrigins: ['192.168.1.76'],
};

export default config;
