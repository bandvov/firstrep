import React from "react";
import "./App.scss";
import AppHeader from "../AppHeader";
import SectionAbout from "../SectionAbout";
import SectionGallery from "../SectionGallery";
import SectionFooter from "../SectionFooter";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <SectionAbout />
      <SectionGallery />
      <SectionFooter />
    </div>
  );
};

export default App;
