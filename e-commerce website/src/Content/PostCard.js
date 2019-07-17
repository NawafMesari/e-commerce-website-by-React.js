import React,{Component} from "react"


import "../CSS/Post.css"



class PostCard extends Component{



    


    render(){
        return(
            <div className="post-card">
                <h1>{this.props.title}</h1>
                <div className="post-card-content">
                    {this.props.content}
                </div>
            </div>
        )
    }

}

export default PostCard;