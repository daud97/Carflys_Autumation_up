describe('Custoner signup with Valid data', ()=>
{   
    it('Customer Sign Up with Valid data', ()=> //TTP
    {
    cy.viewport(1280,720)
    cy.visit('https://carflys-testing.vercel.app/')
    cy.wait(4000)
    cy.get("button").contains('Login').click()
    cy.contains('Register Here').click()
    cy.get('[placeholder="Select User Type *"]').click()
    cy.contains('Customer').click()
    cy.get('[placeholder="Enter First Name *"]').type('Ten')
    cy.get('[placeholder="Enter Last Name *"]').type('Heng')
    cy.get('[placeholder="Enter Cell Number *"]').type('1234567890')
    cy.get('[placeholder="Enter Email *"]').type('dosowow722@goulink.com')
    cy.get('[placeholder="Enter Password *"]').type('Customer@123')
    cy.get('[placeholder="Confirm Password *"]').type('Customer@123')
    cy.get("button").contains('Sign up').click()
    }
    )
    it('Customer Sign Up with duplicate data', ()=> //TTF
    {
    cy.viewport(1280,720)
    cy.visit('https://carflys-testing.vercel.app/')
    cy.wait(4000)
    cy.get("button").contains('Login').click()
    cy.contains('Register Here').click()
    cy.get('[placeholder="Select User Type *"]').click()
    cy.contains('Customer').click()
    cy.get('[placeholder="Enter First Name *"]').type('Ten')
    cy.get('[placeholder="Enter Last Name *"]').type('Heng')
    cy.get('[placeholder="Enter Cell Number *"]').type('1234567890')
    cy.get('[placeholder="Enter Email *"]').type('dosowow722@goulink.com')
    cy.get('[placeholder="Enter Password *"]').type('Customer@123')
    cy.get('[placeholder="Confirm Password *"]').type('Customer@123')
    cy.get("button").contains('Sign up').click()
    }
    )
    it('Should display error message when Customer Sign Up with no data', ()=>  //TTF
    {
    cy.viewport(1280,720)
    cy.visit('https://carflys-testing.vercel.app/')
    cy.wait(4000)
    cy.get("button").contains('Login').click()
    cy.contains('Register Here').click()
    cy.get("button").contains('Sign up').click()

    cy.contains('Please Select User Type').should('exist','Please Select User Type')
    cy.contains('Enter 3 or more letters for First Name').should('exist','Enter 3 or more letters for First Name')
    cy.contains('Enter 3 or more letters for Last Name').should('exist','Enter 3 or more letters for Last Name')
    cy.contains('Invalid Cell Number e.g +1 123 456 7890').should('exist','Invalid Cell Number e.g +1 123 456 7890')
    cy.contains('Invalid email').should('exist','Invalid email') 
    cy.contains('Password must at least have 8 characters with special characters, numbers, uppercase and lowercase letters').should('exist')
    }
    )
})
