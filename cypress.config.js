const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// cypress.config.js
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      email: 'enter email',
      password: 'enter password',
      searchTerm: 'ml engineer', 
      location: 'united states'    
    }
  }
}
