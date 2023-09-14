import { Grid } from "@mui/material";
import React from "react";
interface Props {
  children: React.ReactNode;
}

const PublicLayout: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default PublicLayout;
