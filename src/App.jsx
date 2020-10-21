import React from "react";
import {Switch, Route} from "react-router";
import {privateRouter,publicRouter} from "./router";

export default () => <Switch>
    {publicRouter.map(({children,...rest}) => <Route key={rest.path}  {...rest}/> )}
    {privateRouter().map(({children,...rest}) => <Route key={rest.path} {...rest}/> )}
</Switch>
