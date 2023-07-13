describe('My test', () => {
    // it('types into an email field', () => {
    //     cy.visit('/commands/actions')
    //     cy.findByPlaceholderText('Email').type('test@email.com')
    //     cy.wait(1000).then(() => {
    //         console.log('test is finished')    
    //     })
    // });
    it('shows an active class for the current page', () => {
        cy.visit('/commands/actions')
        cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
    });

    it('should not have an active class on inactive pages', () => {
        cy.visit('/commands/actions')
        cy.get('.dropdown-menu').find('li').first().should('not.have.class', 'active')
        .find('a').should('have.attr', 'href', '/commands/querying')
    });
    
    
});
