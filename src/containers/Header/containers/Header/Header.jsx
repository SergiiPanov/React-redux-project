import React, { useState, useEffect } from "react";
import "./index.scss";
import { withRouter } from "react-router";
import { privateRouter } from "../../../../router";

const Header = ({location: { pathname }}) => {
  const [headerTitle, setTitle] = useState("");

  useEffect(() => {
    const activeRoute = privateRouter().find(
      (route) => route.path === pathname || route.path.includes(pathname)
    );

    if (activeRoute) setTitle(activeRoute.label);
  }, [pathname]);

  return <header className="header">Header: {headerTitle}</header>;
};

export default withRouter(Header);
