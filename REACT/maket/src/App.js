import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import menuLinks from './menuLinks.json';


console.log(menuLinks);

function App() {
  return <Menu menuLinks={menuLinks} />;
}

export default App;
