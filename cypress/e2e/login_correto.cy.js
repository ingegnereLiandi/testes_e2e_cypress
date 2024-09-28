

describe('Pagina de Cadastro', ()=>{

    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
    })


    it('Deve preencher os campos do login corretamente e autenticar o usuario na pagina',()=>{


        cy.get('[data-test="input-loginEmail"]').type('michelfoucault@ipa.com');
        cy.get('[data-test="input-loginPassword"]').type('12deOliveira4');
        cy.get('[data-test="submit-button"]').click();  
    
      })
    
    })