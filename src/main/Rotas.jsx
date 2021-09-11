import React from "react";

import {Route, Switch, HashRouter } from 'react-router-dom'

import Login from '../views/Login'
import CadastroUser from '../views/CadastroUser'

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
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={CadastroUser} />
            </Switch>
        </HashRouter>
        
    )
}

export default Rotas