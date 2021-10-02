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
                <button type="button" className="btn btn-primary" onClick={e=>props.editar(lancamento)}>Editar</button>

                <button type="button"
                onClick={e => props.delete(lancamento)} 
                className="btn btn-danger">Deletar
                </button>
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