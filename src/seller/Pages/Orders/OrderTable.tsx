import React from "react";
import { styled } from '@mui/material/styles';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, Menu, MenuItem, Box
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';

import { useAppDispatch, useAppSelector } from "../../../State/Store";
import {
  fetchSellerOrders,
  updateOrderStatus
} from "../../../State/seller/SellerOrderSlice";

import { Order, OrderItem } from "../../../Type/OrderTypes";

// ✅ Styled Components
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

// ✅ Status Colors
const orderStatus = [
  { label: 'PENDING', color: '#FFA500' },
  { label: 'PLACED', color: '#F5BCBA' },
  { label: 'CONFIRMED', color: '#F5BCBA' },
  { label: 'SHIPPED', color: '#1E90FF' },
  { label: 'DELIVERED', color: '#32CD32' },
  { label: 'CANCELLED', color: '#FF0000' },
];

const orderStatusColor: any = {
  PENDING: '#FFA500',
  PLACED: '#F5BCBA',
  CONFIRMED: '#F5BCBA',
  SHIPPED: '#1E90FF',
  DELIVERED: '#32CD32',
  CANCELLED: '#FF0000',
};

export default function OrderTable() {

  const dispatch = useAppDispatch();

  // ✅ FIXED STORE ACCESS
  const { orders, loading } = useAppSelector((store) => store.sellerOrders);

  // ✅ FETCH ORDERS
  React.useEffect(() => {
    dispatch(fetchSellerOrders(localStorage.getItem("jwt") || ""));
  }, [dispatch]);

  // ✅ MENU STATE
  const [anchorEl, setAnchorEl] = React.useState<{ [key: number]: HTMLElement | null }>({});

  const handleClick = (event: React.MouseEvent<HTMLElement>, orderId: number) => {
    setAnchorEl((prev) => ({ ...prev, [orderId]: event.currentTarget }));
  };

  const handleClose = (orderId: number) => {
    setAnchorEl((prev) => ({ ...prev, [orderId]: null }));
  };

  // ✅ UPDATE STATUS
  const handleUpdateOrder = (orderId: number, status: string) => {
    dispatch(updateOrderStatus({
      jwt: localStorage.getItem("jwt") || "",
      orderId,
      orderStatus: status as any,
    }));
    handleClose(orderId);
  };

  if (loading) {
    return <h2 className="p-5">Loading...</h2>;
  }

  return (
    <>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>

          {/* HEADER */}
          <TableHead>
            <TableRow>
              <StyledTableCell>Order Id</StyledTableCell>
              <StyledTableCell>Products</StyledTableCell>
              <StyledTableCell>Shipping Address</StyledTableCell>
              <StyledTableCell align="center">Order Status</StyledTableCell>
              <StyledTableCell align="center">Update</StyledTableCell>
            </TableRow>
          </TableHead>

          {/* BODY */}
          <TableBody>
            {orders?.map((order: Order) => (
              <StyledTableRow key={order.id}>

                {/* Order ID */}
                <StyledTableCell>{order.id}</StyledTableCell>

                {/* Products */}
                <StyledTableCell>
                  <div className="flex flex-col gap-3">
                    {order.orderItems?.map((item: OrderItem) => (
                      <div key={item.id} className="flex gap-4">
                        <img
                          src={item.product?.images?.[0]}
                          alt=""
                          className="w-20 rounded"
                        />
                        <div>
                          <p><strong>{item.product?.title}</strong></p>
                          <p>₹{item.product?.sellingPrice}</p>
                          <p>Size: {item.size}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </StyledTableCell>

                {/* Address */}
                <StyledTableCell>
                  {order.shippingAddress ? (
                    <>
                      <p>{order.shippingAddress.name}</p>
                      <p>
                        {order.shippingAddress.address},{" "}
                        {order.shippingAddress.city}
                      </p>
                      <p>
                        {order.shippingAddress.state} -{" "}
                        {order.shippingAddress.pinCode}
                      </p>
                      <p>Mobile: {order.shippingAddress.mobile}</p>
                    </>
                  ) : (
                    "No Address"
                  )}
                </StyledTableCell>

                {/* Status */}
                <StyledTableCell align="center">
                  <Box
                    sx={{
                      border: `1px solid ${orderStatusColor[order.orderStatus]}`,
                      color: orderStatusColor[order.orderStatus],
                    }}
                    className="px-3 py-1 rounded-full text-xs inline-block"
                  >
                    {order.orderStatus}
                  </Box>
                </StyledTableCell>

                {/* Update */}
                <StyledTableCell align="center">
                  <Button
                    size="small"
                    variant="contained"
                    onClick={(e) => handleClick(e, order.id)}
                  >
                    Status
                  </Button>

                  <Menu
                    anchorEl={anchorEl[order.id]}
                    open={Boolean(anchorEl[order.id])}
                    onClose={() => handleClose(order.id)}
                  >
                    {orderStatus.map((status) => (
                      <MenuItem
                        key={status.label}
                        onClick={() => handleUpdateOrder(order.id, status.label)}
                      >
                        {status.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </>
  );
}