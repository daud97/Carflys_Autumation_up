export function Add_Complaints(){

    cy.get("button").contains('Login').click()
    cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
    cy.get('[placeholder="Enter Password"]').type('Customer@123')
    cy.get("button").contains('Login').click()  

    cy.get("button").get(".mantine-Text-root").eq(0).click()
    cy.contains("Dashboard").click({force:true})
    cy.wait(4500)

    cy.get("button").get(".mantine-UnstyledButton-root").eq(5).click({force:true})
    cy.contains("3. Complaints").click()
    cy.wait(4500)

    // Add Complaints
    cy.get("button").get(".mantine-UnstyledButton-root").eq(6).click({force:true})
    cy.contains("3.1 Add Complaint").click()
    cy.wait(2500)

    // Select Order for Complaint
    cy.get(".mantine-Select-input").eq(0).click()
    cy.wait(2000)
    cy.contains('2013 Cadillac Escalade ESV Platinum Edition').click({force:true})

    cy.get('[placeholder="Enter Complaint Title"]').type('Scratches on Exterior Body')
    cy.get('[placeholder="Enter Complaint Description"]').type('Scratches on a vehicle’s exterior body can be frustrating, but understanding the different types of scratches and their impact can help you address them effectively.')
    cy.get("button").get(".mantine-UnstyledButton-root").eq(16).contains('Add').click() 
    cy.contains('Compliant Exist Successfully').should("exist")

    
}

export function View_Complaints(){

    cy.get("button").contains('Login').click()
    cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
    cy.get('[placeholder="Enter Password"]').type('Customer@123')
    cy.get("button").contains('Login').click() 

    cy.get("button").get(".mantine-Text-root").eq(0).click({force:true})
    cy.contains("Dashboard").click()
    cy.wait(4500)

    cy.get("button").get(".mantine-UnstyledButton-root").eq(5).click({force:true})
    cy.contains("3. Complaints").click()
    cy.wait(4500)

    // View Complaints
    cy.get("button").get(".mantine-UnstyledButton-root").eq(7).click({force:true})
    cy.contains("3.2 View Complaints").click()
    cy.wait(4500)

    cy.get('[placeholder="Search"]').type("2013 Cadillac Escalade ESV Platinum Edition")
    cy.get(".mantine-Select-input").eq(0).click()
    cy.wait(2000)
    cy.contains('Not Replied').click({force:true})

    cy.get(".mantine-Button-root").eq(1).click()
    cy.get(".mantine-sz8ti1").contains('As PDF').click()
    cy.get(".mantine-sz8ti1").contains('As CSV').click()

    cy.wait(4000)
    cy.get("button").get(".mantine-ActionIcon-root").click()
    cy.wait(4000)
    cy.get("button").get(".mantine-Button-root").eq(2).click()
    // cy.get(".mantine-Button-root").eq(1).click()
}