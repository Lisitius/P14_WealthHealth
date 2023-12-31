import React, { useState } from "react";
import {
  Table,
  TableBody,
  TextField,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import useEmployeeTable from "../hooks/useEmployeeTable";

const formatDate = (dateString, forSearch = false) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const options = forSearch
    ? { year: "numeric", month: "2-digit", day: "2-digit" }
    : undefined;
  return new Intl.DateTimeFormat("fr-FR", options).format(date);
};

const EmployeeTableRow = ({ row, columns }) => (
  <TableRow hover role="checkbox" tabIndex={-1}>
    {columns.map((column) => {
      const value =
        column.field === "dateOfBirth" || column.field === "startDate"
          ? formatDate(row[column.field])
          : row[column.field];
      return <TableCell key={column.field}>{value}</TableCell>;
    })}
  </TableRow>
);

const EmployeeTable = () => {
  const { columns, rowData } = useEmployeeTable();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");

  const filteredRows = rowData.filter((row) =>
    Object.keys(row).some((key) => {
      let value = row[key];
      if (key === "dateOfBirth" || key === "startDate") {
        value = formatDate(value, true);
      }
      return value.toString().toLowerCase().includes(searchValue.toLowerCase());
    })
  );

  return (
    <Paper sx={{ width: "90%" }}>
      <TextField
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        label="Search employee, date, city..."
        variant="outlined"
        style={{ margin: "10px", height: "40px" }}
        InputProps={{
          style: {
            height: "40px",
            padding: "0 14px",
            fontSize: "0.875rem",
          },
        }}
        InputLabelProps={{
          style: { fontSize: "0.75rem", top: "-5px" },
        }}
      />
      <TableContainer>
        <Table stickyHeader aria-label="Employee Table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field}>{column.headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <EmployeeTableRow key={index} row={row} columns={columns} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(event, newPage) => setPage(newPage)}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        }}
      />
    </Paper>
  );
};

export default EmployeeTable;
