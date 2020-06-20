import React, {Component} from 'react';


class Password extends Component{

    state = {
       password:null
    }
 

    ShowHideToggle=(e) => 
    {
        e.preventDefault();
        
        this.setState(
            {
                [e.target.id] : [e.target.value]
            }
        )
        console.log(this.state.Password)
    }

    render()
    {

 
        return(

            <div>  
                
              

              <form onSubmit={this.ShowHideToggle}>
              <div className="pwd">
               <label htmlFor="pd" >Enter Pasword</label>
               <input type="text" id="pd"/>
        
               </div>

           <button>SHOW_HIDE</button>
           </form>
    
    
         </div>

             
    )



        
    }
}

export default Password