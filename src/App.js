import React, {Component} from 'react';

import './App.css';
//import Password from './password_showHide';
//import Ninja from './ninja';
//import NinjaStaelessCom from './ninja_statelessCom';
//import Form1 from './form_Netninja';
//import Counter from './counter';
//import Formvalid from './FormValidation';
import FormvalidByRegex from './FormValidation_byRegex';

class App extends Component {

//   state = 
//   {
//     ninja : [

//       {name:"sayan", age:30 ,belt:"black" ,id:1},
//       {name:"sabuj", age:31 ,belt:"blue",id:2},
//       {name:"chuk", age:3, belt:"white",id:3},
//       {name:"gek" ,age:1, belt:"green",id:4}
//     ]
//   }

//   addItem=(newItem)=>
//   {
// console.log(newItem);
// newItem.id=Math.random();
// let ninja=[...this.state.ninja, newItem];
// this.setState(
//   {
//     ninja : ninja
//   }
// )


//   }

//   deleteItem=(id) =>
//   {
// //console.log(id);
// let ninja=this.state.ninja.filter(nin =>{
//   return nin.id!==id

// });

// this.setState({
//   ninja:ninja
// })
//   }
 render()
 {
   return (
       <div className="App">
{/* <h1>My first React Project</h1>
  <p>Welcome :)</p> 
    <Ninja  ninja={this.state.ninja}/> 
     {/* <NinjaStaelessCom deleteItem={this.deleteItem} ninja={this.state.ninja}/>  */}
     {/* <Form1 addItem={this.addItem}/>  */}

       {/* <h3>THIS IS A COUNTER BUTTON</h3>
        <Counter />   */}

        {/* <Password /> */}


         {/* <Formvalid />  */}
        <FormvalidByRegex/>
      
    </div>
  );
}
}

export default App;
