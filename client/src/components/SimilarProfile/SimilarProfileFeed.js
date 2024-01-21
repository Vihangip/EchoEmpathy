import React from 'react';
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
    const [currentIndex, setCurrentIndex] = useState([0,0,0,0,0,0]);

    function pickAnImage() {
        const index = Math.floor(Math.random() * images.length);
        if (currentIndex[index] !== 0) {
            return pickAnImage();
        }

        setCurrentIndex( currentIndex[index] = 1)   // not available anymore
        return images[index];
    }


    const image = pickAnImage();

    return (
        <div className = "similarProfileFeed">
             {props.data.map((post, index) => (
                <SimilarProfile key={index} post={post} image={image}/>
        ))}
        </div>
    );
};

export default SimilarProfileFeed;