import React from "react";
import "./App.css";
import Menu from "../Menu";
import menuLinks from "../../menuLinks";
import Intro from "../Intro";
import Stats from "../Stats";
import Apartments from "../Apartments";

console.log(menuLinks);

function App() {
  return (
    <div>
      <Menu menuLinks={menuLinks} />
      <Intro />
      <Stats />
      <Apartments />
    </div>
  );
}

export default App;
