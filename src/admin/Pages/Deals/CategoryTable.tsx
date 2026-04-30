import React, { useState } from 'react';
import {
  Table, TableBody, TableCell,
  TableContainer, TableHead,
  TableRow, Paper, IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const initialData = [
  { id: 1, name: "Men" },
  { id: 2, name: "Women" },
  { id: 3, name: "Electronics" },
];

const CategoryTable = () => {

  const [data, setData] = useState(initialData);

  const handleDelete = (id: number) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <TableContainer component={Paper}>
      <Table>

        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Category Name</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>

              <TableCell align="right">
                <IconButton
                  color="error"
                  onClick={() => handleDelete(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
};

export default CategoryTable;