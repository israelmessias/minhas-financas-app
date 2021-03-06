import React from "react";
import { withRouter } from 'react-router-dom';
import Card from '../../components/Card';
import FormGroup from '../../components/Form-group';
import SelectMenu from '../../components/SelectMenu';
import LancamentoTable from './LancamentoTable';

import LancamentoService from "../../app/service/LancamentoService";
import LocalStorageService from "../../app/localStorageService";
import * as mensages from '../../components/Toastr';
import {Dialog} from 'primereact/dialog';
import { Button } from 'primereact/button';


class ConsultaLancamentos extends React.Component
{
    constructor()
    {
        super();
        this.service = new LancamentoService();
    }

    usuarioLogado = LocalStorageService.obterIten('_usuario_logado')

    state=
    {
        ano: '',
        mes: '',
        tipo: '',
        descricao: '',
        usuario: this.usuarioLogado,
        lancamento: [],
        displayBasic: false,
        lancamentoDeletar: {},
        LancamentoEditar: {}
        
    }

    preparaFormularioCadastro = () => 
    {
        this.props.history.push('/cadastro-lancamento')
    }


    buscar = () =>
    {

        if(!this.state.ano)
        {
            mensages.mostrarErro('O preenchimento do campo nome é obrigatorio.')
            return false
        }

        //const usuarioLogado = LocalStorageService.obterIten('_usuario_logado')

        const lancamentoFiltro ={
            ano: this.state.ano,
            mes: this.state.mes,
            tipo: this.state.tipo,
            descricao: this.state.descricao,
            usuario: this.state.usuario.id
        }

        

        this.service
        .consultar(lancamentoFiltro)
            .then(response => {
                if(response.data.length < 1)
                {
                    mensages.mostrarAlert('Nenhum resultado encontrado.')
                }
                this.setState({lancamento: response.data})
            }).catch(erro => {
                console.log(erro)
            })
    }

    editar = (lancamento) =>
    {
        this.service.obterPorId(lancamento.id)
        .then( response => {
            LocalStorageService.addItem('_lancamento', lancamento)
            this.props.history.push(`/cadastro-lancamento/${lancamento.id}`)
        })
        .catch( erro => {
            mensages.mostrarErro(erro.response.data)
        })
        
    }

    confirmacaoDeDeletar= (lancamento) =>
    {
        this.setState({displayBasic: true, lancamentoDeletar: lancamento})
    }

    cancelarDelacao = () =>
    {
        this.setState({displayBasic: false, lancamentoDeletar: {}})
    }

    deletar = () =>
    {
        this.service    
        .deletar(this.state.lancamentoDeletar.id)
        .then(response=>{
            const lancamentos = this.state.lancamento;
            const index = lancamentos.indexOf(this.state.lancamento);
            lancamentos.splice(index, 1);
            this.setState({lancamentos: lancamentos, displayBasic: false})
            mensages.mostrarSuccess('Lançamento deletado com sucesso!')
        })
        .catch(erro =>
            {
                mensages.mostrarErro('Lançamento não encontrado!')
            })
    }

    alterarStatus = (lancamento, status) => 
    {
        //lancamento = this.props.match.params

        this.service.alterarStatus(lancamento.id, status)
        .then( response => {
            const lancamentos = this.state.lancamento
            const index = lancamentos.indexOf(this.state.lancamento)
            if(index !== -1)
            {
                lancamento['status'] = status;
                lancamentos[index] = lancamento
                this.setState({ lancamento })
            }
            mensages.mostrarSuccess('Status atualizado com sucesso!')
        })
    }

    render()
    {
        const meses = this.service.obterMeses()
        
        const tipos = this.service.tipos()

        const confirmdisplayBasic = (
            <div>
                <Button label="Cancelar" icon="pi pi-times" onClick={this.cancelarDelacao} className="p-button-text" />
                <Button label="Deletar" icon="pi pi-check" onClick={this.deletar} autoFocus />
            </div>
        );
    
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

                            <br />
                            <button onClick={this.buscar} type="button" className="btn btn-success">
                                <i className="pi pi-search"></i> Buscar</button>
                            <button onClick={this.preparaFormularioCadastro} type="button" className="btn btn-danger">
                            <i className="pi pi-plus"></i> Cadastrar</button>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <LancamentoTable
                            lancamentos={this.state.lancamento} 
                            delete={this.confirmacaoDeDeletar} 
                            editar={this.editar}
                            status={this.alterarStatus} />

                        </div>
                    </div>
                </div>
                <div>
                <Dialog header="Confirmar Delação?" 
                visible={this.state.displayBasic} 
                modal={true} style={{ width: '50vw' }} 
                footer={confirmdisplayBasic}
                 onHide={() =>this.setState({displayBasic: false})}>
                     <p>Confirma a exclusão deste Lançamento?</p> 
                     </Dialog>   
                </div>
            </Card>
        )
    }
}

export default withRouter(ConsultaLancamentos);