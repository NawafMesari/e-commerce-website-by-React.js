import React, { Component } from "react"

import "../CSS/BestOffers.css"


class CardOffer extends Component {





    render() {

        return (
            <div className="offer-card" >
                <h5 >{this.props.name}</h5>
                <div className="salry">
                    salary: {this.props.salary}
                   
                </div>
                <button onClick={this.props.delete}> DELETE</button>
            </div >
        )

    }

}

export default CardOffer;