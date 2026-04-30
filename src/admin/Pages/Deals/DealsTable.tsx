import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Table, TableBody, TableCell, tableCellClasses,
  TableContainer, TableHead, TableRow, Paper, IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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

const initialRows = [
  { name: 'Frozen yoghurt', image: 159, category: 6, discount: 24 },
  { name: 'Ice cream sandwich', image: 237, category: 9, discount: 37 },
  { name: 'Eclair', image: 262, category: 16, discount: 24 },
];

const DealsTable = () => {

  const [rows, setRows] = useState(initialRows);

  const handleDelete = (index: number) => {
    const updated = rows.filter((_, i) => i !== index);
    setRows(updated);
  };

  return (
    <TableContainer component={Paper}>
      <Table>

        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Discount</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.image}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.discount}</TableCell>

              <TableCell align="right">
                <IconButton color="success">
                  <EditIcon />
                </IconButton>
              </TableCell>

              <TableCell align="right">
                <IconButton color="error" onClick={() => handleDelete(index)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>

            </StyledTableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
};

export default DealsTable;