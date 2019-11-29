import React from "react";
import { PlanetList, PlanetDetails } from "../SwComponents";
import Row from "../Row";

export default class PlanetsPage extends React.Component {
  state = {
    selectedItem: null
  };
  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    return (
      <Row
        left={<PlanetDetails itemId={this.state.selectedItem} />}
        right={<PlanetList onItemSelected={this.onItemSelected} />}
      />
    );
  }
}
