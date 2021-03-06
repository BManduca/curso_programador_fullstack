import React from "react";


function DescriptionWithLink(props) {
    return (
        <>
            <p> { props.description } </p>
            <p>
                <a href={props.link}>{ props.link }</a>
            </p>
        </>
    )
}

export default DescriptionWithLink;