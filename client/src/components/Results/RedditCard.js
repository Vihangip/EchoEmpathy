import React from 'react';
import './RedditCard.css';

const RedditCard = ({ post }) => {
  return (
    <div className="reddit-card">
      <div className="user-info">
        <img src={post.userProfilePicture} alt={post.userName} />
        <span>{post.userName}</span>
      </div>
      <div className="post-title">
        {post.title}
      </div>
      <div className="post-body">
        {post.body}
      </div>
    </div>
  );
};

export default RedditCard;
