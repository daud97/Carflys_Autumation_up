import { backendURL } from "./URL.cy";

   export function Blogs(){
      cy.intercept("POST", `${backendURL}/auth/login`).as("login");
      cy.intercept("GET", `${backendURL}/blog?customerScreen=true`).as("getblogs");
      cy.get("button").contains('Login').click()
      cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
      cy.get('[placeholder="Enter Password"]').type('Customer@123')
      cy.get("button").contains('Login').click()  
      cy.wait("@login").then(({ request, response }) => expect(response.statusCode).to.equal(200));
     // cy.wait(5000)
      //   Click on Blogs
      cy.get("button").get(".mantine-Text-root").eq(2).click()
      cy.contains("Blogs").click({force:true})
      cy.wait("@getblogs").then(({ request, response }) => expect(response.statusCode).to.equal(200));
      //cy.wait(4500)

      
      cy.wait(4500)

      // Search Blog
      cy.get('[placeholder="Search Blogs"]').type('Tesla Model 3')
      // cy.contains("Tesla Model 3").should('exist')
      
      cy.wait(5000)

      cy.get("button").get(".tabler-icon-heart").eq(0).click({force:true}) 

      cy.wait(5000)
      // View Blog//Specific Blog
      cy.get(".mantine-Paper-root").eq(0).click({force:true})

      cy.wait(5000)

      cy.get("button").get(".mantine-ActionIcon-root").eq(0).click({force:true}) 
      
      cy.wait(4500)

      cy.get('[placeholder="Add a comment"]').type('Wooow Informative Stufff')
      cy.get("button").get(".mantine-oas42i").click()
      cy.wait(2500)


   } 
        
        
        
        