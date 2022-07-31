import React from "react";
import Planet from "./planet";

class Planets extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <h3>Planet List</h3>
        {/* <button onClick={showMessage}>Show Message!</button> */}
        <button>Planet</button>
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
          title_with_underline = { true }
          gray = {true}
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
        />
      </>
    );
  }


}


export default Planets;
