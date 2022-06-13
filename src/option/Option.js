import React from 'react'
import { useDispatch } from 'react-redux'
import {  deleteOptionAction } from '../actions/formActions'
import './option.css'
const Option = ({option,questionIndex,index,type}) => {
    let dispatch=useDispatch()
    const handleDeleteOption=()=>{
        dispatch(deleteOptionAction({questionIndex, index}))
    }
    const handleOptionChange=()=>{
        
    }
    const getOptionIcon=()=>{
      if(type==="multipleChoice"){
        return  <i className='fa fa-circle-thin'></i>
      }
      else if(type==="checkbox"){
        return <i className='fa fa-square-o'></i>

      }
      else if(type==="dropdown"){
        return <i> {index+1}. </i>
      }
    }
  return (
    <div className='option form-control'>
    {getOptionIcon()} <input type="text" value={option} onChange={handleOptionChange} /> <i className='fa fa-close' onClick={handleDeleteOption}></i>
    </div>
  )
}

export default Option
