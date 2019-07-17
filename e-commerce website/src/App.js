import React, { Component } from 'react';

import './CSS/App.css';
import Header from "./Header/Header"
import BestOffers from './Content/bestOffers';
import Footer from "./Header/Footer"
import Slideshow from "./Content/Slider"
import Mostsales from "../src/Content/MostSales"
import Post from "../src/Content/Post"



class App extends Component {

  state = {

   
    showBestOffer: false,
    showTheMostSales:false,
    showThePost:false
   
  }

  

  toggleBestOffers = () => {
    const show = this.state.showBestOffer;
    this.setState({ showBestOffer: !(show) })
  }

  toggleMostSales = () => {
    const show2 = this.state.showTheMostSales;
    this.setState({ showTheMostSales: !(show2) })
  }
  toggleThePost=()=>{
    const show3 = this.state.showThePost;
    this.setState({ showThePost: !(show3) })
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

    let showPost = null;

    if(this.state.showThePost === true){
      showPost=(
        <div>
          <Post closeThePost={this.toggleThePost}/>
        </div>
      )
    }

    return (
      <div className="App">

        <Header />

        <Slideshow />

        {
          (this.state.showBestOffer === false && this.state.showTheMostSales===false && this.state.showThePost===false)?
          
          <div className="show-content">
            <button onClick={this.toggleBestOffers} >Show Best Offers</button>
            <button onClick={this.toggleMostSales} >Most Sales</button>
            <button onClick={this.toggleThePost} >Posts</button>
          </div>
            : null
        }

        


        {showOffers}

        {showMostSales}

        {showPost}

        <Footer />


      </div>
    );
  }
}

export default App;
