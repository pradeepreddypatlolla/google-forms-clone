import React from 'react'
import { useDispatch } from 'react-redux'
import {  addOptionAction } from '../actions/formActions'
import AnswerType from '../answer-type/AnswerType'
import Option from '../option/Option'
import "./question.css"
import { deleteQuestionAction } from '../actions/formActions'
const Question = ({question,index}) => {
    console.log(question)
    let dispatch=useDispatch()
    const handleAddOption=()=>{
            dispatch(addOptionAction(index))
    }
    const handleDeleteQuestion=()=>{
        dispatch(deleteQuestionAction(index))
    }
    const getAnswer=()=>{
      if(question.type==="multipleChoice" || question.type==="checkbox"|| question.type==="dropdown"){
        let options=  question.options.map((option)=>{
                
          return  <Option questionIndex={index} index={question.options.indexOf(option)} option={option} type={question.type} /> 
                  
      }) 
      options.push( <div onClick={handleAddOption}>Add option</div> )
      return options
      }
      else if(question.type==="shortAnswer"){
        return <div className="form-control"> <input type="text" name="" id="" placeholder='Short Answer' /> </div> 
      }
    }
    
  return (
    <div className='card'>
      
      <form className='form-action' action="">
        <div className='question-top'>
        <div className='question form-control'>
        <input type="text" value={question.question}  />
        </div>
       
        <AnswerType index={index}/>
        </div>
        
        {
          getAnswer()
        }
        


        
      </form>
      <div className='question-footer'>
        <i className='fa fa-trash' onClick={handleDeleteQuestion}></i>
      </div>

    </div>
  )
}

export default Question
