import React from "react";

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <h2 className="jumbotron">This page is full of secrets</h2>;
  }
  return <h3>You shouldnt see this</h3>;
};
export default SecretPage;