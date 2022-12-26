import {useState,useEffect,Fragment,useContext} from 'react'
import { questions } from './Questions';
import { globalState } from './Main';
const Quiz = ()=>{
    const {questionCount,changeQuestion,updateTotalScore} = useContext(globalState)

    const checkAnswerA = (e)=>{
        let correctAnswer = questions[questionCount].answer.toString()
       if(e.currentTarget.innerText === correctAnswer){
            updateTotalScore()
            changeQuestion()
       }
       else{
        changeQuestion()
       }
    }
    const checkAnswerB = (e)=>{
        let correctAnswer = questions[questionCount].answer.toString()
        if(e.currentTarget.innerText === correctAnswer){
            updateTotalScore()
            changeQuestion()
       }
       else{
            changeQuestion()
       }
    }
    const checkAnswerC = (e)=>{
        let correctAnswer = questions[questionCount].answer.toString()
        if(e.currentTarget.innerText === correctAnswer){
            updateTotalScore()
            changeQuestion()
       }
       else{
            changeQuestion()
       }
    }
    const checkAnswerD = (e)=>{
        let correctAnswer = questions[questionCount].answer.toString()
        if(e.currentTarget.innerText === correctAnswer){
            updateTotalScore()
            changeQuestion()
       }
       else{
            changeQuestion()
       }
    }

    return(
        <Fragment>
         <div className = "Quiz-container">
                <div className="options-container">
                <h4>{questions[questionCount].query}</h4>
                        <div className="options">
                            <div onClick = {checkAnswerA}>{questions[questionCount].optionA}</div>
                            <div onClick = {checkAnswerB}>{questions[questionCount].optionB}</div>
                            <div onClick = {checkAnswerC}>{questions[questionCount].optionC}</div>
                            <div onClick = {checkAnswerD}>{questions[questionCount].optionD}</div>
                        </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Quiz;