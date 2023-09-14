import React from "react";
import _ from "lodash";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  // label: {
  //   overflow: "hidden",
  //   textOverflow: "ellipsis",
  //   whiteSpace: "nowrap",
  // },
  label_shrinked: {
    padding: 0,
  },
});

const FormikInput = ({
  field: { ...fields },
  form: { touched, errors },
  ...props
}): React.ReactNode => {
  const styles = useStyles();

  const {
    id,
    maxLength,
    isDefaultValue,
    multiline,
    className,
    hasObject = false,
    controlClassName,
    sx,
    noMaxLength,
    ...rest
  } = props;
  const error = Boolean(
    _.get(touched, fields?.name) && _.get(errors, fields?.name)
  );
  const getError = () => {
    let errorString = errors;
    if (hasObject)
      fields?.name?.split(".").map((name) => (errorString = errorString[name]));
    return errorString;
  };
  return (
    <FormControl fullWidth className={controlClassName} sx={sx}>
      {props?.label && <InputLabel>{props?.label}</InputLabel>}
      {isDefaultValue ? (
        <OutlinedInput
          {...fields}
          {...rest}
          id={id}
          className={className}
          multiline={multiline}
          error={error}
          autoComplete="off"
          inputProps={{
            maxLength: noMaxLength ? -1 : maxLength ? maxLength : 100,
          }}
        />
      ) : (
        <OutlinedInput
          {...fields}
          {...rest}
          id={id}
          className={className}
          value={
            props.type === "number"
              ? fields?.value || ""
              : fields?.value?.toString()?.trimStart()
          }
          multiline={multiline}
          error={error}
          autoComplete="off"
          inputProps={{
            maxLength: noMaxLength ? -1 : maxLength ? maxLength : 100,
          }}
        />
      )}
      {error && (
        <FormHelperText error>
          {error && (hasObject ? getError() : errors[fields?.name])}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default FormikInput;
