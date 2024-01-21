import React from 'react';
import "./SimilarProfile.css"
import red1 from '../../pics/red1.png';
import red2 from '../../pics/red2.png';
import red3 from '../../pics/red3.png';
import red4 from '../../pics/red4.png';
import red5 from '../../pics/red5.png';
import red6 from '../../pics/red6.png';


const SimilarProfile = (props) => {

// Array of imported pictures
    const images = [red1, red2, red3, red4, red5, red6];
    let imagesCopy = [...images]; // Create a copy of the images array

    // Function to select a random picture
    const getRandomImage = () => {
        if (imagesCopy.length === 0) {
            imagesCopy = [...images]; // Reset the copy when all images have been used
        }
        const index = Math.floor(Math.random() * imagesCopy.length);
        const image = imagesCopy[index];
        imagesCopy.splice(index, 1); // Remove the selected image from the array
        return image;
    }


    return (
        <div classNames = "similar-profile-styling">
            <button className = "profile-button">

                <a href={props.post.profileUrl} target="_blank" rel="noopener noreferrer">
                    <img
                    src={props.image}
                    alt="friend-profile"
                    onClick={() => {window.location.href=props.post.profileUrl}}
                />
                    </a>
            </button>
        </div>
    );
}

export default SimilarProfile;