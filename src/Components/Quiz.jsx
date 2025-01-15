import React from "react";
import "../quiz.css";
import quizes from "../quiz_questions.json";
import { useRef, useEffect, useState } from "react";
const Quiz = () => {
    const questionRef = useRef("");
    const [count, setCount] = useState(0);
    function handleNext()
    {
        if(count < quizes.length - 1)
        {
            setCount(count+ 1);
        }
    }

    useEffect(() => {
        if (questionRef.current) 
        {
            questionRef.current.textContent = `${count + 1}. ${quizes[count].question}`;
        }
    }, [count]);
  return (
    <div className="quiz-container" id="quiz">
        <div className="quiz-header">
            <ul>
                <h2 id="question" ref={questionRef}></h2>
                <ul>
                    {quizes[count].options.map((option, index) => (
                        <li key={index}>
                            <input type="radio" name="answer" className="answer" id={`option${index}`} />
                            <label htmlFor={`option${index}`}>{option}</label>
                        </li>
                    ))}
                </ul>
            </ul>
            {count < quizes.length - 1 ? (
                <button onClick={handleNext}>Next</button>
                ) : (
                <button>Show Results</button>
            )}
        </div>
    </div>
  );
};

export default Quiz;
