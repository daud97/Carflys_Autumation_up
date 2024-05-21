import { Cash_or_Finance } from "./Cash-or_Finance.cy"

describe('Run Purchase Process',()=>{
    it('Run it Please',()=>{

        cy.viewport(1300, 790)
        cy.visit('https://carflys-testing.vercel.app/')
        cy.get("button").contains("Login").click()

        cy.get('[placeholder="Enter Email"]').type('tiffanie20972@cuk1.cse445.com')
                cy.get('[placeholder="Enter Password"]').type('Tiffane@123')
                cy.get("button").contains('Login').click()
                cy.wait(1500)
        
                cy.get("button").get('[class="mantine-Text-root mantine-egh40j"]').eq(1).click({force:true})
                cy.contains("Vehicles").click()
    
                cy.get('[placeholder="Search by make, model"]').type("1D7HE42N45S321898")   
                // cy.get(".mantine-fkmmcr").click({force:true})   
                cy.wait(3000)
                // cy.get('[.mantine-fkmmcr"]').eq(9).click({force:true});
                cy.get("button").contains('Buy Now').click()
                cy.wait(1500)
    
                cy.get("button").contains('Buy Now').click({force:true})
                // cy.wait(1500)
     
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(0).type('Sen')
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(1).clear().type('Hong')
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(2).clear().type('lee')
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(3).clear().type('4443335555')
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(4).clear().type('Lee@gmail.com')
               
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(5).clear().type('9817')
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(6).clear().type('BLVD LOOP')
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(9).clear().type('93505')
                cy.get('[class="mantine-Input-input mantine-Select-input mantine-1l5udn"]').click()
                cy.contains('California').click()
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(11).clear().type('Canada')
                cy.get('[type="checkbox"]').eq(0).uncheck().check({force: true}).should('be.checked')
                cy.get('[class="mantine-1ryt1ht mantine-Button-label"]').contains('Save and Continue').click()
                cy.wait(2000)

    })
    cy.get("Personal_Details").should($Personal_Details)=()=>{
        if($Personal_Details[0].checkValidity()){
            cy.contains('Save and Continue').click();

            cy.url().should("contains",$Cash-Cash_or_Finance);
        }else{
            cy.contains(/Please fillout the form./m).should("be.visible");
        }

    };

})