describe('Testes de UI no site The Internet by Herokuapp', () => {

  it('Deve manipular checkboxes corretamente', () => {
    cy.navigateToExample('Checkboxes');

    cy.get('input[type="checkbox"]').first().should('not.be.checked');
    cy.get('input[type="checkbox"]').last().should('be.checked');

    cy.get('input[type="checkbox"]').first().check().should('be.checked');

    cy.get('input[type="checkbox"]').last().uncheck().should('not.be.checked');
  });

  it('Deve realizar a ação de arrastar e soltar (Drag and Drop)', () => {
    cy.navigateToExample('Drag and Drop');
    cy.get('#column-a header').should('have.text', 'A');
    cy.get('#column-b header').should('have.text', 'B');

    cy.get('#column-a').drag('#column-b');

    cy.get('#column-a header').should('have.text', 'B');
    cy.get('#column-b header').should('have.text', 'A');
  });

  it('Deve exibir e depois fechar uma mensagem de notificação (Cenário Negativo)', () => {
    cy.navigateToExample('Notification Messages');

    cy.contains('Click here').click();

    cy.get('#flash').should('be.visible').and('contain.text', 'Action successful');

    cy.get('.close').click();

    cy.get('#flash').should('not.exist');
  });

});