import React from "react";
import { Switch } from "react-router";
import { privateRouter, publicRouter } from "./router";
import routeAccessor from "./router/routAccessor";

export default () => (
  <Switch>
    {publicRouter.map((route) => routeAccessor(null, route))}
    {privateRouter().map((route) => routeAccessor(null, route))}
  </Switch>
);
