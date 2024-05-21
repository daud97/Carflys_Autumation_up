describe('Filter by Exterior Color', ()=>{

    it('Black Color',()=>{

        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/all-vehicles')
        cy.wait(3000)
        cy.get('[type="checkbox"]').eq(6).check({force: true}).should('be.checked')
        cy.wait(2000)
        //cy.get('[type="checkbox"]').eq(2).uncheck({force: true}).should('not.be.checked')
    })
    
    it('Yello & white Color',()=>{

        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/all-vehicles')
        cy.wait(3000)
        cy.get('[type="checkbox"]').eq(18).check({force: true}).should('be.checked')
         cy.get('[type="checkbox"]').eq(19).check({force: true}).should('be.checked')

        cy.wait(2000)
        cy.get('[type="checkbox"]').eq(19).uncheck({force: true}).should('not.be.checked')
    })
})