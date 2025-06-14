/// <reference types="cypress"/>

describe('Cadastro', () => {
	
	// Cenário 1
	it('Cadastro com sucesso', () => {
		// Passo 1 - Acessar página de cadastro
		cy.visit('https://automationpratice.com.br/register');
		
		// Passo 2 - Preencher nome válido
		cy.get('#user').type('Maria');
		
		// Passo 3 - Preencher email válido
		cy.get('#email').type('mariaO99@gmail.com');
		
		// Passo 4 - Preencher senha válida
		cy.get('#password').type('123456');
		
		// Passo 5 - Clicar em CADASTRAR
		cy.get('#btnRegister').click();
		
		// Passo 5 - Validar sucesso
		cy.contains('#swal2-title', 'Cadastro realizado!').should('be.visible');
	})

	// Cenário 2
	it('Nome inválido', () => {
		// Passo 1 - Acessar página de cadastro
		cy.visit('https://automationpratice.com.br/register');
		
		// Passo 2 - Preencher nome inválido
		cy.get('#user').type('');
		
		// Passo 3 - Preencher email válido
		cy.get('#email').type('mariaO99@gmail.com');
		
		// Passo 4 - Preencher senha válida
		cy.get('#password').type('123456');
		
		// Passo 5 - Clicar em CADASTRAR
		cy.get('#btnRegister').click();
		
		// Passo 5 - Validar erro
		cy.get('.errorLabel').should('have.text', 'O campo nome deve ser prenchido corretamente');
	})
	
	// Cenário 3
	it('Email inválido', () => {
		// Passo 1 - Acessar página de cadastro
		cy.visit('https://automationpratice.com.br/register');
		
		// Passo 2 - Preencher nome válido
		cy.get('#user').type('Maria');
		
		// Passo 3 - Preencher email inválido
		cy.get('#email').type('mariaO99');
		
		// Passo 4 - Preencher senha válida
		cy.get('#password').type('123456');
		
		// Passo 5 - Clicar em CADASTRAR
		cy.get('#btnRegister').click();
		
		// Passo 5 - Validar erro
		cy.get('.errorLabel').should('have.text', 'O campo e-mail deve ser prenchido corretamente');
	})
	
	// Cenário 4
	it('Senha inválida', () => {
		// Passo 1 - Acessar página de cadastro
		cy.visit('https://automationpratice.com.br/register');
		
		// Passo 2 - Preencher nome válido
		cy.get('#user').type('Maria');
		
		// Passo 3 - Preencher email inválido
		cy.get('#email').type('mariaO99@gmail.com');
		
		// Passo 4 - Preencher senha válida
		cy.get('#password').type('123');
		
		// Passo 5 - Clicar em CADASTRAR
		cy.get('#btnRegister').click();
		
		// Passo 5 - Validar erro
		cy.get('.errorLabel').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos');
	})
	
	// Cenário 5
	it('Campos vazios', () => {
		// Passo 1 - Acessar página de cadastro
		cy.visit('https://automationpratice.com.br/register');
		
		// Passo 2 - Clicar em CADASTRAR
		cy.get('#btnRegister').click();
		
		// Passo 5 - Validar erro
		cy.get('.errorLabel').should('have.text', 'O campo nome deve ser prenchido');
	})

})