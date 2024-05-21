
describe('sign up', ()=>
{
    it('Sign up with Valid Credentials',()=>
    {
        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/auth/login')
        cy.wait(2500)
        cy.contains('Register Here').click()

        cy.get('[placeholder="Select User Type *"]').click()
        cy.contains('Seller').click()

        cy.get('[placeholder="Enter First Name *"]').type('Marlen')

        cy.get('[placeholder="Enter Last Name *"]').type('Samule')

        cy.get('[placeholder="Enter Cell Number *"]').type('123-456-7890')

        cy.get('[placeholder="Enter Email *"]').type('mihas60324@amankro.com')

        cy.get('[placeholder="Enter Password *"]').type('Seller@123')

        cy.get('[placeholder="Confirm Password *"]').type('Seller@123')
        
        cy.get("button").contains('Sign up').click()
    }
)
})