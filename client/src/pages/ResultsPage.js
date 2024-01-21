import React from 'react';
import {Typography} from "@mui/material";
import Box from '@mui/material/Box';
import "./ResultsPageStyling.css"
import RedditFeed from '../components/Results/RedditFeed';
import {useLocation} from "react-router-dom";
import SimilarProfileFeed from "../components/SimilarProfile/SimilarProfileFeed";
import {Button} from "@mui/material"
import {Link} from 'react-router-dom';

function ResultsPage() {
    const location = useLocation();
    const data = location.state.data;

    return (
        <div style={{width: '100%'}}>
            <Box className = "results-page-box1">
            <Typography sx={{fontFamily:"Kreon", fontSize:"5rem"}}>These people feel the same way as you...</Typography>
            </Box>
            <Box className = "results-page-box2">
                <RedditFeed data={data.posts}></RedditFeed>
            </Box>
            <Box className = "results-page-box3">
                <SimilarProfileFeed data={data.posts}></SimilarProfileFeed>
            </Box>
            <Link to = "/answer-question" >
            <Button clasName="search-another-question-button">
                Share Another Thought
            </Button>
            </Link>
        </div>
    );
}


export default ResultsPage;