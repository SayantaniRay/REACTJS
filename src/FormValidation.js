import React, {Component} from 'react';
import './App.css';
import './FormValid.css';


class Formvalid extends Component{

    initialstate={

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

    state=this.initialstate



    handleChange=(e) =>
    {

        const pwd=document.querySelector('#password').value;
        const cpwd=document.querySelector('#cpassword').value;
 
 if(pwd==="")
 {
     document.querySelector('#err_password').innerHTML="password can not be blanked";
     document.querySelector('#err_password').style.color="red";
 }
 else if(pwd!=="") {
 
     if((pwd.length>0 && pwd.length<8) || pwd.length>10)
     {
         document.querySelector('#err_password').innerHTML="Password length must be 8-10 chars long";
     document.querySelector('#err_password').style.color="red";
     }
 
     else if(pwd.length>=8 && pwd.length<=10)
     {
         if(!pwd.match('[A-Z]'))
         {
             document.querySelector('#err_password').innerHTML="Enter at least 1 uppercase character";
             document.querySelector('#err_password').style.color="red"; 
         }
 
         else if(!pwd.match('[a-z]'))
         {
             document.querySelector('#err_password').innerHTML="Enter at least 1 lowercase character";
             document.querySelector('#err_password').style.color="red"; 
         }
 
         else if(!pwd.match('[0-9]'))
         {
             document.querySelector('#err_password').innerHTML="Enter at least 1 digit";
             document.querySelector('#err_password').style.color="red"; 
         }
 
         else if(!pwd.match('[@#$!]'))
         {
             document.querySelector('#err_password').innerHTML="Enter at least 1 special character";
             document.querySelector('#err_password').style.color="red"; 
         }
 
         else{
 
             document.querySelector('#err_password').innerHTML="Strong password";
             document.querySelector('#err_password').style.color="green"; 
             }
     }
 
 
 }
 
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
     document.querySelector('#err_cpassword').style.color="red";
 }
 
 
 

        
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
       //const cpwd=document.querySelector('#cpassword').value;
       const ag=parseInt(document.querySelector('#age').value);
       const gender_chk=document.querySelectorAll("gen").value;
      // let gen_check=0;
      
      
       //let count=0;



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



// for(var i=0;i<gender_chk.length;i++)
// {
//     if(gender_chk[i].checked)
//     {
//         gen_check++;
//         break;
//     }
// }

    if (gender_chk===0)
    {
        document.getElementById('err_gen').innerHTML="Please select gender";
       
    } 
    else{
        document.getElementById('err_gen').innerHTML="";
    }



    }




    handleReset=()=>
    {

      
       
        this.setState( ()=>
            
            this.initialstate)
            
                
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
<input type="password" id="password" value={this.state.password} onChange={this.handleChange}/>
<span id="err_password"></span>
<br/> <br/>
<lable htmlFor="cpassword">Confirm password :</lable>
<input type="password" id="cpassword" value={this.state.cpassword} onChange={this.handleChange}/>
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

export default Formvalid;
