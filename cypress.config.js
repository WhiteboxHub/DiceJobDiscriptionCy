const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


module.exports = {
  e2e: {
    baseUrl: 'https://www.dice.com',
    env: {
      email: 'enter email',
      password: 'enter password',
    },
  },
};


// cypress.config.js
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      searchTerm: 'Ml engineer',
      location: 'united states'
    },
  },
};
