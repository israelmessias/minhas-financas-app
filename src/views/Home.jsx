import React from "react";
import UsuarioService from "./app/service/usuarioService";
import LocalStorageService from "./app/localStorageService";

class Home extends React.Component{

    constructor()
    {
        super()
        this.service = new UsuarioService();
    }

    componentDidMount()
    {
        const usuarioLogado = LocalStorageService.obterIten('_usuario_logado')


        this.service.obterSaldoPorUser(usuarioLogado.id)
        .then(response =>{
            this.setState({saldo: response.data})
        }).catch(erro =>{
            console.error(erro.response)
        });
    }

    state = {
        saldo: 0
    }


     render(){
        return(
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é seu sistema de finanças.</p>
                <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo}</p>
                <hr className="my-4"></hr>
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                   <a className="btn btn-primary btn-lg" href="#/cadastro-user"
                    role="button"><i className="fa fa-users"></i>  Cadastrar Usuário</a>
        
                   <a className="btn btn-danger btn-lg" href="#/cadastro-lancamento" 
                   role="button"><i className="fa fa-users"></i>  Cadastrar Lançamento</a>
                </p>
            </div>
            )
     }
}

export default Home