describe('Sign In test', ()=>{

    it('Should Sign In with Valid Credentials', ()=>
    {
        cy.viewport(1280, 720)
        cy.visit('https://carflys-testing.vercel.app')
        cy.wait(4500)
        cy.contains('Login').click()
        cy.get('[placeholder="Enter Email"]').type('admin@gmail.com')
        cy.get('[placeholder="Enter Password"]').type("Carflys@123")
        cy.get("button").contains('Login').click();
    }
    )
    it('Should not Sign In with Invalid Credwtials', ()=>
    {
        cy.viewport(1280, 720)
        cy.visit('https://carflys-testing.vercel.app')
        cy.wait(4500)
        cy.contains('Login').click()
        cy.get('[placeholder="Enter Email"]').type('admin@gmail.com')
        cy.get('[placeholder="Enter Password"]').type("Crflys@123")
        cy.get("button").contains('Login').click();
    }
    )
    it('Forget Password', ()=>
    {
        cy.viewport(1280, 720)
        cy.visit('https://carflys-testing.vercel.app')
        cy.wait(4500)
        cy.contains('Login').click()
        cy.contains('Forgot Password?').click()
        cy.get('[placeholder="Enter Email"]').type('Admin@gmail.com')
        cy.get("button").contains('Continue').click();
    }
    )
})
