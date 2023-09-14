import { CircularProgress } from "@mui/material";
import React from "react";

interface ISpinnerProps {
  color?: "primary" | "secondary" | "inherit";
}

const Spinner: React.FC<ISpinnerProps> = ({ color = "primary" }) => {
  return (
    <div className="loader-wrapper">
      <CircularProgress color={color} thickness={2} size={50} />
    </div>
  );
};

export default Spinner;
