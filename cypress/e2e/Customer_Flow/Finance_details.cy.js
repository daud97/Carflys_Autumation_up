

export function Finance_Details (){
                   
                    cy.get("button").contains('Login').click()
                    cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
                    cy.get('[placeholder="Enter Password"]').type('Customer@123')
                    cy.get("button").contains('Login').click()  
                    cy.wait(6000)

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
                 

                    // Finance Details
                   cy.contains('Social Security Number').next("div").find('[type="text"]').type('666455730')
                   cy.get(".mantine-Input-input").eq(1).type('1234567890');
                   cy.get('[placeholder="Select Date of Birth"]').eq(0).type('August 1, 1998');
                   cy.wait(1500)
                   cy.contains('Education Level').next("div").click()
                   cy.contains("4 Yr College/University Grad").click()
                   cy.wait(1500)
       
                   cy.get(".mantine-Select-input").eq(1).click({force:true});
                   cy.contains('Own Home Outright').click();
                   cy.contains('Monthly Rent/Mortgage').next("div").find('[type="number"]').clear().type('0')

                   cy.contains('Years at Address').next("div").find('[type="number"]').clear().type('15')
                   cy.contains('Months at Address').next("div").find('[type="number"]').clear().type('10')
                //     cy.contains('Monthly Rent/Mortgage').next("div").find('[type="number"]').clear().type('12')
                //    cy.wait(2500)
       
                   //Employement Information
                    cy.contains('Employment Status').next("div").click()
                    cy.contains("Full Time").click()
                    cy.contains('Employer Name').next("div").find('[type="text"]').type('Anderson Laurie')
                    cy.contains('Employer Phone Number').next("div").find('[type="text"]').type('+1(222)-333-4444')
                    cy.contains('Income Interval').next("div").click()
                    cy.contains('Yearly').click({force:true})
                    cy.contains('Income Amount').next("div").find('[type="number"]').clear().type('5500')
                    cy.contains('Employment Title/Position').next("div").find('[type="text"]').type('Manager')
                    cy.contains('Years at Employment/Time Retired').next("div").find('[type="number"]').clear().type('15')
                    cy.contains('Months at Employment/Time Retired').next("div").find('[type="number"]').clear().type('11')
                    cy.wait(1000)
                    
                 //driver License details
                    cy.contains("Driver's license number").next("div").find('[type="text"]').type('TH-234554-4545')
                    cy.contains("Driver's license state").next("div").click()
                    cy.contains("Alaska").click()
                    cy.contains("Driver's license issue date").next("div").find('[placeholder="Select Date"]').clear().type('January 3, 2029')
                    cy.contains("Driver's license expiration date").next("div").find('[placeholder="Select Date"]').clear().type('January 3, 2029')
             
                // Finance Information
                cy.contains('Cash Down Payment Amount').next("div").find('[type="number"]').clear().type('8000')
                cy.contains('Term').next("div").find('[type="number"]').clear().type('18')
                cy.contains('Expected Interest Rate').next("div").find('[type="number"]').clear().type('5.5')

                cy.get("button").contains("Save and Continue").click({force:true})
                cy.wait(3000)

               
           }