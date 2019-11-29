import React from "react";
import "./RandomPlanet.css";
import SwapiService from "../../services/SwapiService";
import Spinner from "../Spinner";
import ErrorIndicator from '../ErrorIndicator';
import PropTypes from 'prop-types';

export default class RandomPlanet extends React.Component {

  static defaultProps ={
    updateInterval:10011
  }

static propTypes= {
 updateInterval: PropTypes.number
}
  SwapiService = new SwapiService();
  state = {
    planet: {},
    loading: true,
    error:false
  };
  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, this.props.updateInterval);
    console.log("mount");
  }
  componentWillUnmount() {
    console.log("unmount");
    clearInterval(this.interval);
  }

  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.SwapiService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
  };
  onError=(err)=>{
    this.setState({error:true,loading:false});
  }

  render() {
    console.log(this.state);
    const errorMessage= this.state.error?<ErrorIndicator />:null;
    const hasError = !(this.state.loading||this.state.error);
    const spinner = this.state.loading ? <Spinner /> : null;
    const view = hasError ? (
      <PageView planet={this.state.planet} />
    ) : null;
    return (
      <div className="d-flex random-planet">
        {errorMessage}
        {spinner}
        {view}
      </div>
    );
  }
}


function PageView({ planet }) {
  return (
    <React.Fragment>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`}
      />
      <div className="">
        <ul className="list-group">
          <li>
            <h3>Planet</h3>
          </li>

          <li className="list-group-item">
            <span>name</span> <span>{planet.name}</span>
          </li>
          <li className="list-group-item">
            <span>diameter</span> <span>{planet.diameter}</span>
          </li>
          <li className="list-group-item">
            <span>population</span> <span>{planet.population}</span>
          </li>
          <li className="list-group-item">
            <span>climate</span> <span>{planet.climate}</span>
          </li>
          <li className="list-group-item">
            <span>terrain</span> <span>{planet.terrain}</span>
          </li>
          <li className="list-group-item">
            <span>rotation period</span> <span>{planet.rotationPeriod}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
