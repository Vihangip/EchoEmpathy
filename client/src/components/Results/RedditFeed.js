import React from 'react';
import RedditCard from './RedditCard';
import postData from './postData.json'; 
import "./RedditFeed.css"

const RedditFeed = () => {
  return (
    <div className = "redditCardFlex">
       {postData.posts.map((post, index) => (
        <RedditCard key={index} post={post} />
      ))}
    </div>
  )
};

export default RedditFeed;
