import React from 'react';
import './RedditCard.css';
import redditLogo from '../../pics/Reddit-Logo.wine.png';

const RedditCard = (props) => {
    //TODO - more fields to be added
  return (
    <div className="reddit-card">
      <div className="user-info">
        <img src={redditLogo} alt={props.post.userName} />
        {/* <span>{props.post.userName}</span> */}
      </div>
        <a href={props.post.url} className="link-color">
      <div className="post-title">
        {props.post.title}
      </div>
        </a>
      <div className="post-body">
        {props.post.body}
      </div>
    </div>
  );
};

export default RedditCard;
