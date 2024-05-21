export function Cash_or_Finance (){

                  
       
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
    
    // Finance with Carflys
    // cy.get(".mantine-Radio-radio").eq(0).check().should('be.checked');
    //Buy Vehicle Outright
    // //cy.get('[class="mantine-69fb57 mantine-Radio-radio"]').eq(1).check({force:true}).should('be.checked');
    cy.get("button").contains('Save and Continue').click({force:true});
    cy.wait(4500)


}  

//Buy Vehicle Outright
// With Cash
export function Cash(){
    cy.get("button").contains('Login').click()
    cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
    cy.get('[placeholder="Enter Password"]').type('Customer@123')
    cy.get("button").contains('Login').click()  

    cy.get(".mantine-69fb57").eq(1).check({force:true}).should('be.checked');
    
    cy.get("button").contains('Save and Continue').click({force:true});
    cy.wait(1500)
}

