import React, {useEffect, useState} from "react"
import {SubmitAnswerButton, QuestionTypography, TextInputField} from "./QuestionStyling";
import {useNavigate} from "react-router-dom";
import {CircularProgress} from "@mui/material";

function QuestionPage() {
    const [userInput, setUserInput] = useState("");
    const questionText = "How are you feeling?";
    const delay = 50;
    const [questionPrompt, setQuestionPrompt] = useState("");
    const [questionIndex, setQuestionIndex] = useState(0);

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (questionIndex < questionText.length) {
            const timeout = setTimeout(() => {
                setQuestionPrompt(prevText => prevText + questionText[questionIndex]);
                setQuestionIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [questionPrompt, questionIndex]);

    function handleUserInput(event) {
        const newValue = event.target.value;
        setUserInput(newValue);
        console.log(newValue);
    }

    async function submitAnswer() {
        console.log(`Submitting response as - ${JSON.stringify({userInput: userInput})}`);
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:3001/api/submitAnswer", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({userInput: userInput})
            })
            if (!response.ok) {
                throw new Error("Failed to submit error");
            }
            const data = await response.json();
            setIsLoading(false);
            navigate("/reddit-results", {state: {data}});
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <>
            {isLoading ?
                <div className="loading-container">
                    <h3 className="loading-text">Loading</h3>
                    <CircularProgress size={100} />
                </div>
                :
                <>
                    <div className="question-field">
                        <QuestionTypography>{questionPrompt}</QuestionTypography>
                        <TextInputField label="Let your thoughts echo...." onChange={handleUserInput} multiline/>
                    </div>
                    <div className="question-field1">
                        <SubmitAnswerButton onClick={submitAnswer}>Submit</SubmitAnswerButton>
                    </div>
                </>
            }
        </>
    );

}

export default QuestionPage;

