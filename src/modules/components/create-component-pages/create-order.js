import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import {CssBaseline} from '@material-ui/core';
import { GlobalStyles } from '@mui/material';

export default class CreateOrder extends Component {
  constructor(props) {
    super(props);

    this.onChangestatus = this.onChangestatus.bind(this);
    this.onChangesubtotal = this.onChangesubtotal.bind(this);
    this.onChangeitemdiscount = this.onChangeitemdiscount.bind(this);
    this.onChangeshipping = this.onChangeshipping.bind(this);
    this.onChangetax = this.onChangetax.bind(this);
    this.onChangetotal = this.onChangetotal.bind(this);
    this.onChangepromo = this.onChangepromo.bind(this);
    this.onChangediscount = this.onChangediscount.bind(this);
    this.onChangegrandtotal = this.onChangegrandtotal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      status: '',
      subtotal: 0,
      itemdiscount: 0,
      shipping: 0,
      tax: 0,
      total: 0,
      promo: '',
      discount: 0,
      grandtotal: 0,
      orders: []
    }
  }

  onChangestatus(e) {
    this.setState({
      status: e.target.value
    })
  }

  onChangesubtotal(e) {
    this.setState({
      subtotal: e.target.value
    })
  }

  onChangeitemdiscount(e) {
    this.setState({
      itemdiscount: e.target.value
    })
  }
  onChangeshipping(e) {
    this.setState({
      shipping: e.target.value
    })
  }

  onChangetax(e) {
    this.setState({
      tax: e.target.value
    })
  }

  onChangetotal(e) {
    this.setState({
      total: e.target.value
    })
  }

  onChangepromo(e) {
    this.setState({
      promo: e.target.value
    })
  }

  onChangediscount(e) {
    this.setState({
      discount: e.target.value
    })
  }
  onChangegrandtotal(e) {
    this.setState({
      grandtotal: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const order = {
      status: this.state.status,
      subtotal: this.state.subtotal,
      itemdiscount: this.state.itemdiscount,
      shipping: this.state.shipping,
      tax: this.state.tax,
      total: this.state.total,
      promo: this.state.promo,
      discount: this.state.discount,
      grandtotal: this.state.grandtotal
    }

    console.log(order);

    axios.post('http://localhost:5000/orders/add', order)
      .then(res => console.log(res.data));

    window.location = '/orders';
  }

  render() {
    return (
    <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <div className="container">
        <h2>Create New Order</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>
            <h5>Status: </h5>
              </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.status}
                onChange={this.onChangestatus}
                />
          </div>
          <div className="form-group"> 
            <label>
            <h5>Subtotal: </h5>
              </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.subtotal}
                onChange={this.onChangesubtotal}
                />
          </div>
          <div className="form-group">
            <label>
            <h5>Item Discount: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.itemdiscount}
                onChange={this.onChangeitemdiscount}
                />
          </div>
          <div className="form-group">
            <label>
            <h5>Shipping: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.shipping}
                onChange={this.onChangeshipping}
                />
          </div>
          <div className="form-group">
            <label>
            <h5>Tax: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.tax}
                onChange={this.onChangetax}
                />
          </div>
          <div className="form-group">
            <label>
            <h5>Total: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.total}
                onChange={this.onChangetotal}
                />
          </div>
          <div className="form-group">
            <label>
            <h5>Promo: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.promo}
                onChange={this.onChangepromo}
                />
          </div>
          <div className="form-group">
            <label>
            <h5>Discount: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.discount}
                onChange={this.onChangediscount}
                />
          </div>
          <div className="form-group">
            <label>
            <h5>Grand Total: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.grandtotal}
                onChange={this.onChangegrandtotal}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Order" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
    )
  }
}