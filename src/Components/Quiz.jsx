import React from "react";
import "../quiz.css";
import quizes from "../quiz_questions.json";
import { useRef, useEffect } from "react";
const Quiz = () => {
    const labelRef = useRef("");
    const questionRef = useRef("");
    let count = 1;
    function handleNext()
    {
        if(count <=9)
        {
            questionRef.current.textContent = `${count + 1}. ${quizes[count].question}`;
        }
        count++;
    }

    useEffect(()=>{
        questionRef.current.textContent = `1. ${quizes[0].question}`;
    });
  return (
    <div className="quiz-container" id="quiz">
        <div className="quiz-header">
            <ul>
                <h2 id="question" ref={questionRef}></h2>
                <ul>
                    <li>
                        <input type="radio" name="answer" className="answer" />
                        <label ref={labelRef}>HELLO</label>
                    </li>
                </ul>
            </ul>
            <div className="buttons-div">
                <button id="submit" onClick={handleNext}>Next</button>
                {count >= 10 ?? 
                    <button id="get">Submit and Show Result</button>
                }
            </div>
        </div>
    </div>
  );
};

export default Quiz;
