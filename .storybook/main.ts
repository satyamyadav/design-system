import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: [
    '../core/components/**/*.story.@(js|jsx|ts|tsx)', 
    '../core/ai-components/**/*.story.@(js|jsx|ts|tsx)', 
    '../stories/**/*.mdx',
  ],
  
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],

  framework: '@storybook/react-vite',

  async viteFinal(config, options) {
    if (!config) return config;

    // Add path aliases
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, '../core'),
      '@css': path.resolve(__dirname, '../css/src'),
      '@innovaccer/mds-images/ui-states': path.resolve(__dirname, '../mds-images/ui-states'),
    };

    // Add file extensions (Vite handles .ts and .tsx by default, but we ensure they're included)
    if (!config.resolve.extensions) {
      config.resolve.extensions = ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'];
    }

    return config;
  },
};

export default config;