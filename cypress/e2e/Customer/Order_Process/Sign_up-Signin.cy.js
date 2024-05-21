
describe('Sign in after Sign Up', () => 
{
    it('Sign in with Sign Up Account', () =>
    {
        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/auth/login')
        cy.wait(4500)
        cy.get('[placeholder="Enter Email"]').type('mihas60324@amankro.com')
        cy.get('[placeholder="Enter Password"]').type('Seller@123')
        cy.get("button").contains('Login').click()
    }
)
})