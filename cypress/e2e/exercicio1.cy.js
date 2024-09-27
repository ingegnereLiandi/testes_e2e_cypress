
// Exercícios

// Com o Cypress, escreva os códigos dos seguintes testes:

// Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;
// Visite a página de principal do AdoPet e teste os botões header;
// Visite a página de /login do Adopet;
// Visite a página de /home do Adopet;
// Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.


// https://adopet-frontend-cypress.vercel.app/



describe('Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção', ()=>{
    it('Visualizar tela adocao dos Pets', ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('a','Ver pets disponíveis para adoção').click();
    })
})


describe('Visite a página de principal do AdoPet e teste os botões header', ()=>{
     it('Acessar botoes headers',()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__home').click();
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('jacqueslacan@ipa.com');
        cy.get('[data-test="input-loginPassword"]').type('12deOliveira4');
        cy.get('[data-test="submit-button"]').click();
        })
})


describe('Visite a página de /home do Adopet;', ()=>{
    it.only('Acesso botao do Home', ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__home').click();
    })
})