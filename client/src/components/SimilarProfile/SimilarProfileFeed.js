import React, {useEffect} from 'react';
import SimilarProfile from './SimilarProfile'
import "./SimilarProfileFeed.css"
import { useState } from 'react';
import red1 from '../../pics/red1.png';
import red2 from '../../pics/red2.png';
import red3 from '../../pics/red3.png';
import red4 from '../../pics/red4.png';
import red5 from '../../pics/red5.png';
import red6 from '../../pics/red6.png';


const SimilarProfileFeed = (props) => {
    const images = [red1, red2, red3, red4, red5, red6];

    const [uniqueImages, setUniqueImages] = useState([...images]); // Duplicate the images array for manipulation

    useEffect(() => {
        // Shuffle the uniqueImages array when the component mounts
        setUniqueImages(prevImages => {
            let tempImages = [...prevImages];
            for (let i = tempImages.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [tempImages[i], tempImages[j]] = [tempImages[j], tempImages[i]]; // Swap elements
            }
            return tempImages;
        });
    }, []); // Empty dependency array to run only once on mount

    const getImageForProfile = (index) => {
        // If there are more posts than images, start reusing images from the beginning
        return uniqueImages[index % uniqueImages.length];
    };


    return (
        <div className = "similarProfileFeed">
             {props.data.map((post, index) => (
                <SimilarProfile key={index} post={post} image={getImageForProfile(index)}/>
        ))}
        </div>
    );
};

export default SimilarProfileFeed;