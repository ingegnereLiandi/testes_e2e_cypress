

describe('Login no site Adopet', ()=>{
    
    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
    })

it('Deve preencher os campos do login incorretamente e exibir mensagens de erro especificas',()=>{
    
    cy.cadastro_incorreto('michelfoucaultipa.com', '12deoliveira44') 
    
    })

})

