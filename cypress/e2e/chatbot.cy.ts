describe('Chatbot Interaction',()=>{
    it('should open an iframe when chatbot is clicked',()=>{
        cy.visit('https://elice.io/')
        cy.wait(2000)
        cy.get('#ch-plugin-entry') // 외부 요소 선택
            .find('div')
            .shadow()
            .find('button')
            .click()

    
            cy.get('#ch-plugin-script').get('iframe').should('exist')        
    })
})