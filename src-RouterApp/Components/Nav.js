import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Navbar=()=>
{
    return(

        <nav className="nav-wrapper red darken-3">

<div className="Container">
    <a className="brand-logo">POKE'S TIME</a>
    <ul className="right">
    {/* <li><a href="/Home">HOME</a></li>
    <li><a href="/Contact">CONTACT</a></li>
    <li><a href="/About">ABOUT</a></li> */}
<li><Link to="/Home">HOME</Link></li>
    <li><NavLink to="/Contact">CONTACT</NavLink></li>
    <li><NavLink to="/About">ABOUT</NavLink></li>

    
    </ul>    
</div>

</nav>

    )
}

export default Navbar;