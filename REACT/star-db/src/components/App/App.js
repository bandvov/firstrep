import React from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorButton from "../ErrorButton";
import "./App.css";
import ErrorIndicator from "../ErrorIndicator";
import SwapiService from "../../services/SwapiService";
import DummySwapiService from "../../services/DummySwapiService";
import AppContext from "../SwapiServiceContext";
import { PeoplePage, PlanetsPage, StarshipPage,LoginPage, SecretPage } from "../Pages";
import { BrowserRouter, Route } from "react-router-dom";
import { StarshipDetails, PersonDetails } from "../SwComponents";

export default class App extends React.Component {
  swapiService = new DummySwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService: new DummySwapiService(),
    isLoggedIn:false
  };

  toggleRandomPlanet = () => {
    this.setState({ showRandomPlanet: !this.state.showRandomPlanet });
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log(Service.name);
      return {
        swapiService: new Service()
      };
    });
  };
  onLogin=()=>{
    this.setState({
      isLoggedIn:true
    })
  }
  render() {
    console.log(this.state.swapiService);

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const planet = this.state.showRandomPlanet ? (
      <RandomPlanet updateInterval={11111} />
    ) : null;

    return (
      <AppContext.Provider value={this.state.swapiService}>
        <BrowserRouter>
          <div className="star-db">
            <Header onServiceShange={this.onServiceChange} />
            {planet}
            <div className="toggle-and-error">
              <input
                type="button"
                className="btn btn-warning"
                value="toggle random planet"
                onClick={this.toggleRandomPlanet}
              />
              <ErrorButton />
            </div>
            <Route path="/" render={() => <h1>welcome to stardb</h1>} exact />
            <Route path="/people" render={() => <h2>People</h2>} />
            <Route path="/people/:id?" component={PeoplePage} />
            <Route path="/planets" render={() => <h2>Planets</h2>} />
            <Route path="/planets" component={PlanetsPage} />
            <Route path="/starships" render={() => <h2>Starships</h2>} />
            <Route path="/starships" component={StarshipPage} exact />
            <Route
              path="/starships/:id"
              render={({ match }) => {
                const { id } = match.params;
                console.log("match", match);

                return <StarshipDetails itemId={id} />;
              }}
            />
              <Route path="/login" render={()=>{
                return <LoginPage onLogin={this.onLogin}/>}} />
            <Route path="/secret" render={()=>(
              <SecretPage isLoggedIn={this.state.isLoggedIn}/>
            )} />
          </div>
        </BrowserRouter>
      </AppContext.Provider>
    );
  }
}
