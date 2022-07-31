import React from "react";
import './style.css'


function GrayImage(props) {
    return (
        <div>
            <img 
                className={ props.gray ? 'gray-image' : 'color-image'} 
                src={props.image_url}
            ></img>
        </div>
    )
}

export default GrayImage;
