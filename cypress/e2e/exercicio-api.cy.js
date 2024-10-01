/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
describe('Testes da Funcionalidade Usuários', () => {

  it('Deve validar contrato de usuários', () => {
    //TODO: 

  });

  it('Deve listar usuários cadastrados', () => {
    cy.request({
      Method: 'GET',
      url: 'usuarios'
    }).then((response) =>{
      expect(response.status).to.equal(200)
      expect(response.body).to.have.property('usuarios')
    })
  });

  it('Deve cadastrar um usuário com sucesso', () => {
    //TODO: 
    cy.cadastroUsuario(faker, faker.internet.email, 'teste', true)
    .then((response =>{
      expect(response.status).to.equal(201)
      expect(response.body.message).to.equal('Cadastro realizado com sucesso')
    }))
  });

  it('Deve validar um usuário com email inválido', () => {
    //TODO: 
    cy.cadastroUsuario(faker, 'teste@teste.com', 'teste', true)
    .then((response =>{
      expect(response.status).to.equal(400)
      expect(response.body.message).to.equal('Este email já está sendo usado')
    }))
  });

  it('Deve editar um usuário previamente cadastrado', () => {
    //TODO:
    cy.cadastroUsuario('teste', 'nana@teste.com.br', 'teste', true)
    .then(response => {
    let id = response.body.usuarios[0]._id
    cy.request({
      
      method: 'PUT',
      url: `usuarios/${id}`,

     })
   });
  })
  it('Deve deletar um usuário previamente cadastrado', () => {
    //TODO: 
  });


});
