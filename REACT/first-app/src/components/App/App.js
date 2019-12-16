import React from "react";
import "./App.scss";
import AppHeader from "../AppHeader";
import SectionAbout from "../SectionAbout";
import SectionGallery from "../SectionGallery";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <SectionAbout />
      <SectionGallery />
    </div>
  );
};

export default App;
