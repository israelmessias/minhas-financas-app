import React from "react";

import {Route, Switch, HashRouter } from 'react-router-dom'

import Login from '../views/Login'
import CadastroUser from '../views/CadastroUser'
import Home from '../views/Home'

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
            </Switch>
        </HashRouter>
        
    )
}

export default Rotas