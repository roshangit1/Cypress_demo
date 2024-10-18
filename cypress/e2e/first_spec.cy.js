describe('template spec', () => {
  it('Visit page', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
  })

  it('Login page', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.contains("Customer Login").click()
    cy.get('#userSelect').select("Harry Potter")
    cy.contains("Login").click()
    cy.get('.logout').should('be.visible')

  })

})