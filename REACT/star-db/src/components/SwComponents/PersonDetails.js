import React from "react";
import ItemDetails, { Record } from "../ItemDetails";
import withSwapiService from "../hoc-helper/WithSwapiService";

const PersonDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="name" label="name" />
      <Record field="gender" label="gender" />
      <Record field="birthYear" label="birth year" />
      <Record field="eyeColor" label="eye color" />
    </ItemDetails>
  );
};
const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  };
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
