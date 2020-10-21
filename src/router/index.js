import {RoutePath} from "./constants";
import {RouteLabel} from "./constants";
import React from "react";

export const privateRouter = (userRole) =>
  [
    {
      path: RoutePath.ARTICLES,
      exact: true,
      component: () => <div>Articles</div>,
      accessLevel: [],
      children: [],
      label: RouteLabel.ARTICLES,
      icon: null,
    },
    {
      path: RoutePath.USER,
      exact: true,
      component: () => <div>User</div>,
      accessLevel: [],
      children: [],
      label: RouteLabel.USER,
      icon: null,
    },
  ].filter((route) => (userRole ? route.accessLevel.includes(userRole) : true));

export const publicRouter = [
  {
    path: RoutePath.SIGN_IN,
    exact: true,
    component: () => <div>logIn</div>,
    children: [],
  },
  {
    path: RoutePath.SIGN_UP,
    exact: true,
    component: () => <div>registration</div>,
    children: [],
  },
  {
    path: RoutePath.RESET,
    exact: true,
    component: () => <div>reset-password"</div>,
    children: [],
  },
  {
    path: RoutePath.FORGOT,
    exact: true,
    component: () => <div>forgot-password</div>,
    children: [],
  },
  {
    path: RoutePath.ACTIVATION,
    exact: true,
    component: () => <div>activation</div>,
    children: [],
  },
];
