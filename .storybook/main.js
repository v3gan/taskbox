/** @type { import('@storybook/svelte-vite').StorybookConfig } */
const config = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/svelte-vite",
    options: {},
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  }
};
export default config;
