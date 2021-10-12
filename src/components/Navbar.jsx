import React from "react";
import AuthService from "../app/service/authService";

import NavBarIntem from "./NavbarIntem";

const deslogar = () =>
{
  AuthService.removerUserLogado() 
  AuthService.removerLancamentoLogado()
}

const isUserLogado = () =>
{
  return AuthService.isUsuarioAutenticado()
}


function NavBar ()
{
  return(
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary" >
      <div className="container">
        <a href="https://bootswatch.com/" className="navbar-brand">MINHAS FINANÇAS</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <NavBarIntem render={isUserLogado()} href="#/home" label="Home"/>
            <NavBarIntem render={isUserLogado()} href="#/cadastro-user" label="Cadastro"/>
            <NavBarIntem render={isUserLogado()} href="#/consulta-lancamento" label="Lançamentos" />
            <NavBarIntem render={isUserLogado()} onClick={deslogar} href="#/login" label="Sair" />
        </ul> 

        </div>
      </div>
    </div>
  )
}

export default NavBar 