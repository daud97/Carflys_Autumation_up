export function Add_Review(){

    cy.get("button").contains('Login').click()
    cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
    cy.get('[placeholder="Enter Password"]').type('Customer@123')
    cy.get("button").contains('Login').click()  

    cy.wait(4500)
    cy.get("button").get(".mantine-px51jk").eq(2).click({force:true})
    cy.contains("Dashboard").click()
    cy.wait(4500)

    cy.get("button").get(".mantine-UnstyledButton-root").eq(8).click({force:true})
    cy.contains("4. Reviews").click()
    cy.wait(4500)

    // Select Order for Review
    cy.get("button").get(".mantine-UnstyledButton-root").eq(9).click({force:true})
    cy.contains("4.1 Add Review").click()
    cy.wait(2500)
    cy.get(".mantine-Select-input").eq(0).click()
    cy.wait(4000)
    cy.contains('2013 Cadillac Escalade ESV Platinum Edition').click({force:true})
    cy.wait(2000)

    // Rattings
    cy.get(".mantine-1qubyp9").get('input[type="radio"][value="4"]').eq(0).check({force:true})
    cy.get(".mantine-1qubyp9").get('input[type="radio"][value="3"]').eq(1).check({force:true})
    cy.get(".mantine-1qubyp9").get('input[type="radio"][value="4"]').eq(2).check({force:true})
    cy.get(".mantine-1qubyp9").get('input[type="radio"][value="5"]').eq(3).check({force:true})
    cy.wait(3000)

    // Add Review
    cy.get('[placeholder="Enter Review"]').type("The vehicle ordering process was smooth and efficient. The customer service was excellent, and I received my car on time. The only downside was the limited color options available. Overall, I'm satisfied with my purchase.")
    // cy.get("button").get(".mantine-Button-root ").eq(0).contains('Reset').click() 
    cy.get("button").get(".mantine-Button-root ").eq(1).contains('Add').click() 
    cy.wait(3000)



}
export function View_Reviews(){

    cy.get("button").contains('Login').click()
    cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
    cy.get('[placeholder="Enter Password"]').type('Customer@123')
    cy.get("button").contains('Login').click()  

    cy.wait(4500)
    cy.get("button").get(".mantine-px51jk").eq(2).click({force:true})
    cy.contains("Dashboard").click()
    cy.wait(4500)

    cy.get("button").get(".mantine-UnstyledButton-root").eq(8).click({force:true})
    cy.contains("4. Reviews").click()
    cy.wait(4500)
    cy.get("button").get(".mantine-UnstyledButton-root").eq(9).click({force:true})
    cy.contains("4.2 View Reviews").click()
    cy.wait(2500)

    // Search Order Review
    cy.get('[placeholder="Search"]').type("2013 Cadillac Escalade ESV Platinum Edition")
    cy.get(".mantine-Select-input").eq(0).click()
    cy.wait(2000)
    cy.contains('Positive').click({force:true})

    cy.get(".mantine-Button-root").eq(1).click()
    cy.get(".mantine-sz8ti1").contains('As PDF').click()
    cy.get(".mantine-sz8ti1").contains('As CSV').click()

    cy.get(".mantine-Button-label").contains('Clear Search').click()

    cy.wait(4000)
    cy.get("button").get(".mantine-ActionIcon-root").click()
    cy.wait(4000)
    cy.get("button").get(".mantine-Button-root").eq(2).click()
}