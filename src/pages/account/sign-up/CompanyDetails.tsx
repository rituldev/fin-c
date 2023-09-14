import { Button, Grid, Typography } from "@mui/material";
import { Formik, Field } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { Routing } from "../../../shared/constants/routing";
import FormikInput from "../../../shared/mui-formik/FormikInput";

interface ICompanyDetailsProps {
  handleBackClick?: () => void;
  handleNextClick?: () => void;
}

const CompanyDetails: React.FC<ICompanyDetailsProps> = ({
  handleBackClick,
  handleNextClick,
}) => {
  const [showPassword, setShowPassword] = React.useState({
    new: false,
    confirm: false,
  });
  const initialState = {
    email: "",
    password: "",
  };

  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.log("login");
  };
  return (
    <div className="d-flex align-items-center m-2">
      <div className="page-with-box white-box">
        <div className="account-heading w-100pr">
          <Typography variant="h1">Company Details</Typography>
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
                      label="Company Name"
                      type="text"
                      name="companyName"
                      id="companyName"
                      maxLength={150}
                      component={FormikInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      label="Address Line 1"
                      type="text"
                      name="addressLine1"
                      id="addressLine1"
                      maxLength={150}
                      component={FormikInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      label="Address Line 2(optional)"
                      type="text"
                      name="addressLine2"
                      id="addressLine2"
                      maxLength={150}
                      component={FormikInput}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Field
                      label="City"
                      type="text"
                      name="city"
                      id="city"
                      maxLength={150}
                      component={FormikInput}
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Field
                      label="Pincode"
                      type="text"
                      name="pincode"
                      id="pincode"
                      maxLength={150}
                      component={FormikInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container className="pb-4 horizontal-630">
                      <Grid item xs={6}>
                        <Button
                          size="large"
                          variant="outlined"
                          disableElevation
                          // type="submit"
                          color="primary"
                          onClick={() => handleBackClick()}
                        >
                          Previous
                        </Button>
                      </Grid>
                      <Grid item xs={6} className="d-flex justify-content-end">
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
export default CompanyDetails;
