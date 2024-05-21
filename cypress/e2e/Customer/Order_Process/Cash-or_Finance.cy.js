import { Finance_details } from "./finance_details.cy";

export const Cash_or_Finance =()=>{
       
                
    cy.get('[class="mantine-69fb57 mantine-Radio-radio"]').eq(0).check({force:true}).should('be.checked');
    //Buy Vehicle Outright
    // //cy.get('[class="mantine-69fb57 mantine-Radio-radio"]').eq(1).check({force:true}).should('be.checked');
    cy.get("button").contains('Save and Continue').click({force:true});
    cy.wait(1500)
}  

// describe('Conditional Page Navigation Tests', () => {
//     const page = 'finance_details'; 
  
//     it(`Should navigate to ${Finance_details} page based on condition`, () => {
//       if (page === 'Cash or Finance') {
//         cy.visit('/finance_details');
//       } else {
//         cy.visit('/cash_or_finance');
//       }
     
//     });
//   });           
