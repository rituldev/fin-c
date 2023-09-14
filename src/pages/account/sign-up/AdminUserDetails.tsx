import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Formik, Field } from "formik";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Routing } from "../../../shared/constants/routing";
import FormikInput from "../../../shared/mui-formik/FormikInput";

interface IAdminUserDetailsProps {
  handleNextClick?: () => void;
}

const AdminUserDetails: React.FC<IAdminUserDetailsProps> = ({
  handleNextClick,
}) => {
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
    <div className="d-flex align-items-center m-2">
      <div className="page-with-box white-box">
        <div className="account-heading w-100pr">
          <Typography variant="h1">Admin User Details</Typography>
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
                  <Grid item sm={6} xs={12}>
                    <Field
                      label="First Name"
                      type="text"
                      name="firstName"
                      id="firstName"
                      maxLength={150}
                      component={FormikInput}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Field
                      label="Last Name"
                      type="text"
                      name="lastName"
                      id="lastName"
                      maxLength={150}
                      component={FormikInput}
                    />
                  </Grid>
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
                      label="Mobile Number"
                      type="text"
                      name="mobileNo"
                      id="mobileNo"
                      placeholder="Enter your mobile number"
                      maxLength={15}
                      startAdornment={
                        <InputAdornment position="start">
                          <Select value={91}>
                            <MenuItem value={91}>+91</MenuItem>
                          </Select>
                        </InputAdornment>
                      }
                      className="form-group-with-select"
                      component={FormikInput}
                    />
                  </Grid>
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
                  <Grid item sm={6} xs={12}>
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
                  <Grid item sm={6} xs={12}>
                    <Field
                      label="Confirm New Password"
                      type={showPassword?.confirm ? "text" : "password"}
                      name="password"
                      id="password"
                      maxLength={16}
                      endAdornment={
                        <InputAdornment position="end">
                          {showPassword?.confirm
                            ? showHidePassword("confirm", true)
                            : showHidePassword("confirm", false)}
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
                          onClick={() => handleNextClick()}
                        >
                          Next
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className="d-flex align-items-center">
                    <Typography className="secondary-link">
                      Already have an account?{" "}
                    </Typography>
                    <Link
                      to={Routing.Login}
                      title="Sign Up"
                      className="ml-5px secondary-link"
                      style={{ color: "#07689F", fontWeight: "500" }}
                    >
                      Login
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
export default AdminUserDetails;
