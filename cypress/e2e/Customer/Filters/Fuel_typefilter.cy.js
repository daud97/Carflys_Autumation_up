describe('Filter by Fuel Type', ()=>{

    it('Gasoline Type',()=>{

        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/all-vehicles')
        cy.wait(3000)
        cy.get('[type="checkbox"]').eq(2).check({force: true}).should('be.checked')
        cy.wait(2000)
        cy.get('[type="checkbox"]').eq(2).uncheck({force: true}).should('not.be.checked')
    })
    
    it('Electric Type',()=>{

        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/all-vehicles')
        cy.wait(3000)
        cy.get('[type="checkbox"]').eq(5).check({force: true}).should('be.checked')
        cy.wait(2000)
        cy.get('[type="checkbox"]').eq(5).uncheck({force: true}).should('not.be.checked')
    })
})