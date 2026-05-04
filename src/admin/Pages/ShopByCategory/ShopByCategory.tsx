import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, styled } from "@mui/material";
import { useAppSelector } from "../../../State/Store";
import { HomeCategory } from "../../../Type/HomeCategoryType";
import EditIcon from "@mui/icons-material/Edit";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const ShopByCategory = () => {

  // ✅ CORRECT PLACE (inside component)
  const customer = useAppSelector((store) => store.customer);

  const categories: HomeCategory[] | undefined =
    customer.homePageData?.shopByCategories;

  const [selectedCategory, setSelectedCategory] =
    React.useState<HomeCategory>();

  const [open, setOpen] = React.useState(false);

  const handleOpen = (category: HomeCategory | undefined) => () => {
    setSelectedCategory(category);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <TableContainer component={Paper}>
      <Table>

        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell align="right">Category Id</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {categories?.map((category: HomeCategory, index) => (
            <StyledTableRow key={category.categoryId}>

              <StyledTableCell>{index + 1}</StyledTableCell>

              <StyledTableCell>{category.id}</StyledTableCell>

              <StyledTableCell>
                <img
                  className="w-20 rounded-md"
                  src={category.image}
                  alt=""
                />
              </StyledTableCell>

              <StyledTableCell align="right">
                {category.categoryId}
              </StyledTableCell>

              <StyledTableCell align="right">
                <IconButton onClick={handleOpen(category)}>
                  <EditIcon className="text-orange-400 cursor-pointer" />
                </IconButton>
              </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
};

export default ShopByCategory;