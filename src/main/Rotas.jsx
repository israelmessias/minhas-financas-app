import React from "react";

import {Route, Switch, HashRouter } from 'react-router-dom'

import Login from '../views/Login'
import CadastroUser from '../views/CadastroUser'
import Home from '../views/Home'
import ConsultaLancamentos from "../views/lancamento/ConsultaLancamentos";
import CadastroLancamento from "../views/lancamento/CadastroLancamento";

/*
*   HashRouter -> /#/ vai buscar na pasta raiz
*   Switch -> vai criar opções
*   Router -> são os "casos"
*/

function Rotas()
{
    return (
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro-user" component={CadastroUser} />
                <Route path="/consulta-lancamento" component={ConsultaLancamentos} />
                <Route path="/cadastro-lancamento" component={CadastroLancamento} />
            </Switch>
        </HashRouter>
        
    )
}

export default Rotas