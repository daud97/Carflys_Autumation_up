describe('Select Year by Slider Filter', ()=>{
    it('Filter by Year',()=>{

        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/all-vehicles')
        cy.wait(4000)
        // cy.get('[role="slider"]').eq(0).invoke('val', 2005).trigger('change',{data: 2005}).click()
        
        

    })
})