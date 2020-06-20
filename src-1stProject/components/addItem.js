import React,{Component} from 'react';

class AddItem extends Component{

state=
{
    content:""
}
handleChange=(e)=>
{
    this.setState(
        {
            content:e.target.value
        }
    )
}

handleSubmit=(e)=>
{
    e.preventDefault();
    //console.log(this.state)
    this.props.addpkg(this.state)
    this.setState({
        content:""
    })
}

    render()

{
    return(

<div>


    <form onSubmit={this.handleSubmit}>
        <label>Add your wish activities</label>

        <input type="text" onChange={this.handleChange} value={this.state.content}/>
    </form>
</div>

    );
}}

export default AddItem