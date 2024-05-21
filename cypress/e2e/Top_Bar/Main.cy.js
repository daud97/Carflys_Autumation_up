import { Blogs } from "./Blogs.cy"
import { Add_Complaints, View_Complaints } from "./Complaints.cy"
import { Calcualtor } from "./Finance_cal.cy"
import { Login } from "./Login.cy"
import { Add_Review, View_Reviews } from "./Reviews.cy"
import { Change_Password, Chats, Home_Page, Remember_Me, Settings } from "./Settings.cy"

describe('Top Bar',()=>{
    beforeEach(()=>{
        cy.viewport(1400, 850)
    })
    
    it.skip('Login' ,() =>{ 
        cy.visit('https://carflys-testing.vercel.app/')
        cy.get("button").contains("Login").click()
        Login()
    })
    it.skip('Finance Calculator' ,() =>{ 
        cy.visit('https://carflys-testing.vercel.app/')
        Calcualtor()
    })
    it.skip('Blogs' ,() =>{ 
        cy.visit('https://carflys-testing.vercel.app/')
        Blogs()
    })
    it.skip('Settings' ,() =>{ 
        cy.visit('https://carflys-testing.vercel.app/')
        Settings()
    })
    it.skip('Remember Me' ,() =>{ 
        cy.visit('https://carflys-testing.vercel.app/')
        Remember_Me()
    })
    it.skip('Home Page' ,() =>{ 
        cy.visit('https://carflys-testing.vercel.app/')
        Home_Page()
    })
    it.skip('Chats' ,() =>{ 
        cy.visit('https://carflys-testing.vercel.app/')
        Chats()
    })
    it.skip('Change Password' ,() =>{ 
        cy.visit('https://carflys-testing.vercel.app/')
        Change_Password()
    })
    it.skip('3.1 Add Complaint',()=>{
        cy.visit('https://carflys-testing.vercel.app/')
        Add_Complaints()
    })
    it('3.2 View Complaints',()=>{
        cy.visit('https://carflys-testing.vercel.app/')
        View_Complaints()
    })
    it.skip('4.1 Add Review',()=>{
        cy.visit('https://carflys-testing.vercel.app/')
        Add_Review()
    })
    it.skip('4.2 View Review',()=>{
        cy.visit('https://carflys-testing.vercel.app/')
        View_Reviews()
    })
})