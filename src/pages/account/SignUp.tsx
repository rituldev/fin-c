import React from "react";
import Slider from "react-slick";
import { SignUpStage } from "../../shared/enums/sign-up";
import AdminUserDetails from "./sign-up/AdminUserDetails";
import { makeStyles } from "@mui/styles";
import { Box, Stepper, Step, StepLabel } from "@mui/material";
import portalTheme from "../../themes/App.theme";
import { enumToArray, replaceAll } from "../../utils/commonFunctions";
import CompanyDetails from "./sign-up/CompanyDetails";
import DocumentVerification from "./sign-up/DocumentVerification";

const useStyles = makeStyles(() => ({
  StepperHeader: {
    maxWidth: 678,
    margin: "0 auto",
    padding: "30px 0",
    "& .MuiStep-root": {
      padding: "0 20px",
      "& .MuiStepLabel-iconContainer": {
        paddingRight: 10,
        "& .MuiSvgIcon-root": {
          width: 30,
          height: 30,
        },
      },
      "& .MuiStepLabel-labelContainer": {
        "& .MuiStepLabel-label": {
          color: [portalTheme.palette.text.disabled],
          fontSize: "1rem",
          lineHeight: 1.2,
          [portalTheme.breakpoints.up("lg")]: {
            fontSize: "1.2rem",
          },
          "&.Mui-active": {
            color: [portalTheme.palette.primary.main],
          },
          "&.Mui-completed": {
            color: [portalTheme.palette.primary.main],
          },
        },
      },
    },
  },
}));

const SignUp: React.FC = () => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(
    SignUpStage.Admin_User_details
  );
  const handleNextClick = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBackClick = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  return (
    <Box className="mb-3 h-100vh mt-5">
      <Stepper className={classes.StepperHeader} activeStep={activeStep}>
        {enumToArray(SignUpStage)?.map((step) => {
          return (
            <Step key={SignUpStage[step]}>
              <StepLabel>{""}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep == SignUpStage.Admin_User_details && (
        <AdminUserDetails handleNextClick={handleNextClick} />
      )}
      {activeStep == SignUpStage.Company_Details && (
        <CompanyDetails
          handleNextClick={handleNextClick}
          handleBackClick={handleBackClick}
        />
      )}
      {activeStep == SignUpStage.Document_verification && (
        <DocumentVerification
          handleNextClick={handleNextClick}
          handleBackClick={handleBackClick}
        />
      )}
    </Box>
  );
};
export default SignUp;
