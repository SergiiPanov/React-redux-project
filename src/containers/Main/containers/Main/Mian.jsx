import React, { useEffect } from "react";
import { Header } from "../../../Header/containers";
import { SideBar } from "../../../SideBar/containers";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import * as actions from "../../../Articles/store/actions";
import ComposedComponent from "../../../../utils/requireAuth";

export default ComposedComponent(({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.A_fetchArticlesRequest());
  }, [dispatch]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={3}>
        <SideBar />
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  );
});
