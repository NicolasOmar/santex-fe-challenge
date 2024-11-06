import React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { ProductItem } from "src/interfaces";

interface ProductListProps {
  list: ProductItem[]
}

const ProductList: React.FC<ProductListProps> = ({
  list
}) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="Product list table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Image</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {list.map(({ id, name, featuredAsset }) => (
          <TableRow
            key={id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {id}
            </TableCell>
            <TableCell align="right">{name}</TableCell>
            <TableCell align="right">{featuredAsset?.source ?? '-'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default ProductList