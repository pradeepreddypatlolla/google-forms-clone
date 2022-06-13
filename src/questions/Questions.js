import React from 'react'
import { useSelector } from 'react-redux'
import FormHeading from '../form heading/FormHeading'
import Question from '../question/Question'
import Sidebar from '../sidebar/Sidebar'
import { useDispatch } from 'react-redux'
import {  updateCurrQuestionAction } from '../actions/formActions'
import './questions.css'
const Questions = () => {
    const dispatch=useDispatch()
    let state=useSelector((state)=>{
        return state
    })
    
   if(state){
    var questions=state.questions
    var currentQuestion=state.currentQuestion
    
    console.log(questions)
   }

  
    
  return (
      <div className='flex'>
      
    <div className='questions-container'>
      <FormHeading/>

    { questions?
        questions.map((question)=>{
            
                return  <Question index={questions.indexOf(question)} question={question} /> 
            
        }):""
    }

    </div>
    <div className='sidebar-container'>
        <Sidebar/>
    </div>
    </div>
  )
}

export default Questions
