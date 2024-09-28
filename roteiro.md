Funcionalidade: Cadastro no site Adopet

Cenário: Realizar um cadastro no site com sucesso

Passos:

O usuário acessa a página de cadastro.
O usuário preenche o campo "Nome".
O usuário preenche o campo "E-mail" com um endereço de e-mail válido.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema processa as informações fornecidas.

Regra de Negócio:
E-mail e senha são campos obrigatórios para o cadastro.

------------------------------------------------------------------------------------------------------


Funcionalidade: Cadastro no site Adopet

Cenário: Falha na tentativa de cadastro.

Passos:

O usuário acessa a página de cadastro.
O usuário deixa os campos obrigatorios (nome, email, senha e confirmacao de senha) em branco.
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema valida os campos obrigatorios em branco.
O sistema exibe mensagens de erro indicando que os campos obrigatorios devem ser preenchidos.

------------------------------------------------------------------------------------------------------


Funcionalidade: Login no site Adopet

Cenário: Login no sistema com sucesso.

Passos:

O usuário acessa a página de login.
O usuário dinsere seu email "michelfoucalt@ipa.com" e a senha "12deOliveira4" nos campos correspondentes.
O usuário clica no botão "Entrar".

Resultados Esperados:
O sistema autentica as credenciais fornecidas.
O sistema redireciona o usuario para a pagina "/home".

-----------------------------------------------------------------------------------------------------------

