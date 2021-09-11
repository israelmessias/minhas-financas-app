import React from "react";
import Card from '../components/Card'
import FormGroup from "../components/Form-group";

class Login extends React.Component{
    render(){
        return(
            //Container centraliza o conteudo
            <div className="container"> 
                <div className="row">
                    <div className="col-md-6" style={{position: 'relative', left: '300px'}}>
                        <div className="bs-docs-section">
                            <Card title="Login">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>
                                                <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                <input type="email" 
                                                className="form-control"
                                                 id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                 placeholder="Digite o Email" />
                                                </FormGroup>

                                                <FormGroup label="Senha: *" htmlFor="">
                                                 <input type="password"
                                                  className="form-control"
                                                   id="exampleInputPassword1" 
                                                   placeholder="Password" />
                                                </FormGroup>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login