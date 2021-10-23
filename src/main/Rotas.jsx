import React from "react";

import {Route, Switch, HashRouter, Redirect } from 'react-router-dom'

import Login from '../views/Login'
import CadastroUser from '../views/CadastroUser'
import Home from '../views/Home'
import ConsultaLancamentos from "../views/lancamento/ConsultaLancamentos";
import CadastroLancamento from "../views/lancamento/CadastroLancamento";
import { AuthConsumer } from "./ProvedorAutenticacao";


//import AuthService from "../app/service/authService";


/*Sempre que for tenta entrar em uma rota sem ter autenticado
* Sera sempre redirecionado para o login*/
const RotasAutenticadas = ({component: Componet, usuarioAutenticado,  ...props}) =>
{
    return(
        <Route {...props} render={ (componentProps) => {
           if(usuarioAutenticado)
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

function Rotas(props)
{
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro-user" component={CadastroUser} />
                <RotasAutenticadas usuarioAutenticado={props.usuarioAutenticado} path="/home" component={Home} />
                <RotasAutenticadas usuarioAutenticado={props.usuarioAutenticado} path="/consulta-lancamento" component={ConsultaLancamentos} />
                <RotasAutenticadas usuarioAutenticado={props.usuarioAutenticado} path='/cadastro-lancamento/:id?' component={CadastroLancamento} />
            </Switch>
        </HashRouter>
        
    )
}

export default () => (
    <AuthConsumer>
        {(context) => (<Rotas usuarioAutenticado={context.isAutenticado} />)}
    </AuthConsumer>
    )
     