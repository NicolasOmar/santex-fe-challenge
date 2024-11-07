import React, { useMemo } from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'

interface ProductListProps {
  listHeaders: string[]
  listData: {
    [key: string]: string | number | JSX.Element
  }[]
}

const ProductList: React.FC<ProductListProps> = ({ listHeaders, listData }) => {
  const parsedHeaders = useMemo(
    () =>
      listHeaders.map((_header, _headerId) => (
        <TableCell key={_headerId}>{_header}</TableCell>
      )),
    [listHeaders]
  )
  const parsedBody = useMemo(() => {
    return listData.map((_listItem, _itemId) => (
      <TableRow
        key={_itemId}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        {Object.values(_listItem).map((_value, _valueId) => (
          <TableCell
            key={`${_itemId}-${_valueId}`}
            align='left'
          >
            {_value}
          </TableCell>
        ))}
      </TableRow>
    ))
  }, [listData])

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label='Product list table'
      >
        <TableHead>
          <TableRow>{parsedHeaders}</TableRow>
        </TableHead>
        <TableBody>{parsedBody}</TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProductList
