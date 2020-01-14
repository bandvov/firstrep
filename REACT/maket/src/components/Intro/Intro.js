import React from "react";
import './Intro.scss'

function Intro() {
  return (
    <main>
      <section className="intro wrapper">
        <div className="intro-img">
          <p className="intro-text">Find your New<br />apartment</p>
        </div>
        <div className="intro-contacts">
          <p><i className="fa fa-phone" aria-hidden="true"></i> (099)123 45 678</p>
          <p>Melbourn, Australia</p>
        </div>
      </section>
    </main>
  );
}
export default Intro;
