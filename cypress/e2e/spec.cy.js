describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.contains('a','Cadastrar').click();
    cy.get('input[name="nome"]').type('Jacques Lacan');
    cy.get('input[name="email"]').type('jacqueslacan@ipa.com');
    cy.get('input[name="password"]').type('12deOliveira4');
    cy.get('input[name="confirm_password"]').type('12deOliveira4');
    cy.contains('button','Cadastrar').click();

  })
})