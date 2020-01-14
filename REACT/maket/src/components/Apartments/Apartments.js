import React from "react";
import "./Apartments.scss";

const Apartments = () => {
  return (
    <section className="apartments">
      <div className="wrapper apart">
        <h2>More than 500+ apartments for rent</h2>
        <div className="cards">
          <div className="card">
            <img src="https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <div className="card-container">
              <h3>random Street, AptB124, New York</h3>
              <div className="card-info">
                <p className="price">$1500</p>
                <p className="info">
                  <span className="fa fa-shower">2BA</span>
                  <span className="fa fa-bed">2BD</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <div className="card-container">
              <h3>random Street, AptB124, New York</h3>
              <div className="card-info">
                <p className="price">$1500</p>
                <p className="info">
                  <span className="fa fa-shower">2BA</span>
                  <span className="fa fa-bed">2BD</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <div className="card-container">
              <h3>random Street, AptB124, New York</h3>
              <div className="card-info">
                <p className="price">$1500</p>
                <p className="info">
                  <span className="fa fa-shower">2BA</span>
                  <span className="fa fa-bed">2BD</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <div className="card-container">
              <h3>random Street, AptB124, New York</h3>
              <div className="card-info">
                <p className="price">$1500</p>
                <p className="info">
                  <span className="fa fa-shower">2BA</span>
                  <span className="fa fa-bed">2BD</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <div className="card-container">
              <h3>random Street, AptB124, New York</h3>
              <div className="card-info">
                <p className="price">$1500</p>
                <p className="info">
                  <span className="fa fa-shower">2BA</span>
                  <span className="fa fa-bed">2BD</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <div className="card-container">
              <h3>random Street, AptB124, New York</h3>
              <div className="card-info">
                <p className="price">$1500</p>
                <p className="info">
                  <span className="fa fa-shower">2BA</span>
                  <span className="fa fa-bed">2BD</span>
                </p>
              </div>
            </div>
          </div>
        </div>
          <div className="buttons-search">
            <form>              
              <input type="text" placeholder="search apartment..." />
              <input type="submit"  value="Search"  />
            </form><input type="button" className="show-all" value="show all apartments" />
          </div>
      </div>
    </section>
  );
};

export default Apartments;
