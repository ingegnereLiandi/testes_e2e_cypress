
// Exercícios

// Com o Cypress, escreva os códigos dos seguintes testes:

// Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;
// Visite a página de principal do AdoPet e teste os botões header;
// Visite a página de /login do Adopet;
// Visite a página de /home do Adopet;
// Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.


// https://adopet-frontend-cypress.vercel.app/



describe('Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção', ()=>{

    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');

    })

    it('Visualizar tela adocao dos Pets', ()=>{
        
        cy.contains('a','Ver pets disponíveis para adoção').click();
    })

    it('Acessar botoes headers',()=>{
       
        cy.acesso( 'jacqueslacan@ipa.com', '12deOliveira4')

    })
    
    it('Acesso botao do Home', ()=>{
        
        cy.get('.header__home').click(); //'Visite a página de /home do Adopet'
    })
    
})








