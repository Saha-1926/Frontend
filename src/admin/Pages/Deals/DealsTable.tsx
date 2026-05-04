import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import {
  Table, TableBody, TableCell, tableCellClasses,
  TableContainer, TableHead, TableRow, Paper, IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { getAllDeals } from '../../../State/DealSlice';


// ✅ Styled Components
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


const DealsTable = () => {

  const dispatch = useAppDispatch();

  // ✅ GET DEAL DATA FROM STORE
  const { deals } = useAppSelector((store: any) => store.deal);

  // ✅ FETCH DEALS FROM BACKEND
  useEffect(() => {
    dispatch(getAllDeals());
  }, [dispatch]);

  // ❌ REMOVE LOCAL STATE (NOT NEEDED)
  // const [rows, setRows] = useState(initialRows);

  // ✅ DELETE UI ONLY (no backend yet)
  const handleDelete = (id: number) => {
    console.log("Delete clicked for id:", id);
    // later: dispatch(deleteDeal(id))
  };

  return (
    <TableContainer component={Paper}>
      <Table>

        {/* HEADER */}
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

        {/* BODY */}
        <TableBody>
          {deals?.map((deal: any, index: number) => (
            <StyledTableRow key={deal.id}>

              {/* Index */}
              <TableCell>{index + 1}</TableCell>

              {/* Image */}
              <TableCell align="right">
                <img
                  src={deal.category?.image}
                  alt=""
                  className="w-16 h-16 object-cover rounded"
                />
              </TableCell>

              {/* Category */}
              <TableCell align="right">
                {deal.category?.name}
              </TableCell>

              {/* Discount */}
              <TableCell align="right">
                {deal.discount}%
              </TableCell>

              {/* Edit */}
              <TableCell align="right">
                <IconButton color="success">
                  <EditIcon />
                </IconButton>
              </TableCell>

              {/* Delete */}
              <TableCell align="right">
                <IconButton
                  color="error"
                  onClick={() => handleDelete(deal.id)}
                >
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