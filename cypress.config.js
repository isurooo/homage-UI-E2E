const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "e6kf48",
  e2e: {

      // implement node event listeners here
      baseUrl: 'https://apply.homage.sg/'
    },
});
