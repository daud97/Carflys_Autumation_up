describe('Maryland Inspection Filter', ()=>{

    it('Inspection Checkbox',()=>{

        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/all-vehicles')
        cy.wait(3000)
        cy.get('[type="checkbox"]').eq(21).check({force: true}).should('be.checked')
        cy.wait(2000)
        //cy.get('[type="checkbox"]').eq(2).uncheck({force: true}).should('not.be.checked')
        cy.get("button").contains('Clear').click()
        cy.wait(2000)
    })
})