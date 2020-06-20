import React from 'react';

const AddCustom =({customPkg,deleteitem,addItem})=>
{

const newPkg= customPkg.length ?(

    customPkg.map(pk =>{

     return(
         <div className="collection-item" key={pk.id}>

             <span onClick={() => {deleteitem(pk.id)}}>{pk.content}</span>
         </div>
     )


    })
):


(
    <p className="center">You have not your own Package</p>
)







    return(

        <div className="customPkg collection">

        {newPkg}

         <div><input type="text" id="txt" className="add" onChange={() => {addItem()}}/>Add your wish Pkg</div>
        </div>
    )

}


export default AddCustom