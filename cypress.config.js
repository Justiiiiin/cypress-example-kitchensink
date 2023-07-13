module.exports = {
  'projectId': '4b7344',
  e2e: {},
}

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vpad1v',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://example.cypress.io/',
    
  },
  env: {
    navbarText: 'cypress.io',
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});