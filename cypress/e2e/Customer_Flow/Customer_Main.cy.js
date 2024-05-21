import { Carflys_Protection, Carflys_Protection_Services, Delivery_Options, Offers, Order_Breakdown, Services } from "./Carflys_pro_serv.cy";
import { Cash, Cash_or_Finance } from "./Cash_or_Finance.cy";
import { Customer_Login } from "./Customer_Login.cy";
import { Document_Signing } from "./Document_Signing.cy";
import { Finance_Details } from "./Finance_details.cy";
import { Personal_Details } from "./Personal_Details.cy";
import { Select_Vehicle } from "./Select_vehicle.cy";
import { Payment, Stipulation } from "./Stipulation.cy";
import { View_Order } from "./View_Order.cy";

describe('Customer Main Flow',()=>{
    beforeEach(()=>{
        cy.viewport(1305, 790)
    })
    
    it('Customer Login' ,() =>{ 
        cy.visit('https://carflys-testing.vercel.app/')
        cy.get("button").contains("Login").click()
        Customer_Login()
    })
    it.skip('Select Vehicle' ,() =>{
        cy.visit('https://carflys-testing.vercel.app/')
        Select_Vehicle()
    })
    it.skip('Personal Details' ,() =>{
        cy.visit('https://carflys-testing.vercel.app/')
        Personal_Details()
    })
    it.skip('Cash or Finance' ,() =>{
        cy.visit('https://carflys-testing.vercel.app/')
        Cash_or_Finance()
    })
    it.skip('Buy Vehicle Outright' ,() =>{
        cy.visit('https://carflys-testing.vercel.app/')
        Cash()
    })
    it.skip('Finance Details' ,() =>{
        cy.visit('https://carflys-testing.vercel.app/')
        Finance_Details()
    })
    it.skip('Delivery Option' ,() =>{
        cy.visit('https://carflys-testing.vercel.app/')
        Delivery_Options()
    })
    it.skip('Carflys Protection' ,() =>{
        cy.visit('https://carflys-testing.vercel.app/')
        Carflys_Protection()
    })
    it.skip('Services' ,() =>{
        cy.visit('https://carflys-testing.vercel.app/')
        Services()
    })
    it('Order Breakdown' ,() =>{
        cy.visit('https://carflys-testing.vercel.app/')
        Order_Breakdown()
    })
    it.skip('Offers' ,() =>{
        cy.visit('https://carflys-testing.vercel.app/')
        Offers()
    })
    it('Stipulations' ,() =>{
        cy.visit('https://carflys-testing.vercel.app/')
        Stipulation()
    })
    it('Payment' ,() =>{
        cy.visit('https://carflys-testing.vercel.app/')
        Payment()
    })
    it.skip('Document Signing' ,() =>{
        cy.visit('https://carflys-testing.vercel.app/')
        Document_Signing()
    })
    it.skip('Order_Review' ,() =>{
        cy.visit('https://carflys-testing.vercel.app/')
        
    })








































    // it("Making Order by financing with Carflys",()=>{
       
    //     cy.viewport(1300, 790)
    //     cy.visit('https://carflys-testing.vercel.app/')
    //     cy.get("button").contains("Login").click()
        
    // //     Customer_Login()
    // //     Select_Vehicle()
    // // //     Personal_Details()
    // // //    Cash_or_Finance()
    // // // //      Finance_Details()
    // // //     Carflys_Protection_Services()
        
    // //     // Order_Breakdown()
    // // //    Offers()
    // // //      Stipulation()
    // //     View_Order()
    // //     Payment()
    // //     Document_Signing()
    //  });

})