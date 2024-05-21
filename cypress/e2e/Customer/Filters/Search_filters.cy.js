describe('Verifing Landing Page Search Filters',()=>
{
    it('Search by Make', ()=>
{
    cy.viewport(1280,720)
    cy.visit('https://carflys-testing.vercel.app/all-vehicles')
    cy.wait(4000)
    // cy.contains('Filters').click()
    cy.get('[placeholder="Search by make, model"]').eq(0).type('Audi AG')
    cy.wait(2000)
})
it('Search by Model', ()=>
{
    cy.viewport(1280,720)
    cy.visit('https://carflys-testing.vercel.app/all-vehicles')
    cy.wait(4000)
    // cy.contains('Filters').click()
    cy.get('[placeholder="Search by make, model"]').eq(1).type('40 TFSI')
    cy.wait(2000)
})
it('Search by Valid VIN Number', ()=>
{
    cy.viewport(1100,720)
    cy.visit('https://carflys-testing.vercel.app/all-vehicles')
    cy.wait(4000)
    cy.contains('Filters').click()
    cy.get('[placeholder="Search by make, model"]').eq(1).type('1HGCR2F8XHA094293')
    cy.wait(2000)
})
it('Search by Unregistered VIN Number', ()=>
{
    cy.viewport(1100,720)
    cy.visit('https://carflys-testing.vercel.app/all-vehicles')
    cy.wait(4000)
    cy.contains('Filters').click()
    cy.get('[placeholder="Search by make, model"]').eq(1).type('1FAFP45X6XF100989')
    cy.contains('No Vehicles Found').should('exist','No Vehicles Found')
    cy.wait(2000)
})
})