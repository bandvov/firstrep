import React from "react";
import { Redirect } from "react-router-dom";

const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className="jumbotron">
      <h2>to enter press login</h2>
      <input
        type="button"
        className="btn btn-primary"
        value="login"
        onClick={onLogin}
      />
    </div>
  );
};
export default LoginPage;
