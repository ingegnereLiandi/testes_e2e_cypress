
// Suite de testes


// Primeira forma de captura de elementos
// Utilizando o Devtools para capturar elementos

describe('Pagina de Cadastro', () => {

  beforeEach(()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app');
  })

  it('Deve preencher os campos do formulario corretamente para cadastrar um novo usuario', () => {

      cy.cadastro_correto('Josef Breuer', 'josefbreuer@ipa.com', '12deOliveira4', '12deOliveira4')

  })

  // Utilizando o proprio Cypress para capturar os elementos

describe('Pagina de Cadastro - Playground', ()=>{

  it('Deve preencher os campos do formulario corretamente para cadastrar um novo usuario utilizando playground', () => {

      cy.cadastro_correto_playground('Anna Freud', 'annafreud@ipa.com', '12deOliveira4', '12deOliveira4')
  
  
    })
  
  })

})

