/// <reference types="cypress" />

import { User } from "../classes/user"


describe('Basic Form', () => {
    beforeEach( () => {
        cy.visit('')
    })
        it('Complete all the form', () => {

                
            const user = new User('Nico', 'Salvaneschi', 'programmer', '1984-21-02')   
            cy.addUser(user)  
            cy.clickAddUser()
                         
            

            cy.url().should('include', 'thanks')
            const newLocal = 'Thanks for submitting your form'
            cy.contains(newLocal).should('be.visible')
        })

        it('Send without completing fileds', () =>{
            cy.clickAddUser()
        })
            
})
           






