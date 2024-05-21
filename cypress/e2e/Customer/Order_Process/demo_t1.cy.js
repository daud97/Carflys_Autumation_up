
describe('My First Test', () =>
  it(
      'verify title-positve', () =>{
        cy.visit("https://carflys-testing.vercel.app/")
        cy.title().should('eq','Carflys')
      }
  ),
  // it(
  //   'verify title-negive test', () =>{
  //     cy.visit("https://carflys-testing.vercel.app/")
  //     cy.title().should('eq','Carflys123')
  //   }
  // )

 
)