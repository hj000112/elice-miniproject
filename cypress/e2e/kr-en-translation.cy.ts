describe('Language Conversion', () => {
  const resolutions = [
    { width: 1024, height: 768 , device:'desktop'}, // desktop
    { width: 600, height: 960 , device:'tablet'},  // tablet
    { width: 320, height: 568 , device:'mobile'}   // mobile
  ];

  for (const resolution of resolutions) {

  describe(`Resolution: ${resolution.device}`, () => {
    beforeEach(()=>{
      cy.visit('https://elice.io/')
      cy.wait(1000)

      cy.log(`${resolution.width}, ${resolution.height},${resolution.device}`);
      cy.viewport(resolution.width, resolution.height);
      cy.wait(1000)

      if(resolution.width <= 600){
        cy.getByData("LanguageIcon").eq(0).as('languageIcon');
      }else{
        cy.getByData("LanguageIcon").eq(1).as('languageIcon');
      }


    })

    it('application loading', () => {
      cy.visit('https://elice.io/')
    })
    

    it(`English Translation Test ${resolution.device}`, () => {

      cy.get('@languageIcon').click();
      cy.get('.MuiPopover-root > .MuiPaper-root').contains('English').click()
      cy.wait(2000);

      const englishRegex = /[A-Za-z]+/; 
      cy.contains('div', englishRegex); 

      const koreanRegex = /[가-힣]+/; 
      cy.contains(koreanRegex).should('not.exist');
      cy.contains('Contact').should('exist');


    })


    it(`Korean translation Test ${resolution.device}`, () => {
      cy.get('@languageIcon').click();
      cy.get('.MuiPopover-root > .MuiPaper-root').contains('한국어').click()
      cy.wait(2000);

      const koreanRegex = /[가-힣]+/; 
      cy.contains('div', koreanRegex).should('exist'); 
      cy.contains('도입 문의').should('exist');

      })
    })
  }
})