import React from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import useStyles from "./style";

export default ({ route: { label, path } }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(push(path))} className={classes.sidebarItem}>
      {label}
    </div>
  );
};
