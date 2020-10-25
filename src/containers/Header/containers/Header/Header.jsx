import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";
import { privateRouter } from "../../../../router";
import {AppBar, Toolbar, Typography,Button, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({location: { pathname }}) => {
  let classes = useStyles()
  const [headerTitle, setTitle] = useState("");

  useEffect(() => {
    const activeRoute = privateRouter().find(
      (route) => route.path === pathname || route.path.includes(pathname)
    );

    if (activeRoute) setTitle(activeRoute.label);
  }, [pathname]);


  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {headerTitle}
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
  );
};

export default withRouter(Header);







