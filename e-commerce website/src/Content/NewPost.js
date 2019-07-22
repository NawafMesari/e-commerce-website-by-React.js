
import React, { Component } from "react"
import "../CSS/NewPost.css"
import axios from "axios"


class NewPost extends Component {

    state = {
        title: "",
        body: "",
        author: ""
    }

    addpost=()=>{

        const data = ({
            title:this.state.title,
            body:this.state.body,
            author:this.state.author
        })

        axios.post("https://jsonplaceholder.typicode.com/posts",data)
        .then(respons =>{
            console.log(respons)
        })
    }

    render() {

        return (
            <div className="newpost-content">

                <h1>Add a Post </h1>
                <div className="box">
                    <p>Title </p>
                    <input type="text" value={this.state.title} onChange={(event) =>{this.setState({title:event.target.value})}}/>
                </div>
                <div className="box">
                    <p>Body </p>
                    <textarea type="text" value={this.state.body} onChange={(event) =>{this.setState({body:event.target.value})}}/>
                </div>
                <div className="box">
                    <p> Author </p>
                    <input type="text" value={this.state.author} onChange={(event) =>{this.setState({author:event.target.value})}}/>
                </div>
                <div className="box">
                <button onClick={this.addpost} > ADD</button>
                </div>
               

            </div>
        )
    }

}

export default NewPost;