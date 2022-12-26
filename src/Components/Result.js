import { Fragment,useContext } from "react"
import { globalState } from "./Main"
import { questions } from "./Questions"
const Result = ()=>{
    const {totalScore} = useContext(globalState)
    return(
        <Fragment>
            <section className = "Quiz-container">
                <h1>Your total Score is {totalScore} out of {questions.length}</h1>
            </section>
        </Fragment>
    )
}

export default Result;