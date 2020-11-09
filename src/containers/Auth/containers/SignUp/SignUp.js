import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(actions.A_FetchAllUsersRequest());
  }, [dispatch]);

  const emailAddresses = useSelector(getAllUsers()).map(item => item["email"]);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "smallest then 3 symbol")
      .max(255, "biggest then 255 symbol")
      .required("write any word"),
    lastName: Yup.string()
      .min(3, "smallest then 3 symbol")
      .max(255, "biggest then 255 symbol")
      .required("write any word"),
    email: Yup.string()
      .email("must be a valid email")
      .min(3, "smallest then 3 symbol")
      .max(255, "biggest then 255 symbol")
      .required("write any word")
      .notOneOf(emailAddresses, "Already exist"),
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
          Sign up
        </Typography>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          onSubmit={values => {
            dispatch(actions.A_SignUpRequest(values));
            dispatch(push(RoutePath.SIGN_IN));
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form className={classes.form} onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                  {touched.firstName && errors.firstName ? (
                    <div style={{ color: "red" }}>{errors.firstName}</div>
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                  {touched.lastName && errors.lastName ? <div style={{ color: "red" }}>{errors.lastName}</div> : null}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {touched.email && errors.email ? <div style={{ color: "red" }}>{errors.email}</div> : null}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
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
                </Grid>
              </Grid>
              <Button
                disabled={isSubmitting}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link onClick={() => dispatch(push(RoutePath.SIGN_IN))} variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </div>
    </Container>
  );
};
