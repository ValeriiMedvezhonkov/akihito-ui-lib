// module.exports = {
//   stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
//   addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
//   // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
//   typescript: {
//     check: true, // type-check stories during Storybook build
//   }
// };

import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
  // stories: [
    // '../stories/**/*.stories.@(ts|tsx|js|jsx)',
    // '../src/**/*.mdx',
    // '../src/**/*.stories.@(js|jsx|ts|tsx)'
  // ],
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: true,
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;