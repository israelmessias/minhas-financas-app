import React from "react";

import Card from '../../components/Card';
import FormGroup from '../../components/Form-group'
import SelectMenu from "../../components/SelectMenu";

import { withRouter } from 'react-router-dom';

import LancamentoService from '../app/service/LancamentoService';

import {mostrarSuccess, mostrarErro} from '../../components/Toastr'
import LocalStorage from '../app/localStorageService';

class CadastroLancamento extends React.Component
{

    constructor()
    {
        super()
        this.service = new LancamentoService();
    }

    state =
    {
        id: null,
        descricao: '',
        ano: '',
        mes: '',
        valor: '',
        tipo: '',
        status: ''
    }

    submit = () =>
    {
        const usuarioLogado = LocalStorage.obterIten('_usuario_logado')
        // destructor
        const { descricao, valor, mes, ano, tipo } = this.state; 
        const lancamento = { descricao, valor, mes, ano, tipo, usuario: usuarioLogado.id };

        this.service
        .salvar(lancamento)
        .then(response =>{
            this.props.history.push('/consulta-lancamento')
            mostrarSuccess('Lançamento salvo com sucesso!')
        }).catch(erro =>{
            mostrarErro(erro.response.data)
            })
    }

    handleChange = (event) => 
    {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name] : value })
    }

    render()
    {

        const meses = this.service.obterMeses()
        
        const tipos = this.service.tipos()

        return (
            <Card title = "Cadastro de Lançamento">
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup id="inputDescricao" label="Descrição: *">
                            <input  type="text" id="inputDescricao"  
                                   className="form-control" 
                                   name="descricao"
                                   value={this.state.descricao}
                                   onChange={this.handleChange}  />
                        </FormGroup>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <FormGroup id="inputAno" label="Ano: *">
                            <input id="inputAno" 
                            type="text" 
                            className="form-control"
                            name="ano"
                            value={this.state.ano}
                            onChange={this.handleChange} />
                        </FormGroup>
                    </div>
                
                    <div className="col-md-6">
                        <FormGroup id="inputMes" label="Mês: *">
                            <SelectMenu id="inputMes" 
                            lista={meses} 
                            className="form-control"
                            name="mes"
                            value={this.state.mes}
                            onChange={this.handleChange}/>
                        </FormGroup>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <FormGroup id="inputValor" label="Valor: *">
                                <input id="inputValor" 
                                type="text" 
                                className="form-control"
                                name="valor"
                                value={this.state.valor}
                                onChange={this.handleChange} 
                                />
                        </FormGroup>
                    </div> 

                    <div className="col-md-4">   
                        <FormGroup id="inputTipo" label="Tipo: *">
                            <SelectMenu id="inputTipo"
                             lista={tipos}
                             name="tipo"
                             value={this.state.tipo}
                            onChange={e =>this.setState({tipo: e.target.value})}
                              className="form-control" />
                        </FormGroup>  
                    </div>

                    <div className="col-md-4">   
                        <FormGroup id="inputStatus" label="Status: *">
                            <input type="text" 
                            className="form-control" 
                            disabled 
                            name="status"
                            value={this.state.status}/>
                        </FormGroup>  
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <br />
                        <button className="btn btn-success" onClick={this.submit}>Salvar</button>
                        <button onClick={e => this.props.history.push('/consulta-lancamento')} className="btn btn-danger">Cancelar</button>
                    </div>
                </div>

            </Card>
        );
    }
}

export default withRouter (CadastroLancamento);