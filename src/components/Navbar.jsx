import React from "react";

import NavBarIntem from "./NavbarIntem";

function NavBar ()
{
  return(
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary" >
      <div className="container">
        <a href="https://bootswatch.com/" className="navbar-brand">Minhas Finanças</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <NavBarIntem href="#/" label="Home"/>
            <NavBarIntem href="#/cadastro-user" label="Usuários"/>
            <NavBarIntem href="#" label="Lançamentos" />
            <NavBarIntem href="#/login" label="Login" />
        </ul> 

        </div>
      </div>
    </div>
  )
}

export default NavBar 