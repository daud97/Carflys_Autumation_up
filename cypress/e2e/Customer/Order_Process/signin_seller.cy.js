
describe('Sign in Seller Test', ()=>
{
    // it('Sign in Seller With Valid Credentials', ()=>
    // {
    //     cy.viewport(1280,720)
    //     cy.visit('https://carflys-testing.vercel.app/')
    //     cy.wait(4500)
    //     cy.contains('Login').click()
    //     cy.get('[placeholder="Enter Email"]').type('dorine93682@d9bsf.cashbenties.com')
    //     cy.get('[placeholder="Enter Password"]').type('Dorin@123')
    //     cy.get("button").contains('Login').click()
    // }
    // )
    // it('Sign in Seller with Invalid Password', ()=>
    // {
    //     cy.viewport(1280,720)
    //     cy.visit('https://carflys-testing.vercel.app/')
    //     cy.wait(2000)
    //     cy.contains('Login').click()
    //     cy.get('[placeholder="Enter Email"]').type('dorine93682@d9bsf.cashbenties.com')
    //     cy.get('[placeholder="Enter Password"]').type('Dorin123')
    //     cy.get("button").contains('Login').click()
    // }
    // )
    it('Forgot Password', ()=>
    {
        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/')
        cy.wait(2000)
        cy.contains('Login').click()
        cy.get('[placeholder="Enter Email"]').type('dorine93682@d9bsf.cashbenties.com')
        cy.get('[placeholder="Enter Password"]').type('Dorin123')
        cy.get("button").contains('Login').click()
        cy.wait(2000)
        // cy.contains('Forgot Password?').click()
        // cy.get('[placeholder="Enter Email"]').type('dorine93682@d9bsf.cashbenties.com')
        // cy.get("button").contains('Continue').click()
        // cy.contains('Return To Login').click()
    })
    it('return to login page', () =>
    {
        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/auth/login')
        cy.wait(2000)
        cy.contains('Forgot Password?').click()
        cy.get('[placeholder="Enter Email"]').type(' ')
        cy.get("button").contains('Continue').click()
        cy.contains('Return To Login').click()
    }

    )
}

)