
describe('CSS locators', ()=>{

    it('Should Sign Up with Valid Credentials', ()=>
    {
        cy.viewport(1280, 720)
        cy.visit('https://carflys-testing.vercel.app/auth/login')
        cy.wait(4500)
        cy.contains('Register Here').click()
        cy.get('[placeholder="Select User Type *"]').click()
        cy.contains("Seller").click()
}
    )

})
