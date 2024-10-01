// Exercícios

// Refatore os testes já realizados aplicando o método beforeEach().

// Visite a página principal do AdoPet e verifique se o title com o 
// texto “AdoPet” está presente no html.

// Visite a página principal do AdoPet e verifique se o texto “Quem ama 
// adota!” está presente no html.

// Visite a página principal do AdoPet e verifique se o texto “Adotar pode 
// mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!”
// está presente no html.

// Teste o login com um fluxo diferente: Visite a página principal do Adopet, 
// clique no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login.


describe('',()=>{

    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app')
    })

    it('Deve visitar a página principal do AdoPet e verifique se o title com o \
        texto “AdoPet” está presente no html.', ()=>{

        cy.get('.initial > img').click();
     
    })


    it('Deve vivistar a página principal do AdoPet e verifique se o texto \
        “Quem ama adota!” está presente no html', ()=>{

        cy.contains('Quem ama adota!').should('be.visible');
    })


    it('Deve visitar a página principal do AdoPet e verifique se o texto \
        “Quem ama adota!” está presente no html.',()=>{

        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');    
    })

    it('Deve visiar a página principal do Adopet, clicar no botão de \
        ícone de mensagem no header e escrever nome e senha válidos na página de login.',()=>{

        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('jacqueslacan@ipa.com');
        cy.get('[data-test="input-loginPassword"]').type('12deOliveira4');
        cy.get('[data-test="submit-button"]').click();

        
       
        
    })

})
