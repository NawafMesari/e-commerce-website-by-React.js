import React,{Component} from "react"


import "../CSS/Post.css"



class PostCard extends Component{



    


    render(){
        return(
            <div className="post-card" onClick={this.props.onModfiy}>
                <div className="post-card-titleandauthor">
                <h4>{this.props.title}</h4>
                <h6>{this.props.author}</h6>
                </div>
                <div className="post-card-content">
                    {this.props.content}
                </div>
                
            </div>
        )
    }

}

export default PostCard;