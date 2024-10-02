
Cypress.Commands.add('login_correto', (email, password) => { 

    cy.get('[data-test="input-loginEmail"]').type(email);
    cy.get('[data-test="input-loginPassword"]').type(password);
    cy.get('[data-test="submit-button"]').click();  
})


Cypress.Commands.add('login_incorreto', (email, password) => { 

    cy.get('[data-test="input-loginEmail"]').type(email);
    cy.get('[data-test="input-loginPassword"]').type(password);
    cy.get('[data-test="submit-button"]').click();  

 })

 Cypress.Commands.add('cadastro_correto', (name, email, password) => { 

    cy.contains('a','Cadastrar').click();
    cy.get('input[name="nome"]').type(name);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="confirm_password"]').type(password);
    cy.contains('button','Cadastrar').click();
  })

Cypress.Commands.add('cadastro_correto_playground', (nome, email, senha) => { 

    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type(nome);
    cy.get('[data-test="input-email"]').type(email);
    cy.get('[data-test="input-password"]').type(senha);
    cy.get('[data-test="input-confirm-password"]').type(senha);
    cy.get('[data-test="submit-button"]').click();  
})


Cypress.Commands.add('cadastro_incorreto', (email, pwd) => { 

    cy.login_incorreto(email, pwd)
    cy.contains('Por favor, verifique o email digitado').should('be.visible');
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');

})


Cypress.Commands.add('acesso', (email, pwd) => { 

    cy.get('.header__home').click();
    cy.get('.header__message').click();
    cy.get('[data-test="input-loginEmail"]').type(email);
    cy.get('[data-test="input-loginPassword"]').type(pwd);
    cy.get('[data-test="submit-button"]').click();

})





// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })