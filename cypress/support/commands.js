Cypress.Commands.add('navigateToExample', (pageName) => {
  cy.visit('/');
  cy.contains('a', pageName).click();
});