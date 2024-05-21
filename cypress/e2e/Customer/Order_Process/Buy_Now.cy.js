describe('Select Vehicle for Order',()=>{

    it('Purchase Process of vehicle',()=>{

        
        const LandingPage =()=>{
            it('Langing on Vehicle Page',()=>{
                cy.viewport(1300,860)
                cy.visit('https://carflys-testing.vercel.app/')
                cy.wait(4000)
                cy.get("button").contains('Login').click()
            }
            )
        }
       
        //Sign In
       const SignIn = () =>{
            it('Sign In',()=>{
                cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
                cy.get('[placeholder="Enter Password"]').type('Customer@123')
                cy.get("button").contains('Login').click()
                cy.wait(1500)
            })
        //Select Vehicle Card You Wanna Buy
            it('Select Vehicle Card you Want to Buy',()=>{
                cy.get('[class="mantine-fkmmcr"]').eq(9).click({force:true});
                cy.get("button").contains('Buy Now').click();
                cy.wait(1500)
            })
        }
        //Purchase Process
        /////1.Personal Details
        //Personal Details
        const PurchaseProcess =()=>{
            it('1.Personal Details',()=>{
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(0).clear().type('Ten');
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(1).clear().type('Hong');
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(2).clear().type('lee');
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(3).clear().type('4443335555');
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(4).clear().type('Lee@gmail.com');
            })
             // //Address Details
            it('Address Details',()=>{
                
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(5).clear().type('9817');
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(6).clear().type('BLVD LOOP');
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(9).clear().type('93505');
                cy.get('[class="mantine-Input-input mantine-Select-input mantine-1l5udn"]').click();
                cy.contains('California').click();
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(11).clear().type('Canada');
                cy.get('[type="checkbox"]').eq(0).uncheck().check({force: true}).should('be.checked');
                cy.get("button").contains('Save and Continue').click();
                cy.wait(2000);
            })

            it('2.Cash or Finance=>finance with carflys',()=>{
                
                cy.get('[class="mantine-69fb57 mantine-Radio-radio"]').eq(0).check({force:true}).should('be.checked');
                //Buy Vehicle Outright
                // //cy.get('[class="mantine-69fb57 mantine-Radio-radio"]').eq(1).check({force:true}).should('be.checked');
                cy.get("button").contains('Save and Continue').click();
                cy.wait(2500)
       
            })
            it('3.Finance Details=Aditional Personal Details',()=>{
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(0).type('666 45 5730');
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(1).type('1234567890');
                cy.get('[placeholder="Select Date of Birth"]').eq(0).type('August 1, 1998');
                cy.get('[class="mantine-Input-input mantine-Select-input mantine-sf9chw"]').eq(0).click({force:true});
                cy.contains('Some College').click();
                cy.wait(1500)
            })
            it('Additional Address Details',()=>{
                cy.get('[class="mantine-Input-input mantine-Select-input mantine-sf9chw"]').eq(1).click({force:true});
                cy.contains('Own Home Outright').click();
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(2).type('0')
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(3).clear().type('15')
                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(4).clear().type('11')
                cy.wait(2500)
            })

        }
        describe('Modules Test',()=>{
            describe('First Module',SignIn)
            describe('First Module',PurchaseProcess)
            describe('Second Module',LandingPage)
        })

        
        
        
        
        
        // /////2.Cash or Finance
        // //Finace With Carflys
        // 

        // ////3.Finance Details
        // //Additional Personal Details

        
        // //
        // 
        // //Employement Information
        // cy.get('[class="mantine-Input-input mantine-Select-input mantine-sf9chw"]').eq(2).click({force:true});
        // cy.contains('Full Time').click();
        // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(5).type('Ten Hang Le')
        // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(6).type('1234567890')
        // cy.get('[class="mantine-Input-input mantine-Select-input mantine-sf9chw"]').eq(3).click({force:true})
        // cy.contains('Yearly').click();
        // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(7).clear().type('20000')
        // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(8).type('Manager')
        // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(9).clear().type('12')
        // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(10).clear().type('10')
        // //driver License details
        // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(11).clear().type('TH1234567890')
        // cy.get('[placeholder="Mayland"]').click({force:true})
        // cy.contains('Alaska').click();
        // cy.get('[placeholder="Select Date"]').eq(0).type('February 6, 2019',{force:true})
        // cy.get('[placeholder="Select Date"]').eq(1).type('February 6, 2029',{force:true})

        // //Finance Information
        // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(12).clear().type('10000')
        // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(13).clear().type('38')
        // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(9).clear().type('12')
        // cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1b3at5r"]').eq(1).clear().type('5.5',{force:true})

        // cy.get("button").contains('Save and Continue').click();
        // cy.wait(1500)

        ////4.Delivery Options
        //cy.get("button").contains('Save and Continue').click({force:true});

        ////5.Carflys Protection
        // cy.get('[class="mantine-Carousel-slide mantine-1tcph41"]').eq(3).click({force:true}) 
        // // cy.get("button").contains('Save and Continue').click({force:true});
        // cy.wait(2000)
       
          ////6.Carflys Services
        // cy.get("button").contains('Save and Continue').click({force:true});
    })
})