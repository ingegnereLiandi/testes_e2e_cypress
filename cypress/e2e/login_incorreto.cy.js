

describe('Login no site Adopet', ()=>{
    
    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST','https://adopet-api-i8qu.onrender.com/adotante/login',{
            statusCode:400,
        }).as('stubPost')
    })

it('Deve preencher os campos do login incorretamente e exibir mensagens de erro especificas',()=>{
    
    cy.cadastro_incorreto('michelfoucaultipa.com', '12deoliveira44') 
    
    })

it('Deve falhar mesmo que os campos sejam preenchidos corretament',()=>{
    cy.login_correto('michelfoucalt@ipa.com', '12deOliveira4')
    cy.wait('@stubPost')
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')

})

})

