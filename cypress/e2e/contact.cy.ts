describe('Contact Page Interaction',()=>{
    it('should successfully submit the survey form',()=>{
        cy.visit('https://elice.io/')
        cy.contains('a','도입 문의').click()
        cy.contains('h3','비즈니스').should('exist')
        cy.contains('h6','IT').click()
        cy.contains('h3','직군/직무').should('exist')
        cy.contains('h6','엔지니어링').click()
        cy.contains('h3','사용인원').should('exist')
        cy.contains('h6','1~10명').click()
        cy.contains('h3','정보를 입력해 주세요.').should('exist')
    })
})