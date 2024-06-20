describe('Testa o triângulo isósceles', () => {

    it('Calcula um triâgulo isósceles', () => {
        cy.visit('http://localhost:3000/exercicios/exercicio1.html')
        cy.get('#ladoA').click();
        cy.get('#ladoA').type('15');
        cy.get('#ladoB').click();
        cy.get('#ladoB').type('10');
        cy.get('#ladoC').click();
        cy.get('#ladoC').type('10');
        cy.get('#btClassificar').click();
        cy.get('#resultado').should('contain', 'Isósceles');
    })
})