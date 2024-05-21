export function Document_Signing(){

    cy.get("button").contains('Login').click()
    cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
    cy.get('[placeholder="Enter Password"]').type('Customer@123')
    cy.get("button").contains('Login').click()
    
    cy.wait(15000)
    // cy.get(".signature").eq(0).click()
    // cy.contains('Sign here').click({force:true})

    cy.get("#Buyer1_EC_Signature1").contains('Sign here').click()
    cy.wait(15000)
    // function canvasElement  () { 
        
    //     cy.get(`canvas[name="your-model-id|sign_1||"]`).then($c => new SignaturePad($c[0]));

    // class SignatureController {
    //     constructor(field, signPad) {
    //         this.field = field;
    //         this.signPad = signPad;
    //     }
    
    //     getValueAsString = () => {
    //         // The signature component has stored and drawn value at this moment
    //         this.signPad.then($c => {
    //             // But when I access the SignaturePad instance, it empties the canvas
    //             const value = $c.toData();
    //             // ...
    //         });
    //     }
    // }
    
    // Usage
    // const signature = () => new SignatureController(sign1, canvasElement());
    // const value = signature().signature().getValueAsString();

    return null;
}   
   
// } 