const { defineConfig } = require('cypress')


module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
  defaultCommandTimeout: 25000,
  numTestsKeptInMemory: 0,
  watchForFileChanges: false,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  fixturesFolder: 'cypress/fixture',
  viewportWidth: 1280,
  viewportHeight: 800,

  e2e: {
    experimentalRunAllSpecs: true,
    baseUrl: "https://magento.softwaretestingboard.com/customer/account/create/",

    specPattern: "cypress/tests/*.{js,jsx,ts,tsx}",
    supportFile: 'cypress/support/commands.js',
  },
})