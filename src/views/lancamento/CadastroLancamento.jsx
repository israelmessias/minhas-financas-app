import React from "react";

import Card from '../../components/Card';
import FormGroup from '../../components/Form-group'
import SelectMenu from "../../components/SelectMenu";

import { withRouter } from 'react-router-dom';

import LancamentoService from '../app/service/LancamentoService';

class CadastroLancamento extends React.Component
{

    constructor()
    {
        super()
        this.service = new LancamentoService();
    }

    state =
    {
        mes: '',
        tipo: '',
        status: ''
    }

    render()
    {

        const meses = this.service.obterMeses()
        
        const tipos = this.service.tipos()

        return (
            <Card>
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup id="inputDescricao" label="Descrição: *">
                            <input id="inputDescricao" type="text" className="form-control" />
                        </FormGroup>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <FormGroup id="inputAno" label="Ano: *">
                            <input id="inputAno" type="text" className="form-control" />
                        </FormGroup>
                    </div>
                
                    <div className="col-md-6">
                        <FormGroup id="inputMes" label="Mês: *">
                            <SelectMenu id="inputMes" lista={meses} className="form-control"/>
                        </FormGroup>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <FormGroup id="inputValor" label="Valor: *">
                                <input id="inputValor" type="text" className="form-control" />
                        </FormGroup>
                    </div> 

                    <div className="col-md-4">   
                        <FormGroup id="inputTipo" label="Tipo: *">
                            <SelectMenu id="inputTipo" lista={tipos} className="form-control" />
                        </FormGroup>  
                    </div>

                    <div className="col-md-4">   
                        <FormGroup id="inputStatus" label="Status: *">
                            <input type="text" className="form-control" disabled />
                        </FormGroup>  
                    </div>
                </div>
            </Card>
        );
    }
}

export default withRouter (CadastroLancamento);