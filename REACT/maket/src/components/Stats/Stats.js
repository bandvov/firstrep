import React from "react";
import './Stats.scss'

const Stats = () => {
  return (
    <div className="stats wrapper">
      <div className="stats-text">
        <h2>Our Company statistics</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque earum
          itaque, nihil repellendus magnam tenetur cupiditate id delectus
          accusantium repellat, molestiae est accusamus quo! Quam error suscipit
          iste non, quasi consequatur labore.
          itaque, nihil repellendus magnam tenetur cupiditate id delectus
          accusantium repellat, molestiae est accusamus quo! Quam error suscipit
          iste non, quasi consequatur labore.
          itaque, nihil repellendus magnam tenetur cupiditate id delectus
          accusantium repellat, molestiae est accusamus quo! Quam error suscipit
          iste non, quasi consequatur labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque earum
          itaque, nihil repellendus magnam tenetur cupiditate id delectus
          itaque, nihil repellendus magnam tenetur cupiditate id delectus
          accusantium repellat, molestiae est accusamus quo! Quam error suscipit
          iste non, quasi consequatur labore.
          itaque, nihil repellendus magnam tenetur cupiditate id delectus
          itaque, nihil repellendus magnam tenetur cupiditate id delectus
          accusantium repellat, molestiae est accusamus quo! Quam error suscipit
          iste non, quasi consequatur labore.
          itaque, nihil repellendus magnam tenetur cupiditate id delectus
          itaque, nihil repellendus magnam tenetur cupiditate id delectus
          accusantium repellat, molestiae est accusamus quo! Quam error suscipit
          iste non, quasi consequatur labore.
        </p>
      </div>
      <div className="stats-num">
        <div className="state-line">
          <div className="square">
            <span className="stats-square">711</span>
            <span className="stats-text">Appartments</span>
          </div>
          <div className="square">
            <span className="stats-square">2211</span>
            <span className="stats-text">Rooms</span>
          </div>
        </div>
        <div className="state-line">
          <div className="square">
            <span className="stats-square">8888</span>
            <span className="stats-text">Square meters</span>
          </div>
          <div className="square">
            <span className="stats-square">7711</span>
            <span className="stats-text">Appartments</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stats;
