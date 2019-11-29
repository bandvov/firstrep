import React from "react";
import ItemDetails, { Record } from "../ItemDetails";
import withSwapiService from "../hoc-helper/WithSwapiService";

const StarshipDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="name" label="name" />
      <Record field="model" label="model" />
      <Record field="manufacturer" label="manufacturer" />
      <Record field="crew" label="crew" />
    </ItemDetails>
  );
};
const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  };
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
