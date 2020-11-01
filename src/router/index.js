import {RoutePath} from "./constants";
import {RouteLabel} from "./constants";
import React from "react";
import {Articles} from "../containers/Articles/containers";
import WhiteNoise from "../WhiteNoise"
import {EditArticle, AddArticle} from "../containers/Articles/components";



export const privateRouter = (userRole) =>
    [
        {
            path: RoutePath.ARTICLES,
            exact: true,
            component: Articles,
            accessLevel: [],
            children: [
                {
                    path: "/:id",
                    exact: true,
                    component: EditArticle,
                    accessLevel: [],
                    children: [],
                    label: RouteLabel.ARTICLES,
                    icon: null,
                }
                ],
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
        {
            path: RoutePath.WHITE_NOISE,
            exact: true,
            component: () => <WhiteNoise/>,
            accessLevel: [],
            children: [],
            label: RouteLabel.WHITE_NOISE,
            icon: null,
        },
        {
            path: RoutePath.ADD_ARTICLE,
            exact: true,
            component: AddArticle,
            accessLevel: [],
            children: [],
            label: RouteLabel.ADD_ARTICLE,
            icon: null,
        },
    ].filter((route) => (userRole ? route.accessLevel.includes(userRole) : true));

export const publicRouter = [
    {
        path: RoutePath.SIGN_IN,
        exact: true,
        component: () => <div>logIn</div>,
        label: RouteLabel.SIGN_IN,
        children: [],
    },
    {
        path: RoutePath.SIGN_UP,
        exact: true,
        component: () => <div>registration</div>,
        children: [],
        label: RouteLabel.SIGN_UP,
    },
    {
        path: RoutePath.RESET,
        exact: true,
        component: () => <div>reset-password"</div>,
        label: RouteLabel.RESET,
        children: [],
    },
    {
        path: RoutePath.FORGOT,
        exact: true,
        component: () => <div>forgot-password</div>,
        label: RouteLabel.FORGOT,
        children: [],
    },
    {
        path: RoutePath.ACTIVATION,
        exact: true,
        component: () => <div>activation</div>,
        label: RouteLabel.ACTIVATION,
        children: [],
    },
];
