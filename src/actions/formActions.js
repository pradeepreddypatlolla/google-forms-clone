export const addQuestionAction=(payload)=>{
    return {
        type:"addQuestion",
        payload:payload
    }
}
export const updateQuestionAction=(payload)=>{
    return {
        type:"updateQuestion",
        payload:payload
    }
}
export const addOptionAction=(payload)=>{
    return{
        type:"addOption",
        payload:payload
    }
}
export const editOptionAction=(payload)=>{
    return{
        type:"editOption",
        payload:payload
    }
}
export const deleteOptionAction=(payload)=>{
    return{
        type:"deleteOption",
        payload:payload
    }
}
export const updateCurrQuestionAction=(payload)=>{
    return{
        type:"updateCurrQuestion",
        payload:payload
    }
}

export const updateAnsTypeAction=(payload)=>{
    return{
        type:"updateAnsType",
        payload:payload
    }
}
export const deleteQuestionAction=(payload)=>{
    return{
        type:"deleteQuestion",
        payload:payload
    }
}