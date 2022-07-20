import React from 'react';
import GrayImage from '../../shared/gray_image';

function Planet(props) {
    return (
        <div>
            <h4>
                { props.name }
            </h4>
            <p>
                { props.description }
            </p>
            <GrayImage 
                image_url={ props.image_url }                   
            />
        </div>
    )
}

export default Planet;