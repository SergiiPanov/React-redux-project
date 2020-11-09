import React from "react";
import { Switch } from "react-router";
import { privateRouter, publicRouter } from "./router";
import routeAccessor from "./router/routAccessor";
import { Main } from "./containers/Main/containers/Main";

export default () => {
  return (
    <Switch>
      {publicRouter.map(route => routeAccessor(null, route))}
      <Main>{privateRouter().map(route => routeAccessor(null, route))}</Main>
    </Switch>
  );
};
