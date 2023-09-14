import {
  Typography,
  Pagination,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { PAGE_OPTIONS } from "./pagination";
import portalTheme from "../../themes/App.theme";

const useStyles = makeStyles(() => ({
  TableFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 15,
    "& .rowsPerPage": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
      "& .label": {
        fontSize: 15,
        lineHeight: "18px",
        whiteSpace: "nowrap",
        color: [portalTheme.palette.text.disabled],
      },
      "& .border-less-control": {
        "& .MuiSelect-outlined": {
          padding: "4px 28px 4px 10px",
          fontSize: 15,
          lineHeight: "26px",
          color: [portalTheme.palette.text.primary],
        },
        "& .MuiSelect-icon": {
          borderColor: [portalTheme.palette.text.primary],
        },
        "& .MuiOutlinedInput-notchedOutline": {
          display: "none",
        },
      },
      [portalTheme.breakpoints.up("sm")]: {
        marginBottom: 0,
      },
    },
    [portalTheme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
}));

interface ITableFooterProps {
  page?: number;
  rowsPerPage?: number;
  totalCount?: number;
  onPageChange?: (page: number) => void;
  onRowsPerPageChange: (rowsPerPage: number) => void;
}

const TableFooter: React.FC<ITableFooterProps> = ({
  page,
  rowsPerPage,
  totalCount,
  onPageChange,
  onRowsPerPageChange,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.TableFooter}>
      <div className="rowsPerPage">
        <Typography variant="caption" className="label">
          Rows per page:
        </Typography>
        <FormControl className="border-less-control">
          <Select
            value={rowsPerPage}
            onChange={(event) => onRowsPerPageChange(+event?.target?.value)}
          >
            {PAGE_OPTIONS?.map((option) => (
              <MenuItem value={option} key={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <Pagination
        page={page}
        count={Math.ceil(totalCount / rowsPerPage)}
        onChange={(event, page) => onPageChange(page)}
        size="small"
      />
    </div>
  );
};

export default TableFooter;
