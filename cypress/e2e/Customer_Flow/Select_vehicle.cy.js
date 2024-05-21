
export function Select_Vehicle (){
    
    cy.get("button").contains('Login').click()
    cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
    cy.get('[placeholder="Enter Password"]').type('Customer@123')
    cy.get("button").contains('Login').click()

    cy.wait(4500)

    //   select Vehicles
    cy.get("button").get(".mantine-egh40j").eq(0).click({force:true})
    cy.contains("Vehicles").click()

    cy.get('[placeholder="Search by make, model"]').eq(0).type("1FMSK8DH1LGC97871")
    cy.contains('Vehicles').should('exist')
    cy.wait(4500)   
    //  cy.get(".mantine-fkmmcr").click({force:true})   
    //  cy.wait(3000)
    // cy.get('[.mantine-fkmmcr"]').eq(9).click({force:true});
    cy.get("button").contains('Buy Now').eq(0).click()
    cy.wait(5000)
    cy.contains('Vehicles').should('exist')

    cy.get("button").contains('Buy Now').eq(0).click({force:true})
    cy.wait(5000);

}

