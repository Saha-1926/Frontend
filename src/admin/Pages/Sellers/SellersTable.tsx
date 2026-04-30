import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

// ✅ Styled Table
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
}));

// ✅ Status options
const accountStatu = [
  { status: 'PENDING_VERIFICATION', title: 'Pending Verification' },
  { status: 'ACTIVE', title: 'Active' },
  { status: 'SUSPENDED', title: 'Suspended' },
  { status: 'DEACTIVATED', title: 'Deactivated' },
  { status: 'BANNED', title: 'Banned' },
  { status: 'CLOSED', title: 'Closed' }
];

// ✅ Dummy data (extended properly)
const rows = [
  {
    id: 'ORD123',
    sellerName: 'Sahana',
    email: 'sahana@gmail.com',
    mobile: '9876543210',
    gstin: 'GST12345',
    businessName: 'Sahana Store',
    status: 'ACTIVE'
  },
  {
    id: 'ORD124',
    sellerName: 'Roshini',
    email: 'roshini@gmail.com',
    mobile: '9123456780',
    gstin: 'GST67890',
    businessName: 'Roshini Mart',
    status: 'PENDING_VERIFICATION'
  },
];

const SellersTable = () => {

  // 🔹 Top filter dropdown
  const [filterStatus, setFilterStatus] = useState("ACTIVE");

  // 🔹 Table data
  const [data, setData] = useState(rows);

  const handleFilterChange = (event: any) => {
    setFilterStatus(event.target.value);
  };

  return (
    <div>

      {/* 🔥 1. ACCOUNT STATUS DROPDOWN */}
      <div className='pb-5 w-60'>
        <FormControl fullWidth>
          <InputLabel>Account Status</InputLabel>
          <Select
            value={filterStatus}
            label="Account Status"
            onChange={handleFilterChange}
          >
            {accountStatu.map((item) => (
              <MenuItem key={item.status} value={item.status}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* 🔥 2. TABLE */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }}>

          {/* HEADER */}
          <TableHead>
            <TableRow>
              <StyledTableCell>Order Id</StyledTableCell>
              <StyledTableCell align="right">Seller Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Mobile</StyledTableCell>
              <StyledTableCell align="right">GSTIN</StyledTableCell>
              <StyledTableCell align="right">Business Name</StyledTableCell>
              <StyledTableCell align="right">Account Status</StyledTableCell>
              <StyledTableCell align="right">Change Status</StyledTableCell>
            </TableRow>
          </TableHead>

          {/* BODY */}
          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell>{row.id}</StyledTableCell>
                <StyledTableCell align="right">{row.sellerName}</StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.mobile}</StyledTableCell>
                <StyledTableCell align="right">{row.gstin}</StyledTableCell>
                <StyledTableCell align="right">{row.businessName}</StyledTableCell>

                {/* Current status */}
                <StyledTableCell align="right">{row.status}</StyledTableCell>

                {/* Change status dropdown */}
                <StyledTableCell align="right">
                  <FormControl size="small" sx={{ minWidth: 150 }}>
                    <Select
                      value={row.status}
                      onChange={(e) => {
                        const updated = [...data];
                        updated[index].status = e.target.value as string;
                        setData(updated);
                      }}
                    >
                      {accountStatu.map((item) => (
                        <MenuItem key={item.status} value={item.status}>
                          {item.title}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

    </div>
  );
};

export default SellersTable;