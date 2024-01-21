import React from 'react';
import RedditCard from './RedditCard';
import postData from './postData.json'; 

const RedditFeed = () => {
  return (
    <div>
       {postData.posts.map((post, index) => (
        <RedditCard key={index} post={post} />
      ))}
    </div>
  );
};

export default RedditFeed;
