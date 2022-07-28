// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   projectId: 'e6kf48',
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       specPattern: "cypress/e2e/features/*.feature",
//       config.defaultCommandTimeout = 10000
//       config.baseUrl = 'https://apply.homage.sg/'
//     },
//   },
// });



const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://apply.homage.sg/",
    chromeWebSecurity: false,
  },
});