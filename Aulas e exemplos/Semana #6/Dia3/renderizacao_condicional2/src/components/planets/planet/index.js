import React from "react";
import GrayImage from "../../shared/gray_image";
import DescriptionWithLink from "../../shared/description_with_link";

function Planet(props) {
  const names = ["a", "b", "c", "d", "e", "f"];

  let title;

  if (props.title_with_underline) {
    title = (
      <h2>
        {" "}
        <u> {props.name} </u>{" "}
      </h2>
    );
  } else {
    title = <h4> {props.name} </h4>;
  }

  return (
    <div>
      {title}
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImage image_url={props.image_url} gray={props.gray} />
      <h4>Satélites</h4>
      <ul>
        {/* {["a", "b", "c", "d", "e", "f"].map((nameSattelite) => ())}  Maneira alternativa */}
        {names.map((nameSattelite) => (
          <li>Satélite {nameSattelite}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default Planet;
