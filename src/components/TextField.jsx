import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { TextField, InputAdornment } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import { useContext } from "react";
import { qbeContext } from "./../context";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiFilledInput-root": {
    fontWeight: "regular",
    backgroundColor: theme.palette.white.light,
    borderTopLeftRadius: "7px",
    borderTopRightRadius: "7px",
    "&:before": {
      borderColor: theme.palette.secondary.main,
      borderWidth: "1px",
    },
  },
  "& .MuiInputLabel-filled": {
    fontWeight: "Medium",
  },
  "& .MuiFormHelperText-root": {
    color: theme.palette.secondary.main,
  },
}));

const ALPHA_NUMERIC_DASH_REGEX = /^(0|[1-9]\d*)$/;
export default function TextFieldComponent({
  label,
  errMsg,
  helperMsg,
  validation,
  name,
  type,
}) {
  const {
    registrationNumber,
    setRegistrationNumber,
    postNumber,
    setPostNumber,
    registrationNumberError,
    setRegistrationNumberError,
  } = useContext(qbeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "registrationNumber") {
      setRegistrationNumber(value);
    } else if (name == "postNumber") {
      setRegistrationNumberError(false);
      setRegistrationNumber("");
      setPostNumber(value);
    }
    if (value !== "" && ALPHA_NUMERIC_DASH_REGEX.test(value)) {
      setRegistrationNumberError(false);
    } else {
      setRegistrationNumberError(true);
    }
  };
  return (
    <StyledTextField
      fullWidth
      label={label}
      name={name}
      variant="filled"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            {registrationNumberError && <WarningIcon color="error" />}
          </InputAdornment>
        ),
      }}
      type={type}
      onChange={handleChange}
      error={validation && registrationNumberError}
      helperText={registrationNumberError ? errMsg : helperMsg}
    />
  );
}
