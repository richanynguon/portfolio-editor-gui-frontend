import React, {  ReactType } from "react";
import { Route, Redirect } from "react-router-dom";

interface PrivateRouteProps  {
  Component:  ReactType,
  path: string,
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ Component, path }) => {
  return (
    <Route
      path={path}
      render={props =>
        localStorage.getItem("a") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
