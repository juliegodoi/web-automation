/// <reference types="cypress"/>

describe('Login', () => {
	
	// Cenário 1
	it('Login com sucesso', () => {
		// Passo 1 - Acessar página de login
		cy.visit('https://automationpratice.com.br/login');
		
		// Passo 2 - Preencher email válido
		cy.get('#user').type('eduardo2@gmail.com');
		
		// Passo 3 - Preencher senha válida
		cy.get('#password').type('123456');
		
		// Passo 4 - Clicar em LOGIN
		cy.get('#btnLogin').click();
		
		// Passo 5 - Validar sucesso
		cy.contains('#swal2-title', 'Login realizado').should('be.visible');
	})
	
	// Cenário 2
	it('Email inválido', () => {
		// Passo 1 - Acessar página de login
		cy.visit('https://automationpratice.com.br/login');
		
		// Passo 2 - Preencher email inválido
		cy.get('#user').type('eduardo2');
		
		// Passo 3 - Preencher senha válida
		cy.get('#password').type('123456');
		
		// Passo 4 - Clicar em LOGIN
		cy.get('#btnLogin').click();
		
		// Passo 5 - Validar erro
		cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
	})
	
	// Cenário 3
	it('Senha inválida', () => {
		// Passo 1 - Acessar página de login
		cy.visit('https://automationpratice.com.br/login');
		
		// Passo 2 - Preencher email válido
		cy.get('#user').type('eduardo2@gmail.com');
		
		// Passo 3 - Preencher senha inválida
		cy.get('#password').type('123');
		
		// Passo 4 - Clicar em LOGIN
		cy.get('#btnLogin').click();
		
		// Passo 5 - Validar erro
		cy.get('.invalid_input').should('have.text', 'Senha inválida.');
	})
	
	// Cenário 4
	it('Campos vazios', () => {
		// Passo 1 - Acessar página de login
		cy.visit('https://automationpratice.com.br/login');
		
		// Passo 2 - Clicar em LOGIN
		cy.get('#btnLogin').click();
		
		// Passo 5 - Validar erro
		cy.get('.invalid_input').should('have.text', 'E-mail inválido.');	
	})

})