/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import _ from "lodash";
import {
  Button,
  FormHelperText,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Avatar } from "@mui/material";
import images from "../../assets/images";

export interface IFormikFileInputProps {
  id?: string;
  name?: string;
  value?: string;
  title?: string;
  buttonLabel?: string;
  className?: string;
  fileName?: string;
  handleFileChange?: (files: Array<any>) => void;
  handleFileDelete?: () => void;
}

const FormikFileInput = ({
  field: { ...fields },
  form: { errors },
  ...props
}): React.ReactNode => {
  const {
    id,
    name,
    title,
    buttonLabel,
    fileName,
    handleFileChange,
    handleFileDelete,
    ...rest
  }: IFormikFileInputProps = props;
  const error = Boolean(_.get(errors, fields?.name));
  const uploadInputRef = React.useRef(null);

  const handleFileUploadClick = () => {
    uploadInputRef.current && uploadInputRef.current?.click();
  };

  const handleFileUploadChange = () => {
    if (handleFileChange) handleFileChange(uploadInputRef.current?.files);
  };

  return (
    <>
      <div className="file-uploader">
        <Avatar
          src={images.IcFile}
          variant="square"
          sx={{ width: 22, height: 22 }}
        />
        {fileName || (fields?.value && !error) ? (
          <div className="document-name-outer">
            <Typography className="document-name fw-500">
              {fileName || fields?.value?.name}
            </Typography>
            <IconButton size="small" color="primary" onClick={handleFileDelete}>
              <Avatar
                sx={{ width: 22, height: 22 }}
                src={images.IcDeletePrimary}
              />
            </IconButton>
          </div>
        ) : (
          <Typography variant="body1" className="file-uploader-label fw-500">
            {title}
          </Typography>
        )}
        {!(fileName || (fields?.value && !error)) && (
          <Button
            className="file-browse-btn"
            size="small"
            variant="outlined"
            disableElevation
            title="Browse File"
            startIcon={
              <Avatar
                src={images.IcFolder}
                variant="square"
                sx={{ width: 16, height: 16 }}
              />
            }
            onClick={handleFileUploadClick}
          >
            <input
              {...rest}
              id={id}
              name={name}
              type="file"
              style={{ display: "none" }}
              ref={uploadInputRef}
              multiple
              onChange={handleFileUploadChange}
            />
            {buttonLabel}
          </Button>
        )}
      </div>
      {!fileName && error && (
        <FormHelperText error>{error && errors[fields?.name]}</FormHelperText>
      )}
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FormikFileInput2 = ({
  field: { ...fields },
  form: { errors },
  ...props
}): React.ReactNode => {
  const {
    id,
    name,
    title,
    buttonLabel,
    fileName,
    handleFileChange,
    handleFileDelete,
    ...rest
  }: IFormikFileInputProps = props;
  const error = Boolean(_.get(errors, fields?.name));
  const uploadInputRef = React.useRef(null);

  const handleFileUploadClick = () => {
    uploadInputRef.current && uploadInputRef.current?.click();
  };

  const handleFileUploadChange = () => {
    if (handleFileChange) handleFileChange(uploadInputRef.current?.files);
  };

  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <img src={images.IcFile} alt="File" />
        </Grid>
        <Grid item xs className="document-name-outer">
          {fileName || (fields?.value && !error) ? (
            <Typography className="document-name">
              {fileName || fields?.value?.name}
            </Typography>
          ) : (
            <Typography variant="body1" className="fw-500">
              {title}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {fileName || (fields?.value && !error) ? (
            <IconButton onClick={handleFileDelete}>
              <img src={images.IcDeletePrimary} alt="Delete" />
            </IconButton>
          ) : (
            buttonLabel && (
              <Button
                // className="mt-md-1"
                size="small"
                variant="outlined"
                disableElevation
                title={buttonLabel}
                startIcon={
                  <Avatar
                    sx={{ width: 15, height: 15 }}
                    src={images.IcFolder}
                    variant="square"
                  />
                }
                onClick={handleFileUploadClick}
              >
                <input
                  {...rest}
                  id={id}
                  name={name}
                  type="file"
                  style={{ display: "none" }}
                  ref={uploadInputRef}
                  multiple
                  onChange={handleFileUploadChange}
                />
                {buttonLabel}
              </Button>
            )
          )}
        </Grid>
      </Grid>
      {!fileName && error && (
        <FormHelperText error>{error && errors[fields?.name]}</FormHelperText>
      )}
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FormikFileInput1 = ({
  field: { ...fields },
  form: { errors },
  ...props
}): React.ReactNode => {
  const {
    id,
    name,
    title,
    buttonLabel,
    fileName,
    handleFileChange,
    handleFileDelete,
    ...rest
  }: IFormikFileInputProps = props;
  const error = Boolean(_.get(errors, fields?.name));
  const uploadInputRef = React.useRef(null);

  const handleFileUploadClick = () => {
    uploadInputRef.current && uploadInputRef.current?.click();
  };

  const handleFileUploadChange = () => {
    if (handleFileChange) handleFileChange(uploadInputRef.current?.files);
  };
  return (
    <>
      <div className="file-upload">
        <ul
          className={`document-listing mr-2 ${
            fields?.value ? "flex-grow1" : ""
          }`}
        >
          <li>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs="auto">
                <img src={images.IcFile} alt="File" />
              </Grid>
              {fields?.value ? (
                <>
                  <Grid item xs className="document-name-outer">
                    <Typography className="document-name fw-500">
                      {fileName}
                    </Typography>
                  </Grid>
                  <Grid item xs="auto">
                    <IconButton onClick={handleFileDelete}>
                      <img src={images.IcDeletePrimary} alt="Delete" />
                    </IconButton>
                  </Grid>
                </>
              ) : (
                <Grid item xs>
                  <Typography className="fw-500">{title}</Typography>
                </Grid>
              )}
            </Grid>
          </li>
        </ul>
        <Button
          className={fields?.value ? "mt-15p" : "mt-1"}
          size="small"
          variant="outlined"
          disableElevation
          title="Browse File"
          onClick={handleFileUploadClick}
          startIcon={
            <Avatar
              sx={{ width: 15, height: 15 }}
              src={images.IcFolder}
              variant="square"
            />
          }
        >
          <input
            {...rest}
            id={id}
            name={name}
            type="file"
            style={{ display: "none" }}
            ref={uploadInputRef}
            multiple
            onChange={handleFileUploadChange}
          />
          {buttonLabel}
        </Button>
      </div>
      {error && (
        <FormHelperText error>{error && errors[fields?.name]}</FormHelperText>
      )}
    </>
  );
};
export default FormikFileInput;
