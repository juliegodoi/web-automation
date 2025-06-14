# Web Automation

Projeto de automação de testes para login e cadastro utilizando [Cypress](https://www.cypress.io/).

---

## Sumário

- [Teste Manual de Login](#teste-manual-de-login)
- [Teste Automatizado de Login](./cypress/e2e/login.cy.js)
- [Teste Manual de Cadastro](#teste-manual-de-cadastro)
- [Teste Automatizado de Cadastro](./cypress/e2e/cadastro.cy.js)
- [Reporte de Bug](#-reporte-de-bug)
- [Como Testar o Projeto](#-como-testar-o-projeto)

---

## Teste Manual de Login

### ✅ **Cenário 1: Login com Sucesso**

**Requisito:** Quando digitar email e senha corretos, deve logar e apresentar a mensagem: **Login realizado**.

**Passos:**

- Acessar a página de login
- Digitar email: `eduardo2@gmail.com`
- Digitar senha: `123456`
- Clicar em **LOGIN**

**Resultado Esperado:** Exibir a mensagem “**Login realizado”**  
**Resultado Obtido:** Passou! Exibiu a mensagem esperada.

---

### ✅ **Cenário 2: Email inválido**

**Requisito:** Quando o email estiver em formato inválido, deve apresentar a mensagem: **E-mail inválido**.

**Passos:**

- Acessar a página de login
- Digitar email: `eduardo2` (inválido)
- Digitar senha: `123456`
- Clicar em **LOGIN**

**Resultado Esperado:** Exibir a mensagem “**E-mail inválido”**  
**Resultado Obtido:** Passou! Exibiu a mensagem esperada.

---

### ✅ **Cenário 3: Senha inválida**

**Requisito:** Quando a senha for incorreta, deve apresentar a mensagem: **Senha inválida**.

**Passos:**

- Acessar a página de login
- Digitar email: `eduardo2@gmail.com`
- Digitar senha: `123` (inválida)
- Clicar em **LOGIN**

**Resultado Esperado:** Exibir a mensagem “**Senha inválida”**  
**Resultado Obtido:** Passou! Exibiu a mensagem esperada.

---

### ✅ **Cenário 4: Campos vazios**

**Requisito:** Quando os campos de login estiverem vazios, deve apresentar a mensagem: **E-mail inválido**.

**Passos:**

- Acessar a página de login
- Não digitar email
- Não digitar senha
- Clicar em **LOGIN**

**Resultado Esperado:** Exibir a mensagem “**E-mail inválido”**  
**Resultado Obtido:** Passou! Exibiu a mensagem esperada.

---

## Teste Manual de Cadastro

### ✅ **Cenário 1: Cadastro com Sucesso**

**Requisito:** Quando todos os campos forem preenchidos corretamente, deve apresentar a mensagem: **Cadastro realizado!**

**Passos:**

- Acessar a página de cadastro
- Digitar nome: `Maria`
- Digitar email: `mariaO99@gmail.com`
- Digitar senha: `123456`
- Clicar em **CADASTRAR**

**Resultado Esperado:** Exibir a mensagem “**Cadastro realizado!**”  
**Resultado Obtido:** Passou! Exibiu a mensagem esperada.

---

### ⚠️ **Cenário 2: Nome inválido**

**Requisito:** Quando o nome for inválido, deve apresentar a mensagem: **O campo nome deve ser prenchido corretamente**

**Passos:**

- Acessar a página de cadastro
- Digitar nome: `` (inválido - espaço)
- Digitar email: `mariaO99@gmail.com`
- Digitar senha: `123456`
- Clicar em **CADASTRAR**

**Resultado Esperado:** Exibir a mensagem “**O campo nome deve ser prenchido corretamente**”  
**Resultado Obtido:** Não passou. Cadastro foi realizado. **(BUG)**

---

### ✅ **Cenário 3: Email inválido**

**Requisito:** Quando o email estiver em formato inválido, deve apresentar a mensagem: **O campo e-mail deve ser prenchido corretamente**

**Passos:**

- Acessar a página de cadastro
- Digitar nome: `Maria`
- Digitar email: `mariaO99` (inválido)
- Digitar senha: `123456`
- Clicar em **CADASTRAR**

**Resultado Esperado:** Exibir a mensagem “**O campo e-mail deve ser prenchido corretamente**”  
**Resultado Obtido:** Passou! Exibiu a mensagem esperada.

---

### ✅ **Cenário 4: Senha inválida**

**Requisito:** Quando a senha tiver menos de 6 caracteres, deve apresentar a mensagem: **O campo senha deve ter pelo menos 6 dígitos**

**Passos:**

- Acessar a página de cadastro
- Digitar nome: `Maria`
- Digitar email: `mariaO99@gmail.com`
- Digitar senha: `123` (inválida)
- Clicar em **CADASTRAR**

**Resultado Esperado:** Exibir a mensagem “**O campo senha deve ter pelo menos 6 dígitos**”  
**Resultado Obtido:** Passou! Exibiu a mensagem esperada.

---

### ✅ **Cenário 5: Campos vazios**

**Requisito:** Quando os campos estiverem vazios, deve apresentar a mensagem: **O campo nome deve ser prenchido**

**Passos:**

- Acessar a página de cadastro
- Não preencher nenhum campo
- Clicar em **CADASTRAR**

**Resultado Esperado:** Exibir a mensagem “**O campo nome deve ser prenchido**”  
**Resultado Obtido:** Passou! Exibiu a mensagem esperada.

---

# Reporte de Bug

### ❌ Erro ao cadastrar com nome inválido

**Descrição:**  
Ao digitar um nome inválido (ex: espaço), o sistema permite o cadastro normalmente, quando deveria exibir uma mensagem de erro.

**Passo a passo:**

1. Acessar a página de cadastro: [https://automationpratice.com.br/register](https://automationpratice.com.br/register)
2. Preencher o campo **Nome** com o valor: `` (espaço)
3. Preencher o campo **E-mail** com: `mariaO99@gmail.com`
4. Preencher o campo **Senha** com: `123456`
5. Clicar em **CADASTRAR**

**Ambiente:**  
Windows 11 - Google Chrome

**Resultado Atual:**  
Cadastro realizado com sucesso

**Comportamento Esperado:**  
Exibir a mensagem: **“O campo nome deve ser prenchido corretamente”**

**Evidências:**  
![image.png](attachment:01610b2c-7897-43d9-99c6-eda03c8a9348:image.png)  
![image.png](attachment:4d06e459-926b-4886-afba-a0f5fe3e1658:image.png)

---

## Como Testar o Projeto

1. **Clonar o repositório:**
```bash
git clone https://github.com/seu-usuario/web-automation.git
cd web-automation
```

2. **Instalar as dependências do projeto:**
```bash
npm install
```

3. **Executar os testes automatizados**
```bash
npx cypress open
```
