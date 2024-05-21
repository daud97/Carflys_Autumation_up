export function View_Order(){

        cy.get("button").get(".mantine-egh40j").eq(1).click({force:true})
        cy.contains("Dashboard").click()
        cy.wait(3000)
        cy.get("button").get(".mantine-1oe2ane").eq(1).click()
        cy.contains("2. Orders").click()
        cy.wait(2000)

        // search with VIN Number
        cy.get('[placeholder="Search"]').type("2C4RDGCG1HR617275")
        cy.get("button").get(".mantine-UnstyledButton-root").eq(2).click()
        cy.contains("Continue Order").click({force:true})
        return;
}