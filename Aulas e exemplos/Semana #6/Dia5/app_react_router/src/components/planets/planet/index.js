import React, { useState, useEffect } from "react";
import GrayImage from "../../shared/gray_image";
import DescriptionWithLink from "../../shared/description_with_link";

import { Link } from 'react-router-dom'


const Planet = (props) => {

  let title;
  if (props.title_with_underline) {
    title = (
      <h2>
        {" "}
        <u> {props.name} </u>{" "}
      </h2>
    )
  } else {
    title = <h4> {props.name} </h4>;
  }

  return (
    <div>
      <Link to={`/planet/${props.id}`}> {title} </Link>
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImage image_url={props.image_url} gray={props.gray} />
    </div>
  )
}

export default Planet;
