import {makeStyles} from "@material-ui/core/styles";

export default makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        borderRight: "1px solid #ccc",
        height: "100%",
    },
}));