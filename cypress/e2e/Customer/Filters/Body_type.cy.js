describe('Vehicle Body Type Search',()=>{
    
    it('Filter by Body type(Sedan)',()=>{
        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/all-vehicles')
        cy.wait(2500)
        cy.get('[id="car-1"]').click({force: true})
        cy.wait(2000)    
    })
    it('Filter by Body type(Coupe)',()=>{
        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/all-vehicles')
        cy.wait(2500)
        cy.get('[id="car-3"]').click({force: true})
        cy.wait(2000)    
    })
})
