import { Cash_or_Finance } from "./Cash-or_Finance.cy";
import { customer_login } from "./Customer_Login.cy"
import { order_finanace } from "./Order_Finance.cy"
import { Finance_details } from "./finance_details.cy";

describe('Order Process',()=>{

    it("Making Order by financing with Carflys",()=>{
       
        cy.viewport(1300, 790)
        cy.visit('https://carflys-testing.vercel.app/')
        cy.get("button").contains("Login").click()
        customer_login()
        order_finanace()
        Cash_or_Finance()
        // Finance_details()

        
     });
})