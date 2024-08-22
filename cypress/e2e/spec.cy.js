describe('Dice Job Search', () => {
  beforeEach(() => {
    cy.session('loginSession', () => {
      cy.visit('https://www.dice.com/dashboard/login');

      cy.get('input[placeholder="Please enter your email"]', { timeout: 30000 })
        .clear()
        .type('innovapathipsri@gmail.com{enter}');

      cy.get('input[placeholder="Enter Password"]', { timeout: 30000 })
        .clear()
        .type('Innovapath@71{enter}');

      cy.url({ timeout: 30000 }).should('include', '/home/home-feed');
    });
  });

  it('Search for a Job and Visit Job Detail Page', () => {
    cy.visit('https://www.dice.com/home/home-feed');

    // Use environment variables for search term and location
    const searchTerm = Cypress.env('searchTerm');
    const location = Cypress.env('location');

    cy.get('input[placeholder="Search Term"]', { timeout: 30000 })
      .clear()
      .type(`${searchTerm}`);

    cy.get('input[placeholder="Search Location"]', { timeout: 30000 })
      .clear()
      .type(`${location}{enter}`);

    cy.get('button[id="submitSearch-button"]', { timeout: 30000 })
      .click();

    // Wait for results to load
    cy.wait(5000);

    // Ensure there are job elements to interact with
    cy.get('.card-title-link.normal', { timeout: 30000 }).then($els => {
      if ($els.length === 0) {
        throw new Error('No job elements found');
      }
    });

    // Click on the first job element
    cy.get('.card-title-link.normal').first().scrollIntoView().click({ force: true });

    cy.wait(5000); // Adjust if necessary

    // Check for the #descriptionToggle element
    cy.get('#descriptionToggle').click();
  });
});
