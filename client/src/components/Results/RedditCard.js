import React from 'react';
import './RedditCard.css';

const RedditCard = (props) => {
  return (
    <div className="reddit-card">
      <div className="user-info">
        <img src={props.post.profilePic} alt={props.post.userName} />
        <span>{props.post.userName}</span>
      </div>
      <div className="post-title">
        {props.post.title}
      </div>
      <div className="post-body">
        {props.post.body}
      </div>
    </div>
  );
};

export default RedditCard;
