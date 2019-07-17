import React,{Component} from "react"
import axios from "axios"

import "../CSS/Post.css"
import PostCard from "./PostCard";



class Post extends Component{

    state={
        posts:[]
    }


    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
            this.setState({
                posts:response.data
            })
        });
    }


    render(){

        const posts = this.state.posts.map(p=>{

            return(
                <PostCard title={p.title} content={p.body} key={p.id}/>
            )
        });
        return(
            <div className="Post-main">

                    <div className="close">
                        <button className="bt-close" onClick={this.props.closeThePost}>X</button>
                    </div>
                {posts}
            </div>
        )
    }

}

export default Post;