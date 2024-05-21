describe('Search Vehicle by Zip Code', ()=>
{
it('Search Vehicle by Valid Zip Code', ()=>
{
    cy.viewport(1280,720)
    cy.visit('https://carflys-testing.vercel.app/all-vehicles')
    cy.wait(4000)
    cy.get('[placeholder="ZIP Code"]').type('93505')
})
it('Search Vehicle by Invalid Zip Code', ()=>
{
    cy.viewport(1280,720)
    cy.visit('https://carflys-testing.vercel.app/all-vehicles')
    cy.wait(4000)
    cy.get('[placeholder="ZIP Code"]').type('10200')
    cy.contains('No Vehicles Found').should('exist','No Vehicles Found')
    cy.wait(2000)
})
    
})