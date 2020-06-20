import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Home from './components/homepage';
import Custom from './components/CustomPkg';
import AddItem from './components/addItem';


class App extends Component {

state={

  customPkg :
  [

    {id:1,content:'buy milk'},
    {id:2,content:'play game'}

  ]
}

deleteitem=(id)=>
{
//console.log(id);

const delitem = this.state.customPkg.filter(pk =>
  {
    return pk.id!==id
  });
  this.setState(
    {
      customPkg : delitem
    }
  )
}

addpkg=(pg)=>
{
pg.id=Math.random();
let pgs=[...this.state.customPkg,pg]
this.setState(
  {
    customPkg:pgs
  }
)

}


  render()
  {
    return (
      <div className="App container">
      {/* <Home/>  */}
<h1 className="center blue-text">YOUR PACKAGE</h1>
      <Custom customPkg={this.state.customPkg} deleteitem={this.deleteitem} />
      <AddItem addpkg={this.addpkg}/>
      </div>
    );
  }
  }
 

export default App;
