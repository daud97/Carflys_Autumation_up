describe('Select Vehicle for Order',()=>{

    it('Cusstomer Interested in vehicle',()=>{

        cy.viewport(1280,720)
        cy.visit('https://carflys-testing.vercel.app/')
        cy.wait(4000)
        cy.get("button").contains('Login').click()

        cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
        cy.get('[placeholder="Enter Password"]').type('Customer@123')
        cy.get("button").contains('Login').click()

        .then('Click on Vehicle Card',()=>{
        cy.get('[class="mantine-fkmmcr"]').eq(7).click({force:true});
        });
        cy.get('button').contains("I'm Interested").click();
        // cy.get('button').eq(0).click({force:true});
        cy.get('[placeholder="ZIP Code"]').type('93505');
        cy.get('[placeholder="Comments"]').type('I Saw this Vehicle on carflys and im interested in it to buy, soon gonna buy it');
        cy.get("button").contains('Send').click()
    })
})