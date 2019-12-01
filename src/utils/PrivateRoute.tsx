import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

interface PrivateRouteProps  {
  component: Component,
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/landing" />
        )
      }
    />
  );
};

export default PrivateRoute;
