const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--lang=en-US');
        }
        return launchOptions;
      });
    },
    baseUrl: 'https://qa-impact.github.io/'
  },
});
