import React from "react";
import "../quiz.css";
import quizes from "../quiz_questions.json";
import { useRef, useEffect, useState } from "react";
const Quiz = () => {
    const questionRef = useRef("");
    const [count, setCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [resultShowed, setResultShowed] = useState(false);

    function handleNext()
    {
        if(selectedOption != null)
        {
            if(selectedOption == quizes[count].correct_answer)
            {
                setScore(score + 1);
            }
            setSelectedOption(null);

            const radioButtons = document.querySelectorAll(".answer");
            radioButtons.forEach((radio) => (radio.checked = false));

            if(count < quizes.length - 1)
            {
                setCount(count+ 1);
            }
        }
        else
        {
            alert("Please select an option first");
        }
    }

    function showResult()
    {
        if(count >= quizes.length - 1)
        {
            // Update score if last question is correct.
            if(selectedOption == quizes[count].correct_answer)
            {
                setScore(preveScore => preveScore + 1);
            }
            setResultShowed(true);
        }
        else
        {
            alert("You are not authorized to do this");
        }
    }

    function tryAgain()
    {
        setCount(0);
        setSelectedOption(null);
        setScore(0);
        setResultShowed(false);
    }

    useEffect(() => {
        if (questionRef.current) 
        {
            questionRef.current.textContent = `${count + 1}. ${quizes[count].question}`;
        }
    }, [count, resultShowed]);
  return (
    <div className="quiz-container" id="quiz">
        {!resultShowed ?
        <div className="quiz-header">
            <ul>
                <h2 id="question" ref={questionRef}></h2>
                <ul>
                    {quizes[count].options.map((option, index) => (
                        <li key={index}>
                            <input type="radio" name="answer" className="answer" id={`option${index}`} value={option} onChange={() => {setSelectedOption(option)}} />
                            <label htmlFor={`option${index}`}>{option}</label>
                        </li>
                    ))}
                </ul>
            </ul>
            {count < quizes.length - 1 ? (
                <button onClick={handleNext}>Next</button>
                ) : (
                <button onClick={showResult}>Show Results</button>
            )}
        </div>
        :
            <div className="result">
                <h2>Result: {score}/{quizes.length}</h2>
                <button onClick={tryAgain}>Try Again</button>
            </div>
        }
    </div>
  );
};

export default Quiz;
