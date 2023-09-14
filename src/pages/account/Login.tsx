import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Field, Formik } from "formik";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Routing } from "../../shared/constants/routing";
import FormikInput from "../../shared/mui-formik/FormikInput";
import { VisibilityOff, Visibility } from "@mui/icons-material";

const Login: React.FC = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = React.useState({
    new: false,
    confirm: false,
  });
  const initialState = {
    email: "",
    password: "",
  };
  const handleShowPassword = React.useCallback(
    (name: string, show: boolean) => {
      setShowPassword({ ...showPassword, [name]: show });
    },
    [showPassword]
  );

  const showHidePassword = (name: string, show: boolean) => (
    <IconButton
      title={show ? "Hide" : "Show"}
      onClick={() => handleShowPassword(name, !show)}
      edge="end"
    >
      {showPassword[name] ? (
        <VisibilityOff sx={{ width: "25px", height: "25px" }} />
      ) : (
        <Visibility sx={{ width: "25px", height: "25px" }} />
      )}
    </IconButton>
  );
  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.log("login");
  };
  return (
    <div className="d-flex align-items-center h-100vh">
      <div className="page-with-box white-box">
        <div className="account-heading w-100pr">
          <Typography variant="h1">Log In</Typography>
        </div>
        <Formik
          initialValues={initialState}
          onSubmit={handleSubmit}
          validateOnBlur={false}
          validateOnChange={true}
          enableReinitialize={true}
        >
          {(props: any) => {
            const { handleSubmit } = props;
            return (
              <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Field
                      label="Email"
                      type="email"
                      name="email"
                      id="email"
                      maxLength={150}
                      component={FormikInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      label="Password"
                      type={showPassword?.new ? "text" : "password"}
                      name="password"
                      id="password"
                      maxLength={16}
                      endAdornment={
                        <InputAdornment position="end">
                          {showPassword?.new
                            ? showHidePassword("new", true)
                            : showHidePassword("new", false)}
                        </InputAdornment>
                      }
                      component={FormikInput}
                    />
                  </Grid>
                  <Grid item xs={12} className="d-flex">
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                      className="pb-4 horizontal-630"
                    >
                      <Grid item>
                        <Button
                          size="large"
                          variant="contained"
                          disableElevation
                          // type="submit"
                          color="primary"
                          onClick={() => history.push(`${Routing.DashBoard}`)}
                        >
                          Login
                        </Button>
                      </Grid>
                      <Grid item>
                        <Link
                          to={Routing.ForgotPassword}
                          title="Forgot Password?"
                          className="secondary-link"
                        >
                          Forgot Password?
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className="d-flex align-items-center">
                    <Typography className="secondary-link">
                      Don’t have an account?{" "}
                    </Typography>
                    <Link
                      to={Routing.SignUp}
                      title="Sign Up"
                      className="ml-5px secondary-link"
                      style={{ color: "#07689F", fontWeight: "500" }}
                    >
                      Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
