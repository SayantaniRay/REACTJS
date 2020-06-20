import React, {Component} from 'react';


class Counter extends Component{

    state = {
        count : 0
    }

    incrementCounter=(count) =>
    {
        this.setState(
            {
            
                count : this.state.count+1
       

    })

    console.log(count)
}

decrementCounter=(count) =>
{

    //Using ternary operator 
    (this.state.count===0) ? ( this.setState(
                {
               count : 0
             }  )
            ) 
            
            : 
            
            
            ( this.setState(
               {
                
                 count : this.state.count-1
           
        
         }))



            
        }

    

    render()
    {
        return(

            <div>

                <div className="button">

                <button  onClick={this.incrementCounter}>+</button>
                <button  onClick={this.decrementCounter}>-</button>
                </div>

                <button>{this.state.count}</button>
            
        </div>
    )



        
    }
}

export default Counter