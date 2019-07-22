import React, { Component } from "react"


import "../CSS/Post.css"
import axios from "axios"

class ModfiyPost extends Component {


    state = {
        loadedPost: null
    }

    deletePost=()=>{
        axios.delete("https://jsonplaceholder.typicode.com/posts/"+this.props.selectedPostId)
        .then(respone =>{
            console.log(respone);   
        })
    }

    changeThePost = () => {
        

        if (this.props.selectedPostId) {
            if ((this.state.loadedPost && this.props.selectedPostId !== this.state.loadedPost.id) || this.state.loadedPost == null) {

                axios.get("https://jsonplaceholder.typicode.com/posts/"+this.props.selectedPostId)
                .then(respone =>{
                    this.setState({
                        loadedPost:respone.data
                    })
                })
                // const x = [...this.props.posts]
                // const indexPost = x.findIndex((p) => {
                //     if (p.id === this.props.selectedPostId) {
                //         return (p)
                //     }
                // });

                // const post = { ...x[indexPost] };
                // this.setState({
                //     loadedPost: post
                // })
            }
        }
    }

    render() {
        let post = <p>please select a post !    </p>

        if (this.props.selectedPostId != null) {
            post = <p>loading....   </p>
            this.changeThePost();
        }

        if (this.state.loadedPost != null) {

            post = (
                <div className="">
                    
                    <h1>{this.state.loadedPost.title}</h1>
                    <h3>{this.state.loadedPost.author}</h3>
                    <div className="modfiy-post-card-content">
                        {this.state.loadedPost.body}
                    </div>
                    <div>
                        <button onClick={this.deletePost}>Delete Post</button>
                    </div>

                </div>
            )
        }

        return (
            <div className="modfiy-post-card">
                {post}
            </div>
        )
    }

}

export default ModfiyPost;