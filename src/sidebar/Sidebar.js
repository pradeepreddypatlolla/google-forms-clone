import React from 'react'
import { useDispatch } from 'react-redux'
import { addQuestionAction } from '../actions/formActions'
import "./sidebar.css"
const Sidebar = () => {
    console.log("sidebar")
    const dispatch=useDispatch()
    const addQuestion=()=>{
        
        let question={
            question:"Question",
            type:"multipleChoice",
            options:["option1"],
            isRequired:false
        }
        dispatch(addQuestionAction(question))
    }
  return (
    <div className='sidebar card flex'>
        <div className='sidebar-icons' onClick={addQuestion} >
            <i className='fa fa-plus'></i>
        </div>
        <div className='sidebar-icons'>
            <i className='fas fa-file-import'></i>
        </div>
    </div>
  )
}

export default Sidebar
