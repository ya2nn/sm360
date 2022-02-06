const paths = require('./paths')
const Dotenv = require('dotenv-webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const token =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNpZy1ycy0wIn0.eyJzdWIiOiIxNjM0Iiwibm9uY2UiOiIwODU3YmVlZGQ0MGQ0ZWE2OTZlYWY2NmUzNzhlMjFjNyIsImF0X2hhc2giOiJGUllvNHc3ZGI3aWV2Vk9kQzdpZjZBIiwic19oYXNoIjoiNnVBb0hxSFRKNERLcFhDQXZNVjItZyIsImF1ZCI6ImNybVBybyIsImV4cCI6MTY0NTIyMTc4MiwiaWF0IjoxNjQ0MDEyMTgyLCJpc3MiOiJodHRwczovL3NlcnZpY2UtYXV0aGVudGljYXRpb24uc20zNjAuY2EifQ.TmEE97CjEiTqNfl5V7IF0xXUXOQQFPGf-CQ80OzbxWSRPXI5f6vZoINqUEoMLSvq72whl2VB2cs70ZgSyNcU0c7TJR6cp3lZfDLrrg56ohqQx4_0ShbUpwHcEjrBZyPIPZWNNcMvjhvvNB5tMOcbkOie0b3kROtnaI_JLc-QEEK2fGhsVKUCScWy_2CTT_501o7jQezOqV4sKmwZTH_y5npFfqsFT8VQr3FDjv3Si-6LcwziRP87fKOmMQkVZdO3kvNJA7iUroSQSbtnFVsZYs8trxDKwg0Dqihk0KADtBppTCjmtCpyvfMfhYlzTngOUWVu796iC6-R_2pNAB5MvQ'

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',
  watchOptions: {
    ignored: '**/node_modules',
  },
  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    static: paths.build,
    open: false,
    compress: true,
    hot: true,
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },

    proxy: {
      '/websites/3371': {
        target: 'https://website-api.sm360.ca',
        secure: false,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        changeOrigin: true,
      },
      '/promotions': {
        target: 'https://service.promotions.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
      '/en/api/vehicleinventory/filters/new-inventory': {
        target: 'https://www.designsystem.genesis.preprod.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
      '/en/new-inventory/api/listing': {
        target: 'https://www.designsystem.genesis.preprod.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
      '/en/for-sale/car/api/hubs/list/new': {
        target: 'https://www.designsystem.genesis.preprod.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
      '/en/api/vehicleinventory/filters/demo-inventory': {
        target: 'https://www.designsystem.genesis.preprod.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
      '/en/demo-inventory/api/listing': {
        target: 'https://www.designsystem.genesis.preprod.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
      '/en/for-sale/car/api/hubs/list/demo': {
        target: 'https://www.designsystem.genesis.preprod.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
      '/en/api/vehicleinventory/filters/all-inventory': {
        target: 'https://www.designsystem.genesis.preprod.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
      '/en/all-inventory/api/listing': {
        target: 'https://www.designsystem.genesis.preprod.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
      '/en/for-sale/car/api/hubs/list/all': {
        target: 'https://www.designsystem.genesis.preprod.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
      '/en/api/vehicleinventory/filters/certified-inventory': {
        target: 'https://www.designsystem.genesis.preprod.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
      '/en/certified-inventory/api/listing': {
        target: 'https://www.designsystem.genesis.preprod.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
      '/en/for-sale/car/api/hubs/list/certified': {
        target: 'https://www.designsystem.genesis.preprod.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
      '/en/api/vehicleinventory/filters/used-inventory': {
        target: 'https://www.designsystem.genesis.preprod.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
      '/en/used-inventory/api/listing': {
        target: 'https://www.designsystem.genesis.preprod.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
      '/en/for-sale/car/api/hubs/list/used': {
        target: 'https://www.designsystem.genesis.preprod.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
      '/en/api/vehicleinventory/filters/liquidation-inventory': {
        target: 'https://www.designsystem.genesis.preprod.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
      '/en/liquidation-inventory/api/listing': {
        target: 'https://www.designsystem.genesis.preprod.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
      '/en/for-sale/car/api/hubs/list/liquidation': {
        target: 'https://www.designsystem.genesis.preprod.sm360.ca',
        secure: false,
        changeOrigin: true,
      },
    },
  },

  module: {
    rules: [
      // ... other rules
      {
        test: /\.[js]sx?$/,
        exclude: /node_modules/,
        use: [
          // ... other loaders
          {
            loader: require.resolve('babel-loader'),
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './.env.development',
    }),
  ].filter(Boolean),
})
