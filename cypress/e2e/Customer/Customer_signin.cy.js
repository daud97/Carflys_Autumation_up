describe('To Verify Customer Sign in', ()=>
{
    it ('Sign in with Valid Data', ()=>
    {
        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/')
        cy.wait(4000)
        cy.get("button").contains('Login').click()
        cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
        cy.get('[placeholder="Enter Password"]').type('Customer@123')
        cy.get("button").contains('Login').click()
    })
    it('Sign in with Invalid Email', ()=>
    {
        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/')
        cy.wait(4000)
        cy.get("button").contains('Login').click()
        cy.get('[placeholder="Enter Email"]').type('dos722@goulink.com')
        cy.get('[placeholder="Enter Password"]').type('Customer@123')
        cy.get("button").contains('Login').click()
        cy.contains('No user with the specified email address was found').should('exist', "No user with the specified email address was found") 
    })
    it('Sign In with no data', ()=>
    {
        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/')
        cy.wait(4000)
        cy.get("button").contains('Login').click()
        // cy.get('[placeholder="Enter Email"]').type('dos722@goulink.com')
        // cy.get('[placeholder="Enter Password"]').type('Customer@123')
        cy.get("button").contains('Login').click()
        cy.contains('Invalid email').should('exist','Invalid email') 
        cy.contains('Please Enter Password').should('exist','Please Enter Password') 
    })
})