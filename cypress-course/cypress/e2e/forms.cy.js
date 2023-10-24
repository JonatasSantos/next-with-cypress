describe(('form tests'), () => {
    beforeEach(() => {
        cy.visit('/forms')
    })

    it('Test subscribe form', () => {
        cy.contains(/Testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('jonatasrafael97@gmail.com')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: jonatasrafael97@gmail.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: jonatasrafael97@gmail.com!/i).should('not.exist')


        cy.get('@subscribe-input').type('jonatasrafael97@gmail.io')
        cy.contains(/Invalid email: jonatasrafael97@gmail.io!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Invalid email: jonatasrafael97@gmail.io!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Invalid email: jonatasrafael97@gmail.io!/i).should('not.exist')

        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')
    })
})