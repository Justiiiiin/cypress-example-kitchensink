context('My Fifth test', () => {
   
    
    it('pulls data from a fixture', () => {
        cy.fixture('example').then((data) => {
            cy.log('DATA:', data)
        })
    });
    
    it('Updates fixture data inline', () => {
        cy.fixture('example').then((data) => {
            data.email = 'updated@mail.com'
            cy.log('UPDATED:', data)
        })
    });
    
})
