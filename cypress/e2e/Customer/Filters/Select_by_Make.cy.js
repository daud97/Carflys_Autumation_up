
describe('Verify Seclect by Make and Model', ()=>
{
    it('Select By Make and Model', ()=>
{
    cy.viewport(1280,720)
    cy.visit('https://carflys-testing.vercel.app/all-vehicles')
    cy.wait(4500)
    cy.get('[placeholder="Select Make"]').click()
    cy.contains('Audi').click()
    cy.wait(2500)
    .then('Select by Model', ()=> {
        cy.get('[placeholder="Select Model"]').click()
        cy.contains('A4 Allroad').click()
        cy.wait(2500)
    })
})
})