import React from "react";
import { withRouter } from 'react-router-dom'
import Card from '../components/Card'
import FormGroup from "../components/Form-group";


class ConsultaLancamentos extends React.Component
{
    render()
    {
        return(
            <Card title="Consulta Lançamentos">
                <div className="row">
                    <div className="col-nd-12">
                        <div className="bs-component">
                            <FormGroup htmlFor="inputAno" label="Ano: *">
                            <input type="text" className="form-control" id="inputAno" 
                            aria-describedby="emailHelp" placeholder="Digite o Ano"/>
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(ConsultaLancamentos);