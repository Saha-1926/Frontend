import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react';
import { useAppDispatch } from '../../../State/Store';
import { fetchSellerProducts } from '../../../State/seller/SellerProductSlice';
import { useAppSelector } from '../../../State/Store';
import  ProductType  from '../../../Type/ProductType'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Product from '../../../Type/ProductType';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: 600,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ProductTable() {
   const dispatch = useAppDispatch();
     const { sellerProduct } = useAppSelector((store) => store);


  React.useEffect(()=>{
    dispatch(fetchSellerProducts(localStorage.getItem("jwt")))
  },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }}>

        {/* HEADER */}
        <TableHead>
          <TableRow>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">MRP</StyledTableCell>
            <StyledTableCell align="right">Selling Price</StyledTableCell>
            <StyledTableCell align="right">Update Stock</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>

          </TableRow>
        </TableHead>

        {/* BODY */}
         <TableBody>
          {sellerProduct.products.map((item: Product) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                <div className="flex gap-1 flex-wrap">
                  {item.images.map((image) => (
                    <img
                      className="w-20 rounded-md"
                      alt=""
                      src={image}
                    />
                  ))}
                </div>
              </StyledTableCell>

              <StyledTableCell align="right">
                {item.title}
              </StyledTableCell>

              <StyledTableCell align="right">
                {item.mrpPrice}
              </StyledTableCell>

              <StyledTableCell align="right">
                {item.sellingPrice}
              </StyledTableCell>

              <StyledTableCell align="right">
                {item.color}
              </StyledTableCell>

              <StyledTableCell align="right">
                <Button size="small">in_stock</Button>
              </StyledTableCell>

              <StyledTableCell align="right">
                <IconButton size="small">
                  Edit
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}