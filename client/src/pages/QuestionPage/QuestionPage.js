import React, {useState} from "react"
import {SubmitAnswerButton, QuestionTypography, TextInputField} from "./QuestionStyling";

function QuestionPage() {
    const [userInput, setUserInput] = useState("");

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
            <QuestionTypography>How are you feeling?</QuestionTypography>
            <TextInputField label="Your answer" onChange={handleUserInput}/>
            <SubmitAnswerButton onClick={submitAnswer}>Submit now!</SubmitAnswerButton>
        </div>
    );

}

export default QuestionPage;

