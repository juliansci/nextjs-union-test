const withSourceMaps = require('@zeit/next-source-maps');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CSSModuleRule } = require('@xo-union/util-webpack');
const { createSecureHeaders } = require('next-secure-headers');
const nodeExternals = require('webpack-node-externals')

const configs = {
  webpack(config, { isServer, dev }) {
    if (isServer) {
      config.externals = [
        nodeExternals({
          allowlist: [/^@xo-union/, /^@babel\/runtime-corejs3\/helpers\/esm\//],
        }),
      ];
    }
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'static/[name].css',
      })
    );
    config.module.rules.push(
      {
        test: /\.s?css$/,
        issuer: /\.(tsx?|jsx?)$/,
        use: MiniCssExtractPlugin.loader,
      },
      CSSModuleRule()
    );

    config.module.rules.push({
      test: /\.scss$/,
      use: 'sass-loader',
    });

    config.resolve.extensions = [...new Set(['.mjs', ...config.resolve.extensions])];

    return config;
  },
  async headers() {
    return [{ source: '/(.*)', headers: createSecureHeaders() }];
  },
  poweredByHeader: false,
};

module.exports = withSourceMaps(configs);
