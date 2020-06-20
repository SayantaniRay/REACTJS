import React from 'react'

const Contact=(props)=>
{

    setTimeout( ( )=>
        {
props.history.push('/About')
        },2000);

    return(

<div className="Container">
    <h4 className="Center">CONTACT</h4>
    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </p>
</div>



    )
}

export default Contact;