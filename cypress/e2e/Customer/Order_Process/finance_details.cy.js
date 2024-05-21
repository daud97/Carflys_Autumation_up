            
//             ////3.Finance Details
//             //Additional Personal Details
//             export const Finance_details=()=>{

//                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(0).type('666455730');
//                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(1).type('1234567890');
//                cy.get('[placeholder="Select Date of Birth"]').eq(0).type('August 1, 1998');
//                cy.get('[class="mantine-Input-input mantine-Select-input mantine-sf9chw"]').eq(0).click({force:true});
//                cy.contains('Some College').click();
//                cy.wait(1500)
   
//                cy.get('[class="mantine-Input-input mantine-Select-input mantine-sf9chw"]').eq(1).click({force:true});
//                cy.contains('Own Home Outright').click();
//                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(2).type('0')
//                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(3).clear().type('15')
//                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(4).clear().type('11')
//                cy.wait(2500)
   
//                //Employement Information
//                cy.get('[class="mantine-Input-input mantine-Select-input mantine-sf9chw"]').eq(2).click({force:true});
//                cy.contains('Full Time').click();
//                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(5).type('Ten Hang Le')
//                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(6).type('1234567890')
//                cy.get('[class="mantine-Input-input mantine-Select-input mantine-sf9chw"]').eq(3).click({force:true})
//                cy.contains('Yearly').click();
//                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(7).clear().type('20000')
//                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(8).type('Manager')
//                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(9).clear().type('12')
//                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(10).clear().type('10')
//                //driver License details
//                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(11).clear().type('TH1234567890')
//                cy.get('[placeholder="Mayland"]').click({force:true})
//                cy.contains('Alaska').click();
//                cy.get('[placeholder="Select Date"]').eq(0).type('February 6, 2019',{force:true})
//                cy.get('[placeholder="Select Date"]').eq(1).type('February 6, 2029',{force:true})
   
//                //Finance Information
//                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(12).clear().type('10000')
//                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(13).clear().type('38')
//                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1ml3y8g"]').eq(9).clear().type('12')
//                cy.get('[class="mantine-Input-input mantine-TextInput-input mantine-1b3at5r"]').eq(1).clear().type('5.5',{force:true})
               
//        }