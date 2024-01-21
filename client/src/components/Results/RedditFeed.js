import React from 'react';
import RedditCard from './RedditCard';
import postData from './postData.json'; 
import "./RedditFeed.css"

const RedditFeed = (props) => {
  return (
    <div className = "redditCardFlex">
       {props.data.map((post, index) => (
        <RedditCard key={index} post={post}/>
      ))}
    </div>
  )
};

export default RedditFeed;
