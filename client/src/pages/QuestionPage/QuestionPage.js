import React, {useEffect, useState} from "react"
import {SubmitAnswerButton, QuestionTypography, TextInputField} from "./QuestionStyling";

function QuestionPage() {
    const [userInput, setUserInput] = useState("");
    const questionText = "How are you feeling?";
    const delay = 50;
    const [questionPrompt, setQuestionPrompt] = useState("");
    const [questionIndex, setQuestionIndex] = useState(0);

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
        try {
            const response = await fetch("/api/submitAnswer", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: userInput
            })
            if (!response.ok) {
                throw new Error("Failed to submit error");
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <div className="question-field">
            <QuestionTypography>{questionPrompt}</QuestionTypography>
            <TextInputField label="Your answer" onChange={handleUserInput} multiline />
            <SubmitAnswerButton onClick={submitAnswer}>Submit now!</SubmitAnswerButton>
        </div>
    );

}

export default QuestionPage;
