import React from "react";
import './style.css'


function GrayImage(props) {
    return (
        <div>
            <img class="gray-image" src={props.image_url}></img>
        </div>
    )
}

export default GrayImage;
