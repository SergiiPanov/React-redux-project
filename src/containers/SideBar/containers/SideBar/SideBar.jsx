import React from "react";
import { List, ListItem } from "@material-ui/core";
import { privateRouter } from "../../../../router";
import { SideBarItem } from "../../components/SideBarItem";
import useStyles from "./style";

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {privateRouter().map(route => (
          <ListItem button>
            <SideBarItem key={route.path} route={route} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
