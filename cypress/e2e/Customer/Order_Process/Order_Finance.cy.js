
 export const order_finanace =()=>{

       
            cy.get("button").get('[class="mantine-Text-root mantine-egh40j"]').eq(1).click({force:true})
            cy.contains("Vehicles").click()

            cy.get('[placeholder="Search by make, model"]').type("1HGCR2F8XHA094293")   
            cy.get(".mantine-fkmmcr").click({force:true})   
            cy.wait(3000)
            // cy.get('[.mantine-fkmmcr"]').eq(9).click({force:true});
            cy.get("button").contains('Buy Now').click()
            cy.wait(1500)

            cy.get("button").contains('Buy Now').click({force:true})
            // cy.wait(1500)
 
            // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(0).type('Sen')
            // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(1).clear().type('Hong')
            // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(2).clear().type('lee')
            // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(3).clear().type('4443335555')
            // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(4).clear().type('Lee@gmail.com')
           
            // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(5).clear().type('9817')
            // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(6).clear().type('BLVD LOOP')
            // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(9).clear().type('93505')
            // cy.get('[class="mantine-Input-input mantine-Select-input mantine-1l5udn"]').click()
            // cy.contains('California').click()
            // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(11).clear().type('Canada')
            // cy.get('[type="checkbox"]').eq(0).uncheck().check({force: true}).should('be.checked')
            // cy.get("button").contains('Save and Continue').click()
            // cy.wait(2000)


             // it('Move to Next Page if All Text Fields Have Data', () => {
            //     cy.get('input[type="text"]').each(($input) => {
            //       if ($input.val() === '') {
            //         cy.log('Text field is empty! Cannot proceed.');
            //         it('if multiple input fields are empty', () => {
            //             cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').should('have.value', 'Sen');
                        
            //           });
            //       }
            //     });
            //     cy.log('All text fields have data. Moving to the next page...');
            //     cy.get("button").contains('Save and Continue').click({force:true});
            //     cy.wait(2500)
            //   });
 }
           
           

           
 