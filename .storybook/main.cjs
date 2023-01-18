const {TsconfigPathsPlugin} = require('tsconfig-paths-webpack-plugin')

module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    
    // Simplification for component based stories
    // So `stories.*` files will be reserved for storybook
    '../src/components/**/stories.mdx',
    '../src/components/**/stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss'
  ],
  'framework': '@storybook/react',
  'core': {
    'builder': '@storybook/builder-vite'
  },
  'features': {
    'storyStoreV7': true
  },
  webpackFinal: async (config) => {
    // Add path aliases from tsconfig.json
    [].push.apply(config.resolve.plugins, [
      new TsconfigPathsPlugin({extensions: config.resolve.extensions})
    ])
    
    return config
  }
}