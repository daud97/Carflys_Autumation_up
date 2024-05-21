export function Login(){
       
             
    cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
    cy.get('[placeholder="Enter Password"]').type('Customer@123')
    cy.get("button").contains('Login').click()
    cy.wait(4500)

    
    
}  