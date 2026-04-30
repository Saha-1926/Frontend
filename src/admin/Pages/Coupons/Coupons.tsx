import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

// ✅ Styled cells
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#000',
    color: '#fff',
    fontWeight: 600,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

// ✅ Dummy Data
const rows = [
  {
    code: "ZOSH50",
    startDate: "2024-09-25",
    endDate: "2024-09-29",
    minValue: 500,
    discount: 50,
    status: "Active"
  },
  {
    code: "ZOSH30",
    startDate: "2024-09-25",
    endDate: "2024-09-29",
    minValue: 599,
    discount: 30,
    status: "Active"
  },
  {
    code: "ZOSH10",
    startDate: "2024-09-25",
    endDate: "2024-09-29",
    minValue: 699,
    discount: 10,
    status: "Active"
  },
];

const CouponsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }}>

        {/* 🔥 HEADER */}
        <TableHead>
          <TableRow>
            <StyledTableCell>Coupon Code</StyledTableCell>
            <StyledTableCell align="right">Start Date</StyledTableCell>
            <StyledTableCell align="right">End Date</StyledTableCell>
            <StyledTableCell align="right">Min Order Value</StyledTableCell>
            <StyledTableCell align="right">Discount %</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>

        {/* 🔥 BODY */}
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <TableCell>{row.code}</TableCell>
              <TableCell align="right">{row.startDate}</TableCell>
              <TableCell align="right">{row.endDate}</TableCell>
              <TableCell align="right">{row.minValue}</TableCell>
              <TableCell align="right">{row.discount}</TableCell>
              <TableCell align="right">{row.status}</TableCell>

              {/* Delete Icon */}
              <TableCell align="right">
                <span className="text-red-500 cursor-pointer text-lg">🗑️</span>
              </TableCell>

            </StyledTableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
};

export default CouponsTable;