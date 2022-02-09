import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function RestaurantsTable({ data, handleShow, handleEdit, handleDelete }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>


        <TableBody>
          {data.map((item, i) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="item"
                onClick={() => handleShow(item)}>
                {item.id}
              </TableCell>
              <TableCell
                onClick={() => handleShow(item)}>
                {item.name}
              </TableCell>
              <TableCell
                onClick={() => handleShow(item)}>
                {item.address}
              </TableCell>
              <TableCell
                align="right"
                onClick={() => handleEdit(item)}>
                ✏️
              </TableCell>
              <TableCell
                align="right"
                onClick={() => handleDelete(item)}>
                🗑
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}