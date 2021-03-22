import React from 'react';

const PreLoad = (props) => {

        for(let i = 0; i < props.preloadImage.length; i++){
            const img = new Image();

            const src = props.preloadImage[i].location;
            img.src = src;
        };

        for(let i = 0; i < props.preloadKnowledge.length; i++){
            const img = new Image();

            const src = props.preloadKnowledge[i].image;
            img.src = src;
        };
        
    return(
        <div></div>
    );
  }

export default PreLoad;

