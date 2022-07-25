import React from "react";
import Planet from "./planet";

function Planets() {
  return (
    <>
      <h3>Planet List</h3>
      <hr />
      <Planet
        name="Mercúrio"
        description="Lorem duis est et adipisicing est aliqua dolor dolore consequat 
                tempor occaecat. Sit magna cupidatat do minim eiusmod voluptate 
                nulla nisi est sint do qui tempor esse. Cupidatat sit amet sunt 
                nisi irure ea quis ipsum labore. Nisi mollit culpa aliquip 
                proident esse eu voluptate anim adipisicing. 
                Consectetur incididunt elit anim labore mollit cupidatat 
                magna Lorem deserunt ipsum culpa ullamco ex pariatur."
        image_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
        link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
      />
      <Planet
        name="Plutão"
        description="Lorem duis est et adipisicing est aliqua dolor dolore consequat 
                tempor occaecat. Sit magna cupidatat do minim eiusmod voluptate 
                nulla nisi est sint do qui tempor esse. Cupidatat sit amet sunt 
                nisi irure ea quis ipsum labore. Nisi mollit culpa aliquip 
                proident esse eu voluptate anim adipisicing. 
                Consectetur incididunt elit anim labore mollit cupidatat 
                magna Lorem deserunt ipsum culpa ullamco ex pariatur."
        image_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/600px-Pluto_in_True_Color_-_High-Res.jpg"
        link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
      />
    </>
  );
}

export default Planets;
