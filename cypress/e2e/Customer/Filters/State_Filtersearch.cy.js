describe('Search by State Filter',()=>{

    it('Filter by State',()=>{

        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/all-vehicles')
        cy.wait(3000)
        cy.get('[placeholder="Select State"]').click()
        cy.contains('Alaska').click()
        cy.wait(2000)
    })
})