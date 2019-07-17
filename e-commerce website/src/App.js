import React, { Component } from 'react';

import './CSS/App.css';
import Header from "./Header/Header"
import BestOffers from './Content/bestOffers';
import Footer from "./Header/Footer"
import Slideshow from "./Content/Slider"
import Mostsales from "../src/Content/MostSales"

class App extends Component {

  state = {

   
    showBestOffer: false,
    showTheMostSales:false
   
  }

  

  toggleBestOffers = () => {
    const show = this.state.showBestOffer;
    this.setState({ showBestOffer: !(show) })
  }

  toggleMostSales = () => {
    const show2 = this.state.showTheMostSales;
    this.setState({ showTheMostSales: !(show2) })
  }

  
  render() {


    let showOffers =null;

    if(this.state.showBestOffer === true){
      showOffers=(
        <div>

          <BestOffers closeTheOffer={this.toggleBestOffers} />
        </div> 
      );
    }

    let showMostSales = null;

    if(this.state.showTheMostSales === true){
      showMostSales=(
        <div>
          <Mostsales closeTheMostSales={this.toggleMostSales}/>
        </div>
      )
    }

    return (
      <div className="App">

        <Header />

        <Slideshow />

        {
          (this.state.showBestOffer === false && this.state.showTheMostSales===false)?
          
          <div className="show-content">
            <button onClick={this.toggleBestOffers} >Show Best Offers</button>
            <button onClick={this.toggleMostSales} >Most Sales</button>
            <button onClick={this.toggleMostSales} >Most Sales</button>
          </div>
            : null
        }

        


        {showOffers}

        {showMostSales}


        <Footer />


      </div>
    );
  }
}

export default App;
