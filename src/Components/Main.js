import {useState, Fragment , createContext} from "react"
import Quiz from "./Quiz";
import Result from "./Result";
import { questions } from "./Questions";
export const globalState = createContext();
const Main = ()=>{
    // THIS STATE WILL HELP TO CHANGE THE QUESTION WHEN YOU PRESS ON THE NEXT BUTTON
    const [questionCount,setQuestionCount] = useState(0)

    //State for the total Score
    const [totalScore,setTotalScore]=useState(0)


      // THIS STATE WILL DISPLAY THE FINAL RESULT PAGE WHEN YOU'RE DONE WITH THE QUIZ
      const [displayResult,setDisplayResult] = useState(false)

      // THIS STATE WILL DISPLAY THE QUIZ 
      const [displayQuiz,setDisplayQuiz] = useState(true)


     //FUNCTION TO CHANGE THE QUESTION
   const changeQuestion = ()=>{
    if(questionCount === questions.length-1){
        setDisplayResult(true)
        setDisplayQuiz(false)
    }
    else if(questionCount < questions.length){
        setQuestionCount((prev)=>{
        return prev + 1;
    })
  }
}

//FUNCTION TO UPDATE TOTAL POINT OF THE USER AFTER QUIZ
const updateTotalScore = ()=>{
    setTotalScore(totalScore + 1)
  }
  

    return(
        <Fragment>
            <globalState.Provider value = {{totalScore,questionCount,changeQuestion,updateTotalScore}}>
                    {displayQuiz && <Quiz />}
                    {displayResult && <Result />}   
            </globalState.Provider>
           
        </Fragment>
    )
}

export default Main;