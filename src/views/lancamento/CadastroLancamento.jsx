import React from "react";

import Card from '../../components/Card';
import FormGroup from '../../components/Form-group'

import { withRouter } from "react-router-dom";

class CadastroLancamento extends React.Component
{
    render()
    {
        return (
            <Card>
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup id="inputDescricao" label="Descrição: *" >
                            <input type="text" className="form-group" />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <FormGroup id="inputAno" label="Ano: *">
                            <input type="text" className="form-group" />
                        </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <FormGroup id="inputMes" label="Mês: *">
                            <input type="text" className="formGroup" />
                        </FormGroup>
                    </div>
                </div>
            </Card>
        );
    }
}

export default withRouter (CadastroLancamento);