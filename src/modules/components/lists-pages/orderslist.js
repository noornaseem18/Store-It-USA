import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {CssBaseline , Box , Button} from '@material-ui/core';
import { GlobalStyles } from '@mui/material';
import Container from '@mui/material/Container';

const Order = props => (
  <tr>
    <td>{props.order.status}</td>
    <td>{props.order.subtotal}</td>
    <td>{props.order.itemdiscount}</td>
    <td>{props.order.shipping}</td>
    <td>{props.order.tax}</td>
    <td>{props.order.total}</td>
    <td>{props.order.promo}</td>
    <td>{props.order.discount}</td>
    <td>{props.order.grandtotal}</td>
  </tr>
)

export default class OrdersList extends Component {
  constructor(props) {
    super(props);

    this.deleteOrder= this.deleteOrder.bind(this)

    this.state = {orders: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/orders/')
      .then(response => {
        this.setState({ orders: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteOrder(id) {
    axios.delete('http://localhost:5000/orders/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      orders: this.state.orders.filter(el => el._id !== id)
    })
  }

  ordersList() {
    return this.state.orders.map(currentorder => {
      return <Order order={currentorder} deleteorder={this.deleteOrder} key={currentorder._id}/>;
    })
  }

  render() {
    return (
      <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 8 , listStyle: 'none' } }} />
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box
          sx={{
            width: 30,
            height: 20,
          }}
           />
        <h3>Logged Orders</h3>
        <table className="table">
        <Box
          sx={{
          width: 30,
          }}
           />
          <thead className="thead-light">
            <tr>
              <th>Status</th>
              <th>Sub Total</th>
              <th>Item Discount</th>
              <th>Shipping</th>
              <th>Tax</th>
              <th>Total</th>
              <th>Promo</th>
              <th>Discount</th>
              <th>Grand Total</th>
            </tr>
          </thead>
          <tbody>
            { this.ordersList() }
          </tbody>
        </table>
        </Container>
      </div>
    )
  }
}