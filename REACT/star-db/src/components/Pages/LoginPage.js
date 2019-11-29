import React from "react";

const LoginPage = ({isLoggedIn, onLogin}) => {
  return (
    <React.Fragment>
      <h2>to enter press login</h2>
      <input type="button" className="btn btn-primary" value="login" onClick={onLogin}/>
    </React.Fragment>
  );
};
export default LoginPage;
