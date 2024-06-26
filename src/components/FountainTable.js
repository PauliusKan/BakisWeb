import * as React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import PropTypes from "prop-types";
import url from "../url.js";
import FountainTableSwitch from "./FountainTableSwitch";
import FountainTableEditButton from "./FountainTableEditButton";
import FountainTableDeleteButton from "./FountainTableDeleteButton";
import { StyledEngineProvider } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableFooter,
  TablePagination,
} from "@mui/material";
import "../css/FountainTable.css";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export const FountainTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [fountains, setFountains] = useState([]);

  useEffect(() => {
    Axios.get(url + "/FountainController/getFountains").then((res) => {
      setFountains(
        res.data.filter(
          (fountain) => fountain.latitude != null || fountain.longitude != null
        )
      );
    });
  }, []);

  const refreshTableAfterDelete = (fountainId) => {
    setFountains(fountains.filter((fountain) => fountain.id !== fountainId));
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - fountains.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer
      component={Paper}
      className="tableContainer"
      sx={{ maxHeight: "80vh" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <StyledEngineProvider injectFirst>
              <TableCell className="tableHeadCell" align="center">FountainId</TableCell>
              <TableCell className="tableHeadCell" align="center">Name</TableCell>
              <TableCell className="tableHeadCell" align="center">Address</TableCell>
              <TableCell className="tableHeadCell" align="center">Latitude</TableCell>
              <TableCell className="tableHeadCell" align="center">Longitude</TableCell>
              <TableCell className="tableHeadCell" align="center">Modified On</TableCell>
              <TableCell className="tableHeadCell" align="center">TDS</TableCell>
              <TableCell className="tableHeadCell" align="center">Turbidity</TableCell>
              <TableCell className="tableHeadCell" align="center">pH</TableCell>
              <TableCell className="tableHeadCell" align="center">Water used</TableCell>
              <TableCell className="tableHeadCell" align="center">
                Controls
              </TableCell>
            </StyledEngineProvider>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? fountains.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : fountains
          ).map((fountain) => (
            <TableRow key={fountain.id}>
              <TableCell align="center">{fountain.id}</TableCell>
              <TableCell align="center">{fountain.name ?? "-"}</TableCell>
              <TableCell align="center">{fountain.address ?? "-"}</TableCell>
              <TableCell align="center">{fountain.latitude ?? "-"}</TableCell>
              <TableCell align="center">{fountain.longitude ?? "-"}</TableCell>
              <TableCell align="center">{fountain.modifiedon ?? "-"}</TableCell>
              <TableCell align="center">{fountain.tds ?? "-"}</TableCell>
              <TableCell align="center">{fountain.turbidity ?? "-"}</TableCell>
              <TableCell align="center">{fountain.ph ?? "-"}</TableCell>
              <TableCell align="center">
                {fountain.amount !== null
                  ? fountain.amount.toFixed(2) + "L"
                  : "-"}
              </TableCell>
              <TableCell align="center">
                <FountainTableSwitch
                  initialState={fountain.isworking}
                  fountainId={fountain.id}
                />
                <FountainTableEditButton fountainId={fountain.id} />
                <FountainTableDeleteButton
                  fountain={fountain}
                  onDelete={refreshTableAfterDelete}
                />
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 70 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={11}
              count={fountains.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
