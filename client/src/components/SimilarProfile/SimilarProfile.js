import React from 'react';
import './SimilarProfileStyling.css';

const SimilarProfile = (props) => {
    return (
        <div className="similar-profile-styling">
            <button className="profile-button">
                <a href={props.post.profileUrl} target="_blank" rel="noopener noreferrer">
                    <img
                        className="img-sizing"
                        src={props.image}
                        alt="friend-profile"
                        onClick={() => { window.location.href = props.post.profileUrl }}
                    />
                </a>
            </button>
                <p className="chat-text">Chat with {props.post.userName}</p>
        </div>
    );
}

export default SimilarProfile;
