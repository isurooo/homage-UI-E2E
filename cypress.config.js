const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.defaultCommandTimeout = 10000
      config.baseUrl = 'https://apply.homage.sg/'
      watchForFileChanges = false
      screenshotOnRunFailure = true
    },
  },
});
