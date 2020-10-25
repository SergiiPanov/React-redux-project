import React from "react";
import {Header} from "../../../Header/containers";
import {SideBar} from "../../../SideBar/containers";
import {Grid} from "@material-ui/core";

export default ({children}) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item xs={3}>
                <SideBar/>
            </Grid>
            <Grid item xs={9}>
                {children}
            </Grid>
        </Grid>

    );
};
