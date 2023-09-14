import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { Formik, Field } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import FormikFileInput from "../../../shared/mui-formik/FormikFileInput";
import FormikSelect from "../../../shared/mui-formik/FormikSelect";

interface IDocumentVerificationProps {
  handleBackClick?: () => void;

  handleNextClick?: () => void;
}

const DocumentVerification: React.FC<IDocumentVerificationProps> = ({
  handleBackClick,
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
  const idProofTypes = [
    {
      name: "Birth Cirtificate",
      idProofTypeId: 1,
    },
    {
      name: "Adhar Card",
      idProofTypeId: 2,
    },
    {
      name: "Pan Card",
      idProofTypeId: 3,
    },
  ];
  return (
    <div className="d-flex align-items-center">
      <div className="page-with-box white-box mb-2">
        <div className="account-heading w-100pr">
          <Typography variant="h1">Document Verification</Typography>
        </div>
        <Formik
          initialValues={initialState}
          onSubmit={handleSubmit}
          validateOnBlur={false}
          validateOnChange={true}
          enableReinitialize={true}
        >
          {(props: any) => {
            const { setFieldValue, handleSubmit } = props;
            return (
              <form onSubmit={handleSubmit} noValidate className="w-100pr">
                <Box className="white-box">
                  {" "}
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h5" className="fw-500">
                        Identity Document
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <Field
                        label="Identity Document"
                        name="idProofType"
                        id="idProofType"
                        value={0}
                        options={idProofTypes.map((types) => ({
                          title: types?.name,
                          value: types?.idProofTypeId,
                        }))}
                        defaultOption
                        placeholder="Identity Document"
                        component={FormikSelect}
                      />
                    </Grid>
                    <Grid item xs={12} lg>
                      <ul className="document-listing">
                        <li>
                          <Field
                            title="Upload Front Copy"
                            buttonLabel="Browse File"
                            name="idProofFrontCopyFile"
                            // fileName={values?.idProofFrontCopy}
                            handleFileChange={(files) => {
                              setFieldValue("idProofFrontCopyFile", files[0]);
                            }}
                            handleFileDelete={() => {
                              setFieldValue("idProofFrontCopyFile", null);
                              setFieldValue("idProofFrontCopy", "");
                            }}
                            component={FormikFileInput}
                          />
                        </li>
                        <li>
                          <Field
                            title="Upload Back Copy"
                            buttonLabel="Browse File"
                            name="idProofBackCopyFile"
                            // fileName={values?.idProofBackCopy}
                            handleFileChange={(files) => {
                              setFieldValue("idProofBackCopyFile", files[0]);
                            }}
                            handleFileDelete={() => {
                              setFieldValue("idProofBackCopyFile", null);
                              setFieldValue("idProofBackCopy", "");
                            }}
                            component={FormikFileInput}
                          />
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="white-box my-2">
                  {" "}
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h5" className="fw-500">
                        Address Proof
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <Field
                        label="Address Proof"
                        name="idProofType"
                        id="idProofType"
                        value={0}
                        options={idProofTypes.map((types) => ({
                          title: types?.name,
                          value: types?.idProofTypeId,
                        }))}
                        defaultOption
                        placeholder="Identity Document"
                        component={FormikSelect}
                      />
                    </Grid>
                    <Grid item xs={12} lg>
                      <ul className="document-listing">
                        <li>
                          <Field
                            title="Upload Front Copy"
                            buttonLabel="Browse File"
                            name="idProofFrontCopyFile"
                            // fileName={values?.idProofFrontCopy}
                            handleFileChange={(files) => {
                              setFieldValue("idProofFrontCopyFile", files[0]);
                            }}
                            handleFileDelete={() => {
                              setFieldValue("idProofFrontCopyFile", null);
                              setFieldValue("idProofFrontCopy", "");
                            }}
                            component={FormikFileInput}
                          />
                        </li>
                        <li>
                          <Field
                            title="Upload Back Copy"
                            buttonLabel="Browse File"
                            name="idProofBackCopyFile"
                            // fileName={values?.idProofBackCopy}
                            handleFileChange={(files) => {
                              setFieldValue("idProofBackCopyFile", files[0]);
                            }}
                            handleFileDelete={() => {
                              setFieldValue("idProofBackCopyFile", null);
                              setFieldValue("idProofBackCopy", "");
                            }}
                            component={FormikFileInput}
                          />
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="white-box my-2">
                  {" "}
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h5" className="fw-500">
                        Business Proof
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <Field
                        label="Business Proof"
                        name="idProofType"
                        id="idProofType"
                        value={0}
                        options={idProofTypes.map((types) => ({
                          title: types?.name,
                          value: types?.idProofTypeId,
                        }))}
                        defaultOption
                        placeholder="Identity Document"
                        component={FormikSelect}
                      />
                    </Grid>
                    <Grid item xs={12} lg>
                      <ul className="document-listing">
                        <li>
                          <Field
                            title="Upload Front Copy"
                            buttonLabel="Browse File"
                            name="idProofFrontCopyFile"
                            // fileName={values?.idProofFrontCopy}
                            handleFileChange={(files) => {
                              setFieldValue("idProofFrontCopyFile", files[0]);
                            }}
                            handleFileDelete={() => {
                              setFieldValue("idProofFrontCopyFile", null);
                              setFieldValue("idProofFrontCopy", "");
                            }}
                            component={FormikFileInput}
                          />
                        </li>
                        <li>
                          <Field
                            title="Upload Back Copy"
                            buttonLabel="Browse File"
                            name="idProofBackCopyFile"
                            // fileName={values?.idProofBackCopy}
                            handleFileChange={(files) => {
                              setFieldValue("idProofBackCopyFile", files[0]);
                            }}
                            handleFileDelete={() => {
                              setFieldValue("idProofBackCopyFile", null);
                              setFieldValue("idProofBackCopy", "");
                            }}
                            component={FormikFileInput}
                          />
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </Box>
                <Grid container>
                  <Grid item xs={6} className="mb-2">
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
                  <Grid item xs={6} className="mb-2 d-flex justify-content-end">
                    <Button
                      size="large"
                      variant="contained"
                      disableElevation
                      // type="submit"
                      color="primary"
                      // onClick={() => handleNextClick()}
                    >
                      Submit
                    </Button>
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
export default DocumentVerification;
