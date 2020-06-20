import React from 'react';

import './App.css';

const NinjaStaelessCom = ({ninja,deleteItem}) => {

 

      //const {ninja}=props;
      const ninjaList=ninja.map( nin =>
        {

  return (
    <div className="Ninja" key={nin.id}>
      {/* <div>name:{this.props.name}</div>
      <div>age:{this.props.age}</div>
      <div>belt:{this.props.belt}</div> */}

      {/* <div>name:{name}</div>
      <div>age:{age}</div>
      <div>belt:{belt}</div> */}
      <div>name:{nin.name}</div>
      <div>age:{nin.age}</div>
      <div>belt:{nin.belt}</div>
      <button onClick= {() =>{deleteItem(nin.id)}}>Delete</button>
        
      
    </div>
  )
    })
  
return(
    <div className="ninja-list">
    {ninjaList}
    </div>
)
  }


export default NinjaStaelessCom
