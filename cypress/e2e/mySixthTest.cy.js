const token = 'abcd123';

context('My sixth test', () => {
    beforeEach(() => {
        cy.fixture('example').then(function (data) {
            this.data = data;
            cy.log('THIS:' ,this.data)
        })
    })

    
    it('sets and gets a token from local storage', () => {
        cy.setLocalStorage('token', token)
        cy.getLocalStorage('token').should('eq', token)
    });
    
    it('overwrites the type command by using sensetive characters', () => {
        cy.visit('/commands/actions')
        cy.findByPlaceholderText('Email').type('test@email.com')
        cy.findByPlaceholderText('Email').type('test@email.com', {sensitive: true})
    });
    
});
