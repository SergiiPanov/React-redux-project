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
import { RoutePath } from "../../../../router/constants/";
import { actions } from "../../store";
import { getAllUsers } from "../../store/selectors";
import * as Yup from "yup";
import { Formik } from "formik";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  description: {
    marginTop: theme.spacing(2),
    textAlign: "center",
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
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(actions.A_FetchAllUsersRequest());
  }, [dispatch]);

  const emailAddresses = useSelector(getAllUsers()).map(item => item["email"]);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("must be a valid email")
      .min(3, "smallest then 3 symbol")
      .max(255, "biggest then 255 symbol")
      .required("write any word")
      .oneOf(emailAddresses, "Email is not registered"),
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.description} component="h1" variant="h5">
          Forgot password ?
        </Typography>
        <Typography className={classes.description} component="p" variant="subtitle1">
          Enter your email and we'll send you a link to get back into your account.
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
            //dispatch(actions.A_SignUpRequest(values));
            //dispatch(push(RoutePath.SIGN_IN));
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form className={classes.form} noValidate>
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
              <Button
                disabled={isSubmitting}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Send Login Link
              </Button>
              <Grid container>
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
    </Container>
  );
};
