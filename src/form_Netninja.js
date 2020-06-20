import React, {Component} from 'react';

import './App.css';

class Form1 extends Component {
    state = {
        name :null,
        age:null,
        belt:null
    }

    handleChange=(e) =>
    {
      this.setState(
          {
              [e.target.id] :e.target.value
          })

    }

    handleSubmit=(e) =>
    {
      e.preventDefault();
      console.log(this.state);
     this.props.addItem(this.state);

    }

  render()
  {
      return(
          <div>

              <form onSubmit={this.handleSubmit}>

                  <label htmlFor="name" >Name:</label>
                  <input type="text" id="name" onChange={this.handleChange} />
                  <label htmlFor="age" >Age:</label>
                  <input type="text" id="age" onChange={this.handleChange} />
                  <label htmlFor="belt" >Belt:</label>
                  <input type="text" id="belt" onChange={this.handleChange} />
                  <button>submit</button>

              </form>
          </div>
      )
}
}

export default Form1