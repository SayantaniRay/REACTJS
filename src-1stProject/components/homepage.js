import React, { Component } from 'react';

import '../App.css';
import city from '../city.jpg';
import man from '../images/man.jpg'


class Home extends Component{

 


    tick=setInterval(()=>
    {
    
        //Get event's date
let EventDate = new Date("Jul 20, 2020 15:37:25").getTime();
    
    
// Get today's date and time
let now = new Date().getTime();

      // Find the distance between now and the count down date
      let diff = EventDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
      // Display the result in the element with className='clock'
      document.querySelector("#clock").innerHTML = `d :   ${days}  h : ${hours} 
       m :  ${minutes}  s : ${seconds}  `;
           
    },1000);































render()
{
    return(

<div>

<header>
<nav className="nav-wrapper transparent">

<div className="container">

<a href="" className="brand-logo">Photo Ninja</a> 
<a href="" className="sidenav-trigger" data-target="mobile-menu">
    <i className="material-icons">menu</i>
</a>
<ul className="right hide-on-med-and-down indigo darken-4">
<li><a href="#photos">Home</a></li>
<li><a href="#services">About Us</a></li>
<li><a href="#services">Tour Packages</a></li>
<li><a href="#contact">Contact</a></li>
<li><p id="clock" value={this.tick}>CLOCK</p></li>
<li><a href="#" className="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="this is facebook">
    <i className="fab fa-facebook"></i>
</a></li>
<li><a href="#" className="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="this is Whatsapp">
    <i className="fab fa-whatsapp"></i>
</a></li>
<li><a href="#" className="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="this is linkedIn">
    <i className="fab fa-linkedin"></i>
</a></li>
</ul>

<ul className="sidenav grey lighten-2" id="mobile-menu">
    <li><a href="#">Photo's</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
    </ul>


</div>

</nav>
 </header>




 <section className="container section scrollspy" id="photos">
<div className="row">

<div className="col s12 l4">
<img src="./images/portrait.jpg" alt="" className="responsive-img materialboxed"/>
</div>
<div className="col s12 l6 offset-l1">
    <h2 className="indigo-text text=darken-4">Portraits</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Debitis tenetur facilis tempore quo repudiandae deserunt pariatur illo recusandae est eveniet assumenda, quibusdam modi ex quia. 
        Dolor ipsum magni atque! Sunt.</p>
</div>

</div>




<div className="row">

    <div className="col s12 l4 push-l7 offset-l1">
    <img src={city} alt="" className="responsive-img materialboxed"/>
    </div>
    <div className="col s12 l6 pull-l5 right-align offset-l1">
        <h2 className="indigo-text text=darken-4">City</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Debitis tenetur facilis tempore quo repudiandae deserunt pariatur illo recusandae est eveniet assumenda, quibusdam modi ex quia. 
            Dolor ipsum magni atque! Sunt.</p>
    </div>
    
    </div>




    <div className="row">

        <div className="col s12 l4">
        <img src={man} alt="" className="responsive-img materialboxed"/>
        </div>
        <div className="col s12 l6 offset-l1">
            <h2 className="indigo-text text=darken-4">Nature</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Debitis tenetur facilis tempore quo repudiandae deserunt pariatur illo recusandae est eveniet assumenda, quibusdam modi ex quia. 
                Dolor ipsum magni atque! Sunt.</p>
        </div>
        
        </div>
    </section>



<div className="parallax-container">
    <div className="parallax">
<img src="./images/street.jpg" alt="" className="responsive-img"/>
</div>
</div>



<section className="container section scrollspy" id="services">
    <div className="row">
        <div className="col s12 l4">
            <h2 className="indigo-text text-darken-4">What I do</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt hic in nulla, 
                eveniet dolorum rerum distinctio delectus aspernatur explicabo dignissimos itaque quasi impedit temporibus perferendis 
                atque rem nobis, architecto quis!</p>

        </div>


<div className="col s12 l6 offset-l2">
    <ul className="tabs">
        <li className="tab col l6">
            <a href="#photo" className="indigo-text text-darken-4">Photography</a>
        </li>
        <li className="tab col l6">
            <a href="#edit" className="indigo-text text-darken-4">Editing</a>
        </li>
    </ul>

    <div className="col s12" id="photo">
        <p className="flow-text indigo-text text-darken-4">Photography</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, 
            perferendis nobis illum eveniet quam ad quia possimus nulla sint illo 
            veniam quidem ducimus dolore voluptatem molestiae sed soluta doloremque ratione?</p>
    </div>

    <div className="col s12" id="edit">
        <p className="flow-text indigo-text text-darken-4">Editing</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, 
            perferendis nobis illum eveniet quam ad quia possimus nulla sint illo 
            veniam quidem ducimus dolore voluptatem molestiae sed soluta doloremque ratione?</p>
    </div>


</div>

    </div>
</section>



<div className="parallax-container">
    <div className="parallax">
    <img src="./images/stars.jpg" alt="" className="responsive-img"/>
    </div>
</div>
    
   
    
    <section className="section container scrollspy" id="contact">
        <div className="row">
            <div className="col s12 l5">
                <h2 className="indigo-text text-darken-4">Get In Touch</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, 
                    perferendis nobis illum eveniet quam ad quia possimus nulla sint illo 
                    veniam quidem ducimus dolore voluptatem molestiae sed soluta doloremque ratione?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, 
                        perferendis nobis illum eveniet quam ad quia possimus nulla sint illo 
                        veniam quidem ducimus dolore voluptatem molestiae sed soluta doloremque ratione?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, 
                            perferendis nobis illum eveniet quam ad quia possimus nulla sint illo 
                            veniam quidem ducimus dolore voluptatem molestiae sed soluta doloremque ratione?</p>

            </div>


<div className="col s12 l5 offset-l2">
    <form action="">
        <div className="input-field">
            <i className="material-icons prefix">email</i>
            <input type="email" id="email"/>
            <label for="email">Your Email</label>
            
        </div>

        <div className="input-field">
            <i className="material-icons prefix">Message</i>
            <textarea id="message" className="materialize-textarea"></textarea>
            
            <label for="email">Your Message</label>
        
            
        </div>




        <div className="input-field">
            
            <input type="text" id="date" className="datepicker"/>
            <label for="date">Choose a date</label>
        
            
        </div>



        <div className="input-field">
            <p>Service required...</p>
            <p><lable>
            <input type="checkbox"/>
            <span>Photography</span>
        </lable>
    </p>

        <p>
            <lable>
        <input type="checkbox"/>
        <span>Editing</span>
    </lable>
</p>
 </div>

<div className="input-field center">
    <button className="btn">Submit</button>
</div>
 </form>
</div>

  </div>
        </section>





<footer className="page-footer grey darken-3">
    <div className="container">

        <div className="row">
            <div className="col s12 l6">
                <h5>About Me</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, exercitationem alias. Dolore quia nesciunt, 
                    illum ducimus libero nam asperiores est illo saepe sint pariatur autem fugit eum fuga assumenda quibusdam!</p>
            </div>

            <div className="col s12 l4 offset-l2">

                <h5>Connect</h5>
                <ul>
                    <li><a href="#" className="grey-text text-lighten-3">Facebook</a></li>
                    <li><a href="#" className="grey-text text-lighten-3">LinkedIn</a></li>
                    <li><a href="#" className="grey-text text-lighten-3">Twitter</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright grey darken-4">
        <div className="container center-align">&copy; 2020 Sayantani's Portfolio</div>
    </div>
</footer>





























































</div>

    );
}


}
 

export default Home;
