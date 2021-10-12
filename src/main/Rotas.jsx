import React from "react";

import {Route, Switch, HashRouter, Redirect } from 'react-router-dom'

import Login from '../views/Login'
import CadastroUser from '../views/CadastroUser'
import Home from '../views/Home'
import ConsultaLancamentos from "../views/lancamento/ConsultaLancamentos";
import CadastroLancamento from "../views/lancamento/CadastroLancamento";


const UsuarioAutenticado = () =>
{
    return false;
}

/*Sempre que for tenta entrar em uma rota sem ter autenticado
* Sera sempre redirecionado para o login*/
const RotasAutenticadas = ({component: Componet, ...props}) =>
{
    return(
        <Route {...props} render={ (componentProps) => {
           if(UsuarioAutenticado()) 
           {
                return (
                    <Componet {...componentProps}/>
            )
           }else{
               return(
                    <Redirect to={ { pathname: '/login', state: { from: componentProps.location } } } />
                    )
           }   
        }} />
    )
}

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
                <Route path="/cadastro-user" component={CadastroUser} />
                <RotasAutenticadas path="/home" component={Home} />
                <RotasAutenticadas path="/consulta-lancamento" component={ConsultaLancamentos} />
                <RotasAutenticadas path='/cadastro-lancamento/:id?' component={CadastroLancamento} />
            </Switch>
        </HashRouter>
        
    )
}

export default Rotas