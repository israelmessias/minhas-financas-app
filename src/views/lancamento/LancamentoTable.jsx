import React from "react";
import Formatter from "currency-formatter";

function LancamentoTable (props){

    const rows = props.lancamentos.map(lancamento =>{
        return(
        <tr key={lancamento.id}>
            <td>{lancamento.descricao}</td>
            <td>{Formatter.format(lancamento.valor, {locale: 'pt-Br'})}</td>
            <td>{lancamento.tipo}</td>
            <td>{lancamento.mes}</td>
            <td>{lancamento.status}</td>
            <td>

                <button
                title="Efetivar"
                 type="button"
                 disabled={lancamento.status !== 'PENDENTE'} 
                className="btn btn-success"
                onClick={e=>props.status(lancamento,  'EFETIVADO')}><i className="pi pi-check"></i></button>

                <button 
                title="Cancelar"
                type="button"
                disabled={lancamento.status !== 'PENDENTE'}  
                className="btn btn-warning"
                onClick={e=>props.status(lancamento, 'CANCELADO')}><i className=" pi pi-times"></i> </button>

                <button type="button" className="btn btn-primary" title="editar"
                 onClick={e=>props.editar(lancamento)}><i className=" pi pi-pencil"></i> </button>

                <button title="Deletar" type="button" 
                 className="btn btn-danger" onClick={e=>props.delete(lancamento)}><i className=" pi pi-trash"></i> </button>
            </td>
        </tr>)
    })
    return(
        <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Descrição</th>
                        <th scope="col">Valor    </th>
                        <th scope="col">Tipo     </th>
                        <th scope="col">Data     </th>
                        <th scope="col">Situação </th>
                        <th scope="col">Ações    </th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
   
        </table>
    );
}

export default LancamentoTable;