import React, { Component } from "react"
import axios from "axios"

import "../CSS/Post.css"
import PostCard from "./PostCard";
import ModfiyPost from "./ModfiyPost";
import NewPost from "./NewPost";



class Post extends Component {

    state = {
        posts: [],
        selectedPostId: null
    }

    // componentDidMount(){

    //     axios.get("http://localhost/React%20server/get-data.php")
    //     .then(response =>{
    //         console.log(response);
    //         console.log(response.data[0].name);
    //         console.log(response.data[1].name);
    //         console.log(response.data[2].name);

            
            
    //     })
    // }   

   
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data.slice(0, 10);
                const updatePost = posts.map((post) => {
                    return (
                        {
                            ...post,
                            author: "NAWAf"
                        }
                    )

                });
                this.setState({
                    posts: updatePost
                })
            });
    }

    modfiyPost = (id) => {

        this.setState({
            selectedPostId: id
        })
    }

    render() {

        const posts = this.state.posts.map((p, index) => {


            
            return (

                <PostCard title={p.title} content={p.body} key={p.id}
                    author={p.author} onModfiy={() => { this.modfiyPost(p.id)}} />
            )


        });
        return (
            <div >
                <div className="close-post">
                    <button className="bt-close" onClick={this.props.closeThePost}>X</button>
                </div>
                <div className="Post-main">


                    {posts}
                
                    <ModfiyPost selectedPostId={this.state.selectedPostId} posts={this.state.posts} />
                   
                  
                    <NewPost/>

                 
                </div>
              
            </div>
        )
    }

}

export default Post;