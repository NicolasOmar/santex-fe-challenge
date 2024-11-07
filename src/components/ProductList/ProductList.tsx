import React, { useMemo } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

interface ProductListProps {
  headerList: string[]
  list: {
    [key: string]: string | number
  }[]
}

const ProductList: React.FC<ProductListProps> = ({
  headerList,
  list
}) => {
  const parsedHeaders = useMemo(() => headerList.map((_header, _headerId) => <TableCell key={_headerId}>{_header}</TableCell>), [headerList])
  const parsedBody = useMemo(() => {
    return list.map(
      (_listItem, _itemId) => (
        <TableRow
          key={_itemId}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          {
            Object.values(_listItem).map(
              (_value, _valueId) => (
                <TableCell key={`${_itemId}-${_valueId}`} align="right">{_value}</TableCell>
              )
            )
          }
        </TableRow>
      )
    )
  }, [list])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Product list table">
        <TableHead>
          <TableRow>
            {parsedHeaders}
          </TableRow>
        </TableHead>
        <TableBody>
          {parsedBody}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProductList