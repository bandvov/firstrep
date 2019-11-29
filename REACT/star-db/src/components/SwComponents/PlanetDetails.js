import React from "react";
import ItemDetails, { Record } from "../ItemDetails";
import withSwapiService from "../hoc-helper/WithSwapiService";

const PlanetDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="name" label="name" />
      <Record field="population" label="population" />
      <Record field="diameter" label="diameter" />
      <Record field="climate" label="climate" />
    </ItemDetails>
  );
};
const mapMethodsToProps = (swapiService) =>{
  return{
    getData:swapiService.getPlanet,
    getImageUrl:swapiService.getPlanetImage
  }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
