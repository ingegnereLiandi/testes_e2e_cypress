
// Suite de testes


// Primeira forma de captura de elementos
// Utilizando o Devtools para capturar elementos

// describe('Pagina de Cadastro', () => {
//   it('Deve preencher os campos do formulario corretamente para cadastrar um novo usuario', () => {
//     cy.visit('https://adopet-frontend-cypress.vercel.app');
    // cy.contains('a','Cadastrar').click();
    // cy.get('input[name="nome"]').type('Jacques Lacan');
    // cy.get('input[name="email"]').type('jacqueslacan@ipa.com');
    // cy.get('input[name="password"]').type('12deOliveira4');
    // cy.get('input[name="confirm_password"]').type('12deOliveira4');
    // cy.contains('button','Cadastrar').click();

//   })
// })

// Utilizando o proprio Cypress para capturar os elementos

describe('Pagina de Cadastro', ()=>{
it('Deve preencher os campos do formulario corretamente para cadastrar um novo usuario',()=>{

  cy.visit('https://adopet-frontend-cypress.vercel.app');
  cy.get('[data-test="register-button"]').click();
  cy.get('[data-test="input-name"]').type('Maxwell Fernandez');
  cy.get('[data-test="input-email"]').type('maxwellfernandez@ipa.com');
  cy.get('[data-test="input-password"]').type('12deOliveira4');
  cy.get('[data-test="input-confirm-password"]').type('12deOliveira4');
  cy.get('[data-test="submit-button"]').click();  

  })

})