import React, { Component } from 'react'

class Post extends Component
{

    state =
    {
        id1 : null
    }
    componentDidMount()
        {
            console.log(this.props);
            let id1 = this.props.match.params.post_id;
            this.setState(
{
                id1:id1
}
            )

        }
    

    render()
    {
        return(
<div className="container">
    <h4>route param</h4>
    <h3>{this.state.id1}</h3>




</div>
        )
    }
}
  


export default Post;