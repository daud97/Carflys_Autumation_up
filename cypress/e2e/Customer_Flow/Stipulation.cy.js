export function Stipulation(){  
    
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
   

///// Stipulation File Upload
cy.fixture('1.Proof of Income.pdf', {encoding: null}).as('Pdf1')
cy.fixture('2.Proof of Residence.pdf', {encoding: null}).as('Pdf2')
cy.fixture('3.Proof of Insurance.pdf', {encoding: null}).as('Pdf3')
cy.fixture('4.Drivers License.pdf', {encoding: null}).as('Pdf4')
cy.fixture('5.Refernces.pdf', {encoding: null}).as('Pdf5')
cy.wait(2500)

cy.get('input[type="file"]').invoke("show").eq(0).selectFile("@Pdf1")
cy.get('input[type="file"]').invoke("show").eq(1).selectFile("@Pdf2")
cy.get('input[type="file"]').invoke("show").eq(2).selectFile("@Pdf3")
cy.get('input[type="file"]').invoke("show").eq(3).selectFile("@Pdf4")
cy.get('input[type="file"]').invoke("show").eq(4).selectFile("@Pdf5")
cy.wait(3000)
cy.get("button").contains("Save and Continue").click({force:true})

cy.wait(5000)
// this.skip();    
}  
export function Payment(){
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
    

    // Payment 
    cy.get("button").contains("Save and Continue").click({force:true}) 
    
       cy.wait(2000)
    
}