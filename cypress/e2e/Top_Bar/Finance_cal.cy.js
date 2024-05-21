
export function Calcualtor(){

        cy.get("button").contains('Login').click()
        cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
        cy.get('[placeholder="Enter Password"]').type('Customer@123')
        cy.get("button").contains('Login').click()  

        cy.wait(5000)

        //   Click on Finance Calculator
        cy.get("button").get(".mantine-egh40j").eq(1).click({force:true})
        cy.contains("Finance Calculator").click()
        cy.wait(4500)
        cy.contains('Vehicle Price in USD').next("div").find('[type="number"]').clear().type('58050')
        cy.wait(2000)

        cy.get("button").get(".icon-tabler-pencil").eq(0).click()
        cy.get(".mantine-Input-input").eq(1).clear().type('23')

        cy.get("button").get(".icon-tabler-pencil").eq(1).click()
        cy.get(".mantine-Input-input").eq(2).clear().type('12')

        cy.get("button").get(".icon-tabler-pencil").eq(2).click()
        cy.get(".mantine-Input-input").eq(3).clear().type('14')

        cy.get("button").get(".icon-tabler-pencil").eq(3).click()
        cy.get(".mantine-Input-input").eq(4).clear().type('20')

        cy.get("button").get(".icon-tabler-pencil").eq(4).click()
        cy.get(".mantine-Input-input").eq(5).clear().type('23')

        cy.get("button").get(".icon-tabler-pencil").eq(5).click()
        cy.get(".mantine-Input-input").eq(6).clear().type('1200')

        cy.get("button").get(".icon-tabler-pencil").eq(6).click()
        cy.get(".mantine-Input-input").eq(7).clear().type('2000')

        cy.get("button").get(".icon-tabler-pencil").eq(7).click()
        cy.get(".mantine-Input-input").eq(8).clear().type('3500')

        cy.get("button").get(".icon-tabler-pencil").eq(8).click()
        cy.get(".mantine-Input-input").eq(9).clear().type('5')

        cy.get("button").get(".icon-tabler-pencil").eq(9).click()
        cy.get(".mantine-Input-input").eq(10).clear().type('5.8')

        cy.get("button").get(".icon-tabler-pencil").eq(10).click()
        cy.get(".mantine-Input-input").eq(11).clear().type('5.90')

        cy.get("button").get(".icon-tabler-pencil").eq(11).click()
        cy.get(".mantine-Input-input").eq(12).clear().type('1.2')

        cy.get("button").get(".icon-tabler-pencil").eq(12).click()
        cy.get(".mantine-Input-input").eq(13).clear().type('3.0')


        cy.get("button").contains('Calculate').click()

        
        // .clear().type('40')
        
}   
