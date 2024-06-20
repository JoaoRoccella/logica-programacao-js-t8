describe('Minha primeira especificação de teste', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/exercicios/exercicio1.html')
  })

  it('Visita a página index', () => {
    // cy.visit('http://localhost:3000/exercicios/exercicio1.html')
  })

  it('Calcula um triâgulo equilátero', () => {
    // cy.visit('http://localhost:3000/exercicios/exercicio1.html')
    cy.get('#ladoA').click();
    cy.get('#ladoA').type('10');
    cy.get('#ladoB').click();
    cy.get('#ladoB').type('10');
    cy.get('#ladoC').click();
    cy.get('#ladoC').type('10');
    cy.get('#btClassificar').click();
    cy.get('#resultado').should('contain', 'Equilátero');
  })


  /* ==== Test Created with Cypress Studio ==== */
  it('Botão Classificar', function() {
    /* ==== Generated with Cypress Studio ==== */
    // cy.visit('http://localhost:3000/exercicios/exercicio1.html');
    cy.get('#btLimpar').click();
    cy.get('#btClassificar').should('have.text', 'Classificar');
    cy.get('#btClassificar').should('have.id', 'btClassificar');
    cy.get('#btClassificar').should('have.class', 'acao-positiva');
    cy.get('#btClassificar').should('have.attr', 'type', 'button');
    cy.get('#btClassificar').should('be.visible');
    cy.get('#btClassificar').should('be.enabled');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Botão Limpar', function() {
    /* ==== Generated with Cypress Studio ==== */
    // cy.visit('http://localhost:3000/exercicios/exercicio1.html');
    cy.get('#btLimpar').should('have.text', 'Limpar');
    cy.get('#btLimpar').should('have.id', 'btLimpar');
    cy.get('#btLimpar').should('have.class', 'acao-negativa');
    cy.get('#btLimpar').should('have.attr', 'type', 'reset');
    cy.get('#btLimpar').should('be.visible');
    cy.get('#btLimpar').should('be.enabled');
    /* ==== End Cypress Studio ==== */
    
  });
})