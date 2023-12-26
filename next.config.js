/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: ''
}

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  ...nextConfig,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: 'node_modules/pdfjs-dist/build/pdf.worker.min.mjs',
              to: 'static/[name].[ext]',
            },
          ],
        })
      );
    }
    return config;
  },
};


