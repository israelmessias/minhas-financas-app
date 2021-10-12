import React from "react";
import Card from '../components/Card'
import FormGroup from '../components/Form-group'
import { mostrarErro, mostrarSuccess } from "../components/Toastr";

import UsuarioService from "../app/service/usuarioService";

class CadastroUser extends React.Component
{
    constructor()
    {
        super();
        this.service = new UsuarioService();
    }

    state = 
    {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    cadastrar = () =>
    {
        const { nome, email, senha, senhaRepeticao } = this.state

        const usuario = { nome ,  email, senha, senhaRepeticao }

        // const msgs = this.service.validar

        try {
            this.service.validar(usuario)
        } catch (erros) {
            mostrarErro(erros.messages)
            return false
        }

        this.service.salvar(usuario)
            .then(response => {
                mostrarSuccess('Usuario cadastro com sucesso! Faça o login para acessar o sistema.')
            }).catch(erro =>{
                mostrarErro(erro.response.data)
            })
    }

    render()
    {
        return(
        
              <Card title="Cadastro Usuario"> 
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="bs-component">
                              <FormGroup label="Nome: *" htmlFor="inputNome">
                                  <input type="text"
                                  id="inputNome" name="nome" 
                                  className="form-control" 
                                  onChange={e => this.setState({nome: e.target.value})} />
                              </FormGroup>
                              <FormGroup label="Email:    *" htmlFor="inputEmail">
                                  <input type="email"  
                                  id="inputEmail" name="email"
                                  className="form-control" 
                                  onChange={e => this.setState({email: e.target.value})} />
                              </FormGroup>
                              <FormGroup label="Senha: *" htmlFor="inputEmail">
                                  <input type="password" 
                                  id="inputSenha" name="senha" 
                                  className="form-control" 
                                  onChange={e => this.setState({senha: e.target.value})} />
                              </FormGroup>
                              <FormGroup  label="Repita Senha: *" htmlFor="inputSenhaRepeticao">
                                  <input type="password" 
                                  id="inputSenha" name="senha"
                                  className="form-control"  
                                  onChange={e => this.setState({senhaRepeticao: e.target.value})} />
                              </FormGroup>
                              <button type="button" onClick={this.cadastrar} className="btn btn-success">Salvar</button>
                              <button type="button" className="btn btn-danger">Cancelar</button>
                          </div>            
                      </div>            
                  </div>                              
              </Card>
        
        )
    }
}
export default CadastroUser