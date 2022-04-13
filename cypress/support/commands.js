
Cypress.Commands.add('addUser', (user) => {//Complete the form
    cy.get('#first-name')
    .type(user.name)
    .should('have.value', user.name)

    cy.get('#last-name')
    .type(user.lastname)
    .should('have.value', user.lastname)
    
    cy.get('#job-title')
    .type(user.job)
    .should('have.value',user.job)

    cy.get('#radio-button-1')
    .click()

    cy.get('#checkbox-1')
    .click()

    cy.get('#select-menu')
    .select('0-1')
    .should('have.value', '1')

    cy.get('#datepicker')
    .type(user.date).click()

    
})

Cypress.Commands.add('clickAddUser', () => {   //I extract the submit accion because to use in wrongs case 
    cy.get('.btn')
    .click()
})