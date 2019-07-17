import React, { Component } from "react";

import "../CSS/BestOffers.css"
import { updateExpression } from "@babel/types";
import CardOffer from "./CardOffer";


class BestOffers extends Component {

    state = {
        offer: [
            { name: "laptop", salary: 6000 },
            { name: "iphone", salary: 4000 },
            { name: "headphone", salary: 66 },
            { name: "car", salary: 66000 }
        ],
        titelOfOffers: "Best Offers this week"

    };

  
    nextOffer = () => {
        this.setState({
            offer: [
               
                { name: "laptop", salary: 6000 ,id:4},
                { name: "iphone", salary: 4000 ,id:5},
                { name: "headphone", salary: 66,id:6 }
            ]
        })
    }

    prevOffer =()=>{
        this.setState({
            offer: [
               
                { name: "laptop", salary: 6000 ,id:4},
                { name: "iphone", salary: 4000 ,id:5},
                { name: "headphone", salary: 66,id:6 },
                { name: "car", salary: 66000 }
            ]
        })
    }

    searchForOffer = (event) => {
        this.setState({
          titelOfOffers: event.target.value
        });
      }

      deleteCard=(index)=>{

        const card = [...this.state.offer];
        card.splice(index,1);
        this.setState({
            offer:card
        }
        )
      }

    render() {

        const item = this.state.offer;
        const element = item.map((ele,index) => {
            return (
                <CardOffer name={ele.name} salary={ele.salary} key={index} delete={()=>this.deleteCard(index)}/>
            )
        })

        

        return (


            <div className="main">
                <div>
                    <div className="close">
                        <button className="bt-close" onClick={this.props.closeTheOffer}>X</button>
                    </div>
                    <h1>
                       {this.state.titelOfOffers}
                    </h1>
                </div>
                <div>
                    <input type="text" placeholder="search" onChange={this.searchForOffer}/>
                </div>

                
                <div className="content-best-offer">


                   <button onClick={this.prevOffer} className="bt-offer"> {"<"} </button>


                    {element}


                    <button onClick={this.nextOffer} className="bt-offer">></button>
                </div>

               
                
               
            </div>

        );
    }
}

export default BestOffers;