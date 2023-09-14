import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import { Field, Formik } from "formik";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Routing } from "../../shared/constants/routing";
import FormikInput from "../../shared/mui-formik/FormikInput";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import images from "../../assets/images";
import { IColumn, IPageModelBase } from "../../models/base-type";
import { ORDER_BY_ASC, PAGE_DETAIL } from "../../shared/components/pagination";
import { PageActions } from "../../shared/enums/table-page-actions";
import {
  enumToArray,
  handlePageDetailChange,
  replaceAll,
} from "../../utils/commonFunctions";
import TableFooter from "../../shared/components/TableFooter";
import messages from "../../shared/constants/messages";
import { Digits } from "../../shared/enums/digits";

const DashBoard: React.FC = () => {
  const totalCountRef = React.useRef(Digits.Hundred);
  const pageRef = React.useRef<IPageModelBase>(PAGE_DETAIL);
  const initialState = {
    clinicianName: "",
    discipline: [],
    groupIds: [],
    showUnassignClinician: false,
  };
  const columns: Array<IColumn> = React.useMemo(
    () => [
      {
        name: "SR NO.",
        data: "SR NO.",
        orderable: true,
        width: 100,
      },
      {
        name: "CLIENT NAME",
        data: "CLIENT NAME",
        orderable: true,
      },
      {
        name: "GSTIN",
        data: "GSTIN",
      },
      {
        name: "Status (January 2023)",
        data: "Status",
      },
      {
        name: "Q/M",
        data: "Q/M",
      },
      {
        name: "Reporter",
        data: "Reporter",
      },
      {
        name: "Options",
        data: "Options",
      },
    ],
    []
  );
  return (
    <>
      <Box className="header-buttons d-flex px-1 mt-1">
        <Grid container className="justify-content-between ">
          <Grid xs="auto" className="py-1">
            <Button
              size="large"
              variant="contained"
              disableElevation
              sx={{ background: "#425C81", borderRadius: "10px" }}
            >
              All
            </Button>
          </Grid>
          <Grid xs="auto" className="py-1">
            <Button
              size="large"
              variant="contained"
              disableElevation
              sx={{ background: "#008F8D", borderRadius: "10px" }}
            >
              Invoice-Offline
            </Button>
          </Grid>
          <Grid xs="auto" className="py-1">
            <Button
              size="large"
              variant="contained"
              disableElevation
              sx={{ background: "#425C81", borderRadius: "10px" }}
            >
              Invoice-Ecommerce
            </Button>
          </Grid>
          <Grid xs="auto" className="py-1">
            <Button
              size="large"
              variant="contained"
              disableElevation
              sx={{ background: "#425C81", borderRadius: "10px" }}
            >
              Upcoming..
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Grid container className="py-3 d-flex  align-items-center">
        <Grid item md={6} sm={12} className="mb-1 mb-sm-0">
          <Typography variant="h1">GST Clients</Typography>
          <Typography variant="h2" style={{ marginLeft: "3px" }}>
            {`GST > E-Commerce > Client`}{" "}
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          className="d-flex justify-content-sm-end flex-wrap"
        >
          <Button
            size="large"
            variant="contained"
            disableElevation
            className="mr-1 mb-xs-1"
            sx={{
              background: "#425C81",
              borderRadius: "10px",
              marginRight: "10px",
            }}
          >
            + Add Client
          </Button>
          <Button
            size="large"
            variant="contained"
            disableElevation
            startIcon={
              <Avatar
                variant="square"
                sx={{ width: 18, height: 18 }}
                src={images.IcUpload}
              />
            }
            sx={{ background: "#425C81", borderRadius: "10px" }}
          >
            Upload Multiple Clients
          </Button>
        </Grid>
      </Grid>
      <Box className="white-box">
        <Formik
          initialValues={initialState}
          onSubmit={() => {}}
          enableReinitialize={true}
          validateOnBlur={false}
          validateOnChange={true}
        >
          {(props) => {
            const { handleSubmit, setFieldValue, resetForm } = props;

            return (
              <form onSubmit={handleSubmit} noValidate>
                <Grid
                  container
                  spacing={2}
                  className="mb-2"
                  justifyContent="space-between"
                >
                  <Grid item xl xs={12}>
                    <Grid container spacing={2}>
                      <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Field
                          label="Search by Client Name"
                          type="text"
                          name="clinicianName"
                          id="clinicianName"
                          component={FormikInput}
                        />
                      </Grid>
                      <Grid item sm="auto" xs={12}>
                        <Button
                          className="mr-2"
                          size="large"
                          variant="contained"
                          disableElevation
                          style={{ height: "50px" }}
                          title="Apply"
                          type="submit"
                        >
                          Apply
                        </Button>
                        <Button
                          size="large"
                          variant="outlined"
                          disableElevation
                          style={{ height: "50px" }}
                          title="Clear All"
                        >
                          Clear All
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            );
          }}
        </Formik>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns?.map(
                  ({
                    data,
                    name,
                    orderable = false,
                    className,
                    width,
                  }: IColumn) => (
                    <TableCell key={data} width={width} className={className}>
                      {name}
                    </TableCell>
                  )
                )}
                <TableCell key="Action" width="50">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {columns?.length > 0 ? (
                columns?.map((columns) => {
                  return (
                    <TableRow tabIndex={-1} key={columns?.name}>
                      <TableCell>{columns?.data}</TableCell>
                      <TableCell>{columns?.data}</TableCell>
                      <TableCell>{columns?.data}</TableCell>
                      <TableCell>{columns?.data}</TableCell>
                      <TableCell>{columns?.data}</TableCell>
                      <TableCell>{columns?.data}</TableCell>
                      <TableCell>{columns?.data}</TableCell>
                      <TableCell>{columns?.data}</TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={7}>{messages.NoRecordsFound}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TableFooter
          page={pageRef.current?.page}
          totalCount={totalCountRef.current}
          rowsPerPage={pageRef.current?.rowsPerPage}
          onPageChange={(page) => {
            console.log(page);
          }}
          onRowsPerPageChange={(rowsPerPage) => console.log(rowsPerPage)}
        />
      </Box>
    </>
  );
};

export default DashBoard;
