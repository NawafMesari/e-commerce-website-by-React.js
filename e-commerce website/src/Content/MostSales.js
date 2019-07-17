import React, { Component } from "react"

import "../CSS/MostSales.css"


class Mostsales extends Component {


    state ={
        item:[
            {name:"android mobile " , numberOfSales:3000 ,img:"./images/android-img.png"},
            {name:"Laptop" , numberOfSales:2320,img:""},
            {name:" iPhone mobile" , numberOfSales:2310,img:"./images/apple.png"},
            {name:"mobile" , numberOfSales:300,img:"./images/android-img.png"},
            {name:"mobile" , numberOfSales:100,img:"./images/apple.png"},
            {name:"mobile" , numberOfSales:99,img:"./images/android-img.png"},
            {name:"mobile" , numberOfSales:30,img:"./images/apple.png"},
            {name:"mobile" , numberOfSales:20,img:"./images/android-img.png"},
            {name:"mobile" , numberOfSales:10,img:"./images/apple.png"},
        ]
    }



    render() {

        const sales = this.state.item.map((ele)=>{
            return(
               
              
                   <div className="card">
                  <img src={ele.img} alt="no" width="100px" height="100px"></img>
                    <div className="container">
                        <h4><b> {ele.name}</b></h4> 
                        <p> number of sales :{ele.numberOfSales}</p> 
                    </div>
                    </div>
              
               
                );
        })

        return (
           <div className="main-most-sales">

            <div >
                 <button className="bt-close-in-most-sales" onClick={this.props.closeTheMostSales}>X</button>
            </div>
            <div className="content">

            
                {sales}

            </div>
               

           </div>
        )

    }

}

export default Mostsales;