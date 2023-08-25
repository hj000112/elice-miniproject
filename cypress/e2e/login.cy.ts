
describe('Login Functionality', () => {
    
    
    it('Check the Login Disable page',()=>{
        cy.visit('https://elice.io/')
        cy.wait(1000)
        cy.contains('button','로그인').should('exist').click()
        cy.wait(1000)
        cy.url().should('include', '/accounts')
        cy.contains('button','로그인')
        cy.contains('button','구글로 로그인')
        cy.contains('button','카카오로 로그인')
    })

    it('check login password',()=>{
        cy.visit('https://accounts.elice.io/accounts')
        cy.wait(1000)
        cy.get('input[placeholder="비밀번호"]').should('exist').type('password')
        cy.getByData("VisibilityOutlinedIcon").parent().click()
        

    })

    it('should navigate to the profile page after successful login',() => {
        cy.visit('https://accounts.elice.io/accounts')
        cy.get('input[placeholder="이메일"]').should('exist').type(Cypress.env('login_email'))
        cy.get('input[placeholder="비밀번호"]').should('exist').type(Cypress.env('login_pw'))
        cy.get('#mui-3').click()

        cy.wait(1000)
        cy.viewport(1024, 768);
        cy.visit('https://elice.io/')
        cy.getByData("PersonIcon").should('exist').eq(1).parent().click()
        cy.wait(1000)
        cy.get('.css-1ontqvh > .MuiButtonBase-root').click()

        cy.contains('엘리스 아카데미').should('exist')
        cy.contains('엘리스트랙 KDT').should('exist')
        cy.contains('비대면 바우처').should('exist')

             

        })





})