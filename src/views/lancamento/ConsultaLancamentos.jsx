import React from "react";
import { withRouter } from 'react-router-dom'
import Card from '../../components/Card'
import FormGroup from '../../components/Form-group';
import SelectMenu from '../../components/SelectMenu'
import LancamentoTable from './LancamentoTable'


class ConsultaLancamentos extends React.Component
{
    state= {
        ano: '',
        mes: '',
        tipo: ''
    }

    buscar = () =>
    {
        console.log(this.state)
    }

     
    render()
    {
       const meses = [
            {label: 'Selecione...', value: ''},
            {label: 'Janeiro', value: 1},
            {label: 'Fevereiro', value: 2},
            {label: 'Março', value: 3},
            {label: 'Abril', value: 4},
            {label: 'Maio', value: 5},
            {label: 'Julho', value: 7},
            {label: 'Junho', value: 6},
            {label: 'Agosto', value: 8},
            {label: 'Setembro', value: 9},
            {label: 'Outubro', value: 10},
            {label: 'Novembro', value: 11},
            {label: 'Dezembro', value: 12},
        ]
    
        const tipos = [
            {label: 'Selecione...', value: ''},
            {label: 'Despesa', value: 'DESPESA'},
            {label: 'Receita', value: 'RECEITA'},
        ]
    
        const lancamentos = [
            {id:1, descricao: 'boleto', valor: 5,  mes: 1, tipo:'Despesa', status: 'Efetivado'}
        ]
    
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
                            <LancamentoTable lancamentos={lancamentos} />
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(ConsultaLancamentos);