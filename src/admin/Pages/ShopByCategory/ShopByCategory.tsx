import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Table, TableBody, TableCell, tableCellClasses,
  TableContainer, TableHead, TableRow, Paper, IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

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

const rows = [
  { name: 'Men Wear', id: 1, image: 4, category: 'Fashion' },
  { name: 'Women Wear', id: 2, image: 6, category: 'Fashion' },
];

const ShopByCategory = () => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell align="right">Id</StyledTableCell>
          <StyledTableCell align="right">Image</StyledTableCell>
          <StyledTableCell align="right">Category</StyledTableCell>
          <StyledTableCell align="right">Update</StyledTableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {rows.map((row, index) => (
          <StyledTableRow key={index}>
            <TableCell>{row.name}</TableCell>
            <TableCell align="right">{row.id}</TableCell>
            <TableCell align="right">{row.image}</TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right">
              <IconButton color="success">
                <EditIcon />
              </IconButton>
            </TableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ShopByCategory;