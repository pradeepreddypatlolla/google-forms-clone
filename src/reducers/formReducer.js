let initialState={
    questions:[],
    currentQuestion:-1
}

const formReducer=(state=initialState,action)=>{

   if(action.type==="addQuestion"){
    let tempQuestions=Object.assign([],state.questions)
    tempQuestions.push(action.payload)
      let tempState={
          ...state,
          questions:tempQuestions,
          currentQuestion:state.currentQuestion+1
      }
      console.log("Add Question")
      
        
       return tempState
   }

   else if(action.type==="updateCurrQuestion"){
    let tempState={
        ...state,
        
        currentQuestion:action.payload
    }
    console.log("Update currQuestion number")
    
      
     return tempState
   }

   else if(action.type==="addOption"){
    let tempQuestions=Object.assign([],state.questions)
       tempQuestions[action.payload].options.push("Option"+(tempQuestions[action.payload].options.length+1))
       let tempState={
           ...state,
            questions:tempQuestions
       }
       return tempState
   }
   else if(action.type==="deleteOption"){
    let tempQuestions=Object.assign([],state.questions)
       
       tempQuestions[action.payload.questionIndex].options.splice(action.payload.index,1)
       let tempState={
           ...state,
           questions:tempQuestions
       }
       return tempState
   }

   else if(action.type==="updateAnsType"){
       let tempQuestions=state.questions.map((question)=>{
            if(state.questions.indexOf(question)===action.payload.index){
                return {
                    ...question,
                    type:action.payload.type
                }
            }
            return question
       })
       
       
       let tempState={
           ...state,
           questions:tempQuestions
       }
       return tempState

       
   }
   else if(action.type==="deleteQuestion"){
       let tempQuestions=Object.assign([],state.questions)
    //    let tempQuestions=state.questions
        tempQuestions.splice(action.payload,1)
       let tempState={
           ...state,
           questions:tempQuestions
       }
       return tempState
   }
}

export default formReducer