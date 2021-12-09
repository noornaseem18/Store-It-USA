import * as React from 'react';
import Link from '@mui/material/Link';
import OrdersList from "../lists-pages/orderslist"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import '../lists-pages/button.css';


export default function Orders() {
  return (
    <React.Fragment>
      <OrdersList />
    </React.Fragment>
  );
}