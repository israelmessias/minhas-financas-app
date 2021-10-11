import React from "react";
import Card from '../components/Card'
import FormGroup from "../components/Form-group";

import { withRouter } from  'react-router-dom'
import UsuarioService from "./app/service/usuarioService";
import { mostrarErro } from '../components/Toastr'
import LocalStorageService from "./app/localStorageService";


class Login extends React.Component{

    state =
    {
        email: '',
        senha: '',
        mensagemErro: null
    }

    constructor()
    {
        super();
        this.service = new UsuarioService();
    }

    /**/ 
    entrar = () =>
    {
        this.service.autenticar({
            email: this.state.email,
            senha: this.state.senha
        }).then( response => {
            LocalStorageService.addItem('_usuario_logado', response.data)
            this.props.history.push('/home')
        }).catch( erro => {
            mostrarErro(erro.response.data)
        })
    }

    prepararCadastro = () => 
    {
        this.props.history.push('/cadastro-user')
    }

    render()
    {
        return(
            //Container centraliza o conteudo
            <div className="row">
                <div className="col-md-6" style={{position: 'relative', left: '300px'}}>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                <input type="email" 
                                                value={this.state.email}
                                                onChange={e => this.setState({email: e.target.value})}
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                placeholder="Digite o Email" />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="">
                                                <input type="password"
                                                value={this.state.senha}
                                                onChange={e => this.setState({senha: e.target.value})}
                                                className="form-control"
                                                id="exampleInputPassword1" 
                                                placeholder="Password" />
                                            </FormGroup>
                                            <button onClick={ this.entrar } className="btn btn-success">Entrar</button>
                                            <button onClick={ this.prepararCadastro } className="btn btn-danger">Cadastrar</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default withRouter (Login)