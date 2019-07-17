import React, {Component}from "react";

import "../CSS/Header.css"

//import {Link,NavLink} from "react-router-dom"


class Header extends Component{

 
   state={
      item:["Home" , "Contact Us" ,"About us"]
   }

   
//   nextNavBar =(newName)=>{
//    this.setState({
//      item:[newName, "services" ]
//    });
//  }

//  prevNavBar =()=>{
//    this.setState({
//      item:["Home" , "Contact Us","About us" ]
//    });
//  }


   render(){
   
     
    return(
        <div className="App-header" id="header">
           {/* <button className="bt" onClick={this.prevNavBar}> Prev</button> */}
          <ul className="content2">
          
          <li >{this.state.item[0]}</li>
          <li>{this.state.item[1]}</li>
          <li>{this.state.item[2]}</li>
                 
          </ul>
         
          {/* <button className="bt" onClick={()=>{this.nextNavBar("product")}}>Next</button> */}
         
        </div>
    );
 }
}

export default Header;