/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import _ from 'lodash';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';

interface ISelectOption {
    title: string;
    value: any;
    disabled: boolean;
}

const FormikSelect = ({ field: { ...fields }, form: { touched, errors }, ...props }): React.ReactNode => {
    const { defaultOption, sx, fullWidth = true, hasObject = false, className, ...rest } = props;
    const error = Boolean(_.get(touched, fields.name) && _.get(errors, fields.name));
    const getError = () => {
        let errorString = errors;
        if (hasObject) fields?.name?.split('.').map((name) => (errorString = errorString[name]));
        return errorString;
    };

    return (
        <FormControl fullWidth={fullWidth} className={`${className}`}>
            <InputLabel title={props.label}>{props.label}</InputLabel>
            <Select
                {...fields}
                {...rest}
                error={error}
                MenuProps={{
                    PaperProps: {
                        className: 'select-wrapper',
                    },
                }}
                sx={sx}
            >
                {defaultOption && <MenuItem value={typeof fields.value === 'string' ? '' : 0}> -- Select -- </MenuItem>}
                {props.options &&
                    props.options.map((option: ISelectOption) => (
                        <MenuItem
                            key={option.value}
                            value={option.value}
                            disabled={option?.disabled ? option?.disabled : false}
                        >
                            {option.title}
                        </MenuItem>
                    ))}
            </Select>
            {error && <FormHelperText error>{error && (hasObject ? getError() : errors[fields?.name])}</FormHelperText>}
        </FormControl>
    );
};

export default FormikSelect;
