import React, {useState} from 'react';
import {CircularProgress, Typography} from "@mui/material";
import Box from '@mui/material/Box';
import "./ResultsPageStyling.css"
import RedditFeed from '../components/Results/RedditFeed';
import {useLocation} from "react-router-dom";
import SimilarProfileFeed from "../components/SimilarProfile/SimilarProfileFeed";
import {useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';
import {AnotherThoughtButton} from "./ResultsPageStyling";
import SlimLoader from "./QuestionPage/SlimLoader";

function ResultsPage() {
    const location = useLocation();
    const data = location.state.overall.data;
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    async function generateNewResp() {
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:3001/api/submitAnswer", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({userInput: location.state.overall.prompt})
            })
            if (!response.ok) {
                throw new Error("Failed to submit error");
            }
            const data = await response.json();
            setIsLoading(false);
            const overall = {
                data: data,
                prompt: location.state.overall.prompt
            }
            navigate("/reddit-results", {state: {overall}});
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <>
            {isLoading ?
                <SlimLoader />
            :
                <div style={{width: '100%'}}>
                    <Box className = "results-page-box1">
                        <Typography sx={{fontFamily:"Kreon", fontSize:"4rem"}}>These people feel the same way as you...</Typography>
                    </Box>
                    <Box className = "results-page-box2">
                        <RedditFeed data={data.posts}></RedditFeed>
                    </Box>
                    <Box className = "results-page-box3">
                        <SimilarProfileFeed data={data.posts}></SimilarProfileFeed>
                    </Box>
                    <Link to = "/answer-question" >
                        <AnotherThoughtButton className="search-another-question-button">
                            Share Another Thought
                        </AnotherThoughtButton>
                    </Link>
                    <AnotherThoughtButton className="search-another-question-button" onClick={generateNewResp}>
                        More Posts
                    </AnotherThoughtButton>
                </div>
            }
        </>
    );
}


export default ResultsPage;