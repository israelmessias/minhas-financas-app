import React from "react";

class Card extends React.Component
{
    /*card md-3 class mãe
    card-header o cabeçalho Login
    card-body corpo do card*/
    render()
    {
        return (
        <div className="card md-3">
            <h3 className="card-header">{this.props.title}</h3>
             <div className="card-body">
                {this.props.children}
             </div>
        </div>
        )
    }
}

export default Card