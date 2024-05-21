
   
export function Delivery_Options (){

               

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
                cy.wait(5000);
                // Delivery Options
                cy.get("button").contains("Save and Continue").click()
                cy.wait(2000) 

}
                export function Carflys_Protection (){

                cy.get("button").contains('Login').click()
                cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
                cy.get('[placeholder="Enter Password"]').type('Customer@123')
                cy.get("button").contains('Login').click()

                cy.wait(7000)

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

                // Carflys protection
                
                // cy.get(".mantine-Radio-root").eq(0).check().should('be.checked')
                // cy.get(".mantine-69fb57").eq(3).check({force: true})
                // cy.get(".mantine-69fb57").eq(2).check({force: true})
                cy.wait(1500)
                cy.get("button").contains("Save and Continue").click({force:true})
                cy.wait(3000)

                }   

                export function Services (){

                cy.get("button").contains('Login').click()
                cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
                cy.get('[placeholder="Enter Password"]').type('Customer@123')
                cy.get("button").contains('Login').click()  

                cy.wait(5000)

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
                    cy.wait(8000);
                //  Carflys Services
                //  cy.contains("Credit Disability").click()
                // cy.get(".mantine-69fb57").eq(4).check({force: true})
                // cy.get(".mantine-69fb57").eq(3).check({force: true})
                // cy.get(".mantine-69fb57").eq(2).check({force: true})
                // cy.wait(1500)
                cy.get("button").contains("Save and Continue").click({force:true})
                cy.wait(3000)
                // cy.contains("Successfully created deal jacket").should("exist")
                // cy.wait(3000)               
                }
                 
                export function Order_Breakdown (){

                cy.get("button").contains('Login').click()    
                cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')    
                cy.get('[placeholder="Enter Password"]').type('Customer@123')
                cy.get("button").contains('Login').click()  

                cy.wait(5000)

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
                    cy.wait(8000);

                //Order Breakdown
                 cy.get("button").contains('Save and Continue').click({force:true})
                 cy.contains('Save and Continue').should('exist')
                 cy.wait(3000)
                
                //  cy.get("button").contains("Check For New Offers").click()
                //  cy.wait(4000)
                 }
                 export function Offers (){

                    cy.get("button").contains('Login').click()
                    cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
                    cy.get('[placeholder="Enter Password"]').type('Customer@123')
                    cy.get("button").contains('Login').click()  

                    cy.wait(5000)

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

                //  cy.get("button").contains("Check For New Offers").click()
                //  cy.wait(9000)
                //  function checkOffers() {

      
                //     cy.get("button").contains("Check For New Offers").then((btn) => {
                       
                //        if(cy.contains(/Accept this Offer/gi)) {
                //           cy.contains(/Accept this Offer/gi).click();
                //        } else {
                //           checkOffers();
                //        }
                       
                //     })
                //  }
                //  checkOffers();
                cy.wait(15000)
                 cy.get("button").contains("Independent eC LAW Test FS").click()
                 cy.contains("Independent eC LAW Test FS").should('exist')
                 cy.get("button").contains("Accept This Offer").click({force:true})

                cy.wait(9000)

                 cy.get('.sigCanvas').as('signatureBox');

                //  // Get the center coordinates of the signature box
                 cy.get('@signatureBox').then(($box) => {

                  const centerX = $box[0].getBoundingClientRect().left + $box[0].getBoundingClientRect().width / 2;
                  const centerY = $box[0].getBoundingClientRect().top + $box[0].getBoundingClientRect().height / 2;
            
                //   Simulate drawing in the center with text size 10
                  cy.get('@signatureBox')
                    .trigger('mousedown', centerX, centerY, { which: 1, force: true })
                    .trigger('mousemove', centerX, centerY, { force: true })
                    .trigger('mouseup', { force: true });
                  cy.contains("Customer Signature").parent().find("button").contains("Accept").click()
            
                  cy.get("button").contains("Save and Continue").click()
               })

               
 }

    
    
 