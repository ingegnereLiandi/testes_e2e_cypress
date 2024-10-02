

describe('Pagina de Cadastro', ()=>{

    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
    })


    it('Deve preencher os campos do login corretamente e autenticar o usuario na pagina',()=>{
      cy.login_correto('michelfoucault@ipa.com','12deOliveira4');
       
      })
    
    })