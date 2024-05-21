export function Settings(){

    cy.get("button").contains('Login').click()
    cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
    cy.get('[placeholder="Enter Password"]').type('Customer@123')
    cy.get("button").contains('Login').click()  

    cy.get("button").get(".mantine-egh40j").eq(0).click({force:true})
    cy.contains("Dashboard").click()
    cy.wait(4500)

    cy.get("button").get(".mantine-UnstyledButton-root").eq(13).click()
    cy.contains("7. Settings").click()
    cy.wait(4500)

    //Edit Profile
    cy.get('[placeholder="Enter First Name"]').clear().type("Alyaan")
    cy.get('[placeholder="Enter Last Name"]').clear().type("Khan")
    cy.get('[placeholder="Enter Cell Number"]').clear().type("+1(444)-444-4444")
    cy.get('[placeholder="Enter Zip Code"]').eq(0).type("10001")
    cy.get('[placeholder="Enter State/Location"]').invoke('val').should('eq', 'New York')
    // cy.fixture('Alyaan.jpeg', {encoding: null}).as('pic1')
    // cy.get(".mantine-1avyp1d").contains("Drag and drop a file").invoke("show").selectFile("@pic1")
    // cy.get('input[type="file"]').invoke("show").eq(0).selectFile("@pic1")

    cy.get(".mantine-UnstyledButton-root").get("button").contains("Reset").click({force:true})    
    cy.wait(4500)

    cy.get("button").contains("Update").click()
    cy.contains("Profile updated successfully").should("exist")

}

export function Change_Password(){

    cy.get("button").contains('Login').click()
    cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
    cy.get('[placeholder="Enter Password"]').type('Customer@123')
    cy.get("button").contains('Login').click()  

    cy.get("button").get(".mantine-egh40j").eq(0).click({force:true})
    cy.contains("Dashboard").click()
    cy.wait(4500)

    cy.get("button").get(".mantine-UnstyledButton-root").eq(13).click()
    cy.contains("7. Settings").click()
    cy.wait(4500)

    // change Password
    cy.get("button").get(".mantine-UnstyledButton-root").eq(1).click()
    cy.contains("Password").click()
    cy.wait(4500)

    cy.contains('Old Password').next("div").find('[type="password"]').clear().type('Customer@123')
    // cy.get("button").get(".mantine-UnstyledButton-root").eq(0).click()
    cy.contains('New Password').next("div").find('[type="password"]').clear().type('Customer@1234')
    cy.contains('Confirm Password').next("div").find('[type="password"]').clear().type('Customer@1234')
    cy.wait(1500)

    // Update Password
    cy.get("button").get(".mantine-1adt2t8").eq(3).click()
    cy.contains("Update").click()
    // cy.contains("Password changed").should("exist")
}

export function Remember_Me(){
    cy.get("button").contains('Login').click()

    cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
    cy.get('[placeholder="Enter Password"]').type('Customer@123')

    cy.wait(3000)
    // Remember_Me
    cy.get('[type="checkbox"]').eq(0).check({force: true}).should('be.checked')
    cy.wait(2000)

    cy.get("button").contains('Login').click()  

}
export function Home_Page(){

    cy.get("button").contains('Login').click()
    cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
    cy.get('[placeholder="Enter Password"]').type('Customer@123')
    cy.get("button").contains('Login').click()  

    cy.get("button").get(".mantine-egh40j").eq(0).click({force:true})
    cy.contains("Home").click()
    cy.wait(4500)

    // order Now Button
    cy.get("button").get(".mantine-1wpc1xj").contains("Order Now").eq(0).click({force:true})
    cy.wait(2000)
    cy.get("button").get(".mantine-egh40j").eq(0).click({force:true})
    cy.contains("Home").click()
    cy.wait(4500)

    // Search Vehicle
    cy.get('[placeholder="Select year"]').click()
    cy.contains('2013').click()
    cy.get('[placeholder="Select Make"]').click()
    cy.contains('Ford').click()
    // cy.get(".mantine-Select-input").eq(1).click()
    // cy.contains('F-150').click()
    cy.wait(4500)
    cy.get("button").get(".mantine-1wpc1xj").contains("Search").click({force:true})
    cy.wait(2000)

    cy.get("button").get(".mantine-egh40j").eq(0).click({force:true})
    cy.contains("Home").click()
    cy.wait(4500)
    // cy.get("button").get(".mantine-Center-root").eq(1).click({force:true})
    // cy.contains("Messenger").eq(0).click()
    // cy.wait(2000)
    cy.get("button").get(".mantine-Center-root").eq(1).click({force:true})
    cy.contains("WhatsApp").eq(0).click()
    
}

export function Chats(){

    cy.get("button").contains('Login').click()
    cy.get('[placeholder="Enter Email"]').type('dosowow722@goulink.com')
    cy.get('[placeholder="Enter Password"]').type('Customer@123')
    cy.get("button").contains('Login').click()  

    // Navigate on Dashboard
    cy.get("button").get(".mantine-px51jk").eq(1).click({force:true})
    cy.contains("Dashboard").click()
    cy.wait(3000)
    cy.get("button").get(".mantine-1oe2ane").eq(5).click()
    cy.contains("6. Chats").click()
    cy.wait(2000)

    // select Admin Account for Chat
    cy.get('[placeholder="Search Users"]').type('admin').click()
    cy.contains("Misterss Admin").click()
    cy.wait(3000)

    // Type A Message
    cy.get('[placeholder="Type a message..."]').type('Hello this is Alyaan Khan')
    cy.get("button").contains('Send').click()

    // cy.get('input[type="file"]').invoke("show").selectFile("@fixtures")
    // cy.get("button").contains('Send').click()

    cy.fixture('Mitsu.jpeg', {encoding: null}).as('pic1')
    cy.fixture('Mitsu.jpeg', {encoding: null}).as('pic2')
    cy.fixture('Mitsu.jpeg', {encoding: null}).as('pic3')
    cy.fixture('Mitsu.jpeg', {encoding: null}).as('pic4')

    cy.get('input[type="file"]').invoke("show").invoke("show").selectFile(['@pic1', '@pic2','@pic3','@pic4'])
    //cy.get('input[type="file"]').invoke("show").eq(0).selectFile("@spic1")
    cy.get("button").contains('Send').click()
}

//cy.get("button").get(".mantine-UnstyledButton-root")