describe('testes de ui no the-internet', () => {
  it('deve checar as checkbox corretamente', () => {
    cy.navigateToExample('Checkboxes');

    cy.get('input[type="checkbox"]').first().should('not.be.checked');
    cy.get('input[type="checkbox"]').last().should('be.checked');

    cy.get('input[type="checkbox"]').first().check().should('be.checked');
    cy.get('input[type="checkbox"]').last().uncheck().should('not.be.checked');
  });

  it('deve fazer o drag n drop corretamente', () => {
    cy.navigateToExample('Drag and Drop');

    const dataTransfer = new DataTransfer();
    cy.get('#column-a').trigger('dragstart', { dataTransfer });
    cy.get('#column-b').trigger('drop', { dataTransfer });

    cy.get('#column-a header').should('have.text', 'B');
    cy.get('#column-b header').should('have.text', 'A');
  });

  it('exibir e fechar uma notificação (cenário negativo)', () => {
    cy.navigateToExample('Notification Messages');
    cy.contains('Click here').click();

    cy.get('#flash').should('be.visible').and('contain.text', 'Action');
    cy.get('.close').click({ force: true });
    cy.get('#flash').should('not.exist');
  });

  it('deve selecionar uma opção no dropdown e validar o valor', () => {
    cy.navigateToExample('Dropdown');

    cy.get('#dropdown').should('have.value', null);

    cy.get('#dropdown').select('2').should('have.value', '2');

    cy.get('#dropdown').select('Option 1').should('have.value', '1');
  });

  it('deve esperar o elemento renderizar a validar o conteudo', () => {
    cy.navigateToExample('Dynamic Loading');
    cy.contains('Example 2').click(); 

    cy.get('#finish').should('not.exist');
    cy.get('#start button').click();
    cy.get('#finish h4', { timeout: 10000 })
      .should('be.visible')
      .and('have.text', 'Hello World!');
  });

  it('ao passar mouse sobre imagem deve mostrar informações', () => {
    cy.navigateToExample('Hovers');
    cy.get('.figure').first().as('userCard');
    cy.get('@userCard').find('.figcaption').should('not.be.visible');
    cy.get('@userCard').find('.figcaption').invoke('show').should('be.visible');
    cy.get('@userCard').find('h5').should('contain.text', 'name: user1');
  });
});