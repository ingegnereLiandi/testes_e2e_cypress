

describe('Pagina de Cadastro', ()=>{
it('Preencher os campos do formulario incorretamente e exibir mensagens ao usuario',()=>{

  cy.visit('https://adopet-frontend-cypress.vercel.app');

  cy.get('[data-test="register-button"]').click();
  cy.get('[data-test="submit-button"]').click();  
  cy.contains('É necessário informar um endereço de email').should('be.visible');  //a partir daqui, usaremos meios de confirmar 
  //visualmente se o teste seguiu corretamente o 'caminho triste' atraves do should e be.visible
  cy.contains('Crie uma senha').should('be.visible');
  cy.contains('Repita a senha criada acima').should('be.visible');

  })

})