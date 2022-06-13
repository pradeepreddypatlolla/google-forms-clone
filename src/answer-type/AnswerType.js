import React from 'react'
import { useDispatch } from 'react-redux'
import { updateAnsTypeAction } from '../actions/formActions'
import "./answer-type.css"
const AnswerType = ({index}) => {
    let dispatch=useDispatch()
    const handleAnswerType=(event)=>{
        dispatch(updateAnsTypeAction({index:index,type:event.target.value}))
    }
  return (
    <div className='answer-type'>
      <select name="" id="" onChange={handleAnswerType}>
          <option value="multipleChoice">Multiple Choice</option>
          <option value="checkbox"> Checkbox </option>
          <option value="dropdown"> Dropdown </option>
          <option value="shortAnswer">Short Answer</option>
          <option value="longAnswer">Long Answer</option>
          <option value="date">Date</option>

      </select>
    </div>
  )
}

export default AnswerType
