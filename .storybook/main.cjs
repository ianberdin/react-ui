const path = require('path')
const {mergeConfig} = require('vite')

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
  async viteFinal(config, {configType}) {
    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: "@",
            replacement: path.resolve(__dirname, "../src"),
          },
        ]
      }
    })
  }
}