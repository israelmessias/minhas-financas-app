import React from "react";
import { withRouter } from 'react-router-dom'
import Card from '../../components/Card'
import FormGroup from '../../components/Form-group';
import SelectMenu from '../../components/SelectMenu'
import LancamentoTable from './LancamentoTable'

import LancamentoService from "../app/service/LancamentoService";
import LocalStorageService from "../app/localStorageService";
import * as mensages from '../../components/Toastr'


class ConsultaLancamentos extends React.Component
{
    constructor()
    {
        super();
        this.service = new LancamentoService();
    }

    state=
    {
        ano: '',
        mes: '',
        tipo: '',
        descricao: '',
        lancamento: []
    }

    buscar = () =>
    {

        if(!this.state.ano)
        {
            mensages.mostrarErro('O preenchimento do campo nome é obrigatorio.')
            return false
        }

        const usuarioLogado = LocalStorageService.obterIten('_usuario_logado')

        const lancamentoFiltro ={
            ano: this.state.ano,
            mes: this.state.mes,
            tipo: this.state.tipo,
            descricao: this.state.descricao,
            usuario: usuarioLogado.id
        }

        this.service
        .consultar(lancamentoFiltro)
            .then(response => {
                this.setState({lancamento: response.data})
            }).catch(erro => {
                console.log(erro)
            })
    }

     
    render()
    {
        const meses = this.service.obterMeses()
        
        const tipos = this.service.tipos()
    
        return(
            <Card title="Consulta Lançamentos">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup htmlFor="inputAno" label="Ano: *">
                            <input type="text" className="form-control" id="inputAno" 
                            value={this.state.ano}
                            onChange={e =>this.setState({ano: e.target.value})} 
                            placeholder="Digite o Ano"/>
                            </FormGroup>

                            <FormGroup htmlFor="inputMes" label="Mês: *">
                                <SelectMenu id="inputMes" className="form-control"
                                value={this.state.mes}
                                onChange={e =>this.setState({mes: e.target.value})}
                                 lista={meses}/>
                            </FormGroup>
                            
                            <FormGroup htmlFor="inputAno" label="Descrição: *">
                                <input type="text" className="form-control" id="inputDescricao" 
                                value={this.state.descricao}
                                onChange={e =>this.setState({descricao: e.target.value})} 
                                placeholder="Digite a Descrição"/>
                            </FormGroup>

                            <FormGroup htmlFor="inputTipo" label="Tipo: *">
                                <SelectMenu id="inputTipo" className="form-control"
                                value={this.state.tipo}
                                onChange={e =>this.setState({tipo: e.target.value})}
                                 lista={tipos}/>
                            </FormGroup>

                            <button onClick={this.buscar} type="button" className="btn btn-success">Buscar</button>
                            <button type="button" className="btn btn-danger">Cadastrar</button>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <LancamentoTable lancamentos={this.state.lancamento} />
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(ConsultaLancamentos);