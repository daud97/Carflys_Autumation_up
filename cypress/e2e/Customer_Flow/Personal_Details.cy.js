export function Personal_Details (){
       
            cy.get("button").contains('Login').click()
            cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
            cy.get('[placeholder="Enter Password"]').type('Customer@123')
            cy.get("button").contains('Login').click()

            cy.wait(4500)

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
                    cy.wait(9000); 

            // Personal Details
            cy.contains('First Name').next("div").find('[type="text"]').clear().type('Anderson')
            cy.contains('Middle Name').next("div").find('[type="text"]').clear().type('SR')
            cy.contains('Last Name').next("div").find('[type="text"]').clear().type('Laurie')
            cy.get(".mantine-Input-input").eq(3).clear().type('4443335555')
            cy.get(".mantine-Input-input").eq(4).clear().type('anderson@gmail.com')
           
            cy.get(".mantine-Input-input").eq(5).clear().type('9817')
            cy.get(".mantine-Input-input").eq(6).clear().type('BLVD LOOP')
            cy.get(".mantine-Input-input").eq(9).clear().type('93505')
           // cy.get(".mantine-Input-input").eq(10).clear().type('California City')
          
            cy.contains('County').next("div").find('[type="text"]').type('CA')
            cy.get('[type="checkbox"]').eq(0).uncheck().check({force: true}).should('be.checked')
            cy.get("button").contains('Save and Continue').click()
            cy.wait(7000)

            // cy.contains('Personal Details').should('exist')
            
            // it('Should Skip Form if Already Filled',()=>{
            //     cy.visit('$Cash_or_Finance');
            //     cy.get("Personal_Details").should("exist");
            //     cy.get("save and Continue").click()
            //     cy.url().should("contains","/Cash_or_Finance")
            //    })
    
}  
// class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"