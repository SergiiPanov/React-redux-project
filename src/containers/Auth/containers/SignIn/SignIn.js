import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { RoutePath } from "../../../../router/constants";
import { getAllUsers } from "../../store/selectors";
import { actions } from "../../store";
import { Formik } from "formik";
import * as Yap from "yup";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.A_FetchAllUsersRequest());
  }, [dispatch]);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("must be a valid email")
      .min(3, "smallest then 3 symbol")
      .max(255, "biggest then 255 symbol")
      .required("write any word"),
    password: Yup.string()
      .min(3, "smallest then 3 symbol")
      .max(255, "biggest then 255 symbol")
      .required("write any word"),
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={values => {
            dispatch(actions.A_SignInRequest(values));
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email ? <div style={{ color: "red" }}>{errors.email}</div> : null}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password ? <div style={{ color: "red" }}>{errors.password}</div> : null}
              <Button
                disabled={isSubmitting}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link onClick={() => dispatch(push(RoutePath.FORGOT))} variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link onClick={() => dispatch(push(RoutePath.SIGN_UP))} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
};
