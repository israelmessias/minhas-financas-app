import React from "react";

import NavBarIntem from "./NavbarIntem";

import {AuthConsumer} from '../main/ProvedorAutenticacao'



function NavBar (props)
{
  return(
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary" >
      <div className="container">
        <a href="#/home" className="navbar-brand">MINHAS FINANÇAS</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <NavBarIntem render={props.usuarioAutenticado} href="#/home" label="Home"/>
            <NavBarIntem render={props.usuarioAutenticado} href="#/cadastro-user" label="Cadastro"/>
            <NavBarIntem render={props.usuarioAutenticado} href="#/consulta-lancamento" label="Lançamentos" />
            <NavBarIntem render={props.usuarioAutenticado} onClick={props.deslogar} href="#/login" label="Sair" />
        </ul> 

        </div>
      </div>
    </div>
  )
}

export default () =>
(
  <AuthConsumer>
    {(context) => (<NavBar usuarioAutenticado={context.isAutenticado} deslogar={context.encerrarSessao} />)}
  </AuthConsumer>
)