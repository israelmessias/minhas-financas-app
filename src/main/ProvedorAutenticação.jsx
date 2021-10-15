import React from "react";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;
export const AuthProvider = AuthContext.Provider

export default class ProvedorAutenticacao extends React.Component
{

    state=
    {
        usuarioAutenticado: null,
        isAutenticado: false
    }

    render()
    {
        return(
            <AuthProvider>
                {this.props.children}
            </AuthProvider>
        )
    }
}