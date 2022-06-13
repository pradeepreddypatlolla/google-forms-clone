import React, { useState } from 'react'
import './form-heading.css'
const FormHeading = () => {
    const [formTitle,setFormTitle]=useState("");
    const [formDesc,setFormDesc]=useState("")
  return (
    <div className='form-heading'>
      <div className='card'>
           <form className='form-action' action="">
               <div className="form-title form-control">
               <input type="text" value="Untitled Form" />
               </div>
               <div className="form-control">
               <input type="text" value="" placeholder='Form Description' />
               </div>
               
           </form>
      </div>
    </div>
  )
}

export default FormHeading
