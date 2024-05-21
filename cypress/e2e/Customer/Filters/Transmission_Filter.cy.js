describe('Search Vehile by Transmition', ()=>{

    it('Automatic Transmition',()=>{
        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/all-vehicles')
        cy.wait(3000)
        cy.get('[type="checkbox"]').eq(0).check({force: true}).should('be.checked')
        cy.wait(2000)
    })
    it('Manual Transmition',()=>{
        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/all-vehicles')
        cy.wait(3000)
        cy.get('[type="checkbox"]').eq(1).check({force: true}).should('be.checked')
        cy.wait(2000)
        cy.get('[type="checkbox"]').eq(1).uncheck({force: true}).should('not.be.checked')
    })
})