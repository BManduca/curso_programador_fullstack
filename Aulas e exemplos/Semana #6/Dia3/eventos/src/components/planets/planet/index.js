import React from 'react';
import GrayImage from '../../shared/gray_image';
import DescriptionWithLink from '../../shared/description_with_link';

function Planet(props) {
    return (
        <div onClick={() => props.clickPlanet(props.name)}>
            <h4>
                { props.name }
            </h4>
            <DescriptionWithLink
                description = { props.description }
                link = { props.link }
            />
            <GrayImage image_url={ props.image_url } />
        </div>
    )
}

export default Planet;