import React, {Component} from 'react';
import './App.css';
import './FormValid.css';


class FormvalidByRegex extends Component{


  

    initialstate={

            //backgroundColor: "#4285F4",
            email : null,
            password :null,
            cpassword:null,
            fname:null,
            lname:null,
            address:null,
            pin:null,
            gender:null,
            age:null
        

    }

    state=this.initialstate;

   



    handleChange=(e) =>
    {
       
        
        
         this.setState(
            {
                 [e.target.id]:e.target.value
                

            }
        )
          
         
    }

    handleSubmit=(e)=>
    {
        e.preventDefault();
        console.log(this.state);

       // ***********validation part**********

       const fn=document.querySelector('#fname').value;
       const em=document.querySelector('#email').value;
  
       const ag=parseInt(document.querySelector('#age').value);
       //const gender_chk=document.querySelectorAll("gen").value;
      // let gen_check=0;
      const cpwd=document.querySelector('#cpassword').value;
        const pwd=document.querySelector('#password').value;
      
       //let count=0;

if(pwd==="")
{
    document.querySelector('#err_password').innerHTML="Password can not be blanked";
            document.querySelector('#err_password').style.color="red";
}


if(cpwd==="")
{
    document.querySelector('#err_cpassword').innerHTML="Password can not be blanked";
            document.querySelector('#err_cpassword').style.color="red";
}

       if(fn==="")
       {
           document.querySelector('#err_fname').innerHTML="name can not be blanked";
           document.querySelector('#err_fname').style.color="red";
       }
else{
    document.querySelector('#err_fname').innerHTML="";
}


if(em==="")
{
    document.querySelector('#err_email').innerHTML="email can not be blanked";
    document.querySelector('#err_email').style.color="red";
}
else{
document.querySelector('#err_email').innerHTML="";
}



if((ag<18) || (ag>30))
{
    document.querySelector('#err_age').innerHTML="age should be between 18 to 30"; 
    document.querySelector('#err_age').style.color="red";
}
else{
    document.querySelector('#err_age').innerHTML="";
    
}

    }



    handlePassword=(e)=>
    {
        const pwd=document.querySelector('#password').value;
       
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})");
        const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])))(?=.{6,})");

           

             if(pwd!=="")
            {
            if(strongRegex.test(e.target.value)) {
                document.querySelector('#err_password').innerHTML="password is strong";
                document.querySelector('#err_password').style.color="green";
            } 
            else if(mediumRegex.test(e.target.value)) 
            {
                document.querySelector('#err_password').innerHTML="password is not strong";
                document.querySelector('#err_password').style.color="yellow";
            } 
            else{
                document.querySelector('#err_password').innerHTML="Password format not correct ";
                document.querySelector('#err_password').style.color="red"; 
            }
        }

        else{
            document.querySelector('#err_password').innerHTML="Password can not be blanked";
            document.querySelector('#err_password').style.color="red"; 
        }

        this.setState(
            {
            [e.target.id]:e.target.value
            }
        )

    }

    confChange =(e)=>

    {
        const cpwd=document.querySelector('#cpassword').value;
        const pwd=document.querySelector('#password').value;
        if(cpwd==="")
        {
            document.querySelector('#err_cpassword').innerHTML="please re type password";
            document.querySelector('#err_cpassword').style.color="red";
        }
        
         else if(pwd!==cpwd){
            document.querySelector('#err_cpassword').innerHTML="password does not match";
            document.querySelector('#err_cpassword').style.color="red";
        }
        
        else{
            document.querySelector('#err_cpassword').innerHTML="Perfect !"; 
            document.querySelector('#err_cpassword').style.color="green";
            this.setState(
                {
                [e.target.id]:e.target.value
                }
            )
        }
    }


 
        
        
    


    render()
    {

        return(
<div className='container'>   
<center>

<form border="2" onSubmit= {this.handleSubmit}>

<table border="2" cellpadding="1" cellspacing="1">

<tr align="center">

   <td colspan="2"><h4>NEW USER</h4></td>
</tr>

<lable htmlFor="email">Enter your Email Id :</lable>
<input type="email" id="email" value={this.state.email} onChange={this.handleChange}/>
<span id="err_email"></span>
<br/> <br/>



<lable htmlFor="password">Enter your password :</lable>
<input type="password" id="password" value={this.state.password} onChange={this.handlePassword}/>
<span id="err_password"></span>
<br/> <br/>
<lable htmlFor="cpassword">Confirm password :</lable>
<input type="password" id="cpassword" value={this.state.cpassword} onChange={this.confChange}/>
<span id="err_cpassword"></span>



<br/> <br/>
<lable htmlFor="fname">Enter your first name :</lable>
<input type="text" id="fname" value={this.state.fname} onChange={this.handleChange}/>
<span id="err_fname"></span>
<br/> <br/>
<lable htmlFor="lname">Enter your Last name :</lable>
<input type="text" id="lname" value={this.state.lname} onChange={this.handleChange}/>
<br/> <br/>


<lable htmlFor="address">Enter your address :</lable>
<input type="text" id="address" value={this.state.address} onChange={this.handleChange}/>
<br/> <br/>
<lable htmlFor="pin">Enter your pin code :</lable>
<input type="text" id="pin"  value={this.state.pin} onChange={this.handleChange}/>

<br/> <br/>
<lable htmlFor="gender">Enter your Gender :</lable>
<input type="radio" name="gen"  value="male"/>MALE
<input type="radio" name="gen"  value="female"/>FEMALE
<input type="radio" name="gen"  value="other"/>OTHER
<span id="err_gen"></span>
<br/> <br/>

<lable htmlFor="age">Enter your Age :</lable>
<input type="text" id="age" value={this.state.age} onChange={this.handleChange}/>
<span id="err_age"></span>
<br/> <br/>


<input type="submit"/>
<input type="reset" onClick={this.handleReset}></input>

</table>
</form>

</center>
</div>

        );
    }
}

export default FormvalidByRegex;
