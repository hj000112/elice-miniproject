describe('Check Products Menu',()=>{
    it('lxp',()=>{
        cy.visit('https://elice.io/products/lxp')
        cy.viewport(1024, 768);
        cy.wait(2000)
        cy.get('body').then(($body) => {
            $body[0].scrollTo(0, $body[0].scrollHeight);
          });
        cy.get('#엘리스_lxp_도입_기업_사례').scrollIntoView();
        cy.wait(1000)
        cy.contains('h6','혁신적인 DX 교육을 통한 디지털 역량 향상').should('exist')
        cy.contains('h6','한국인공지능협회가 선택한 올인 LMS 플랫폼은?').should('exist')


    })

    it('test',()=>{

        cy.visit('https://elice.io/products/test/info')
        cy.wait(1000)
        cy.get('section').eq(2).scrollIntoView();
        cy.wait(1500)
        cy.contains('간편한 문제 출제')
    })

    it('cloud',()=>{

        cy.visit('https://elice.io/products/cloud/info')
        cy.wait(1000)
        cy.get('section').eq(1).scrollIntoView();
        cy.wait(1500)
        cy.contains('button','엘리스프로젝트 체험해보기').click()
    })
})