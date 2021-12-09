import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import {CssBaseline} from '@material-ui/core';
import { GlobalStyles } from '@mui/material';

export default class EditOrderitem extends Component {
  constructor(props) {
    super(props);

    this.onChangeprice = this.onChangeprice.bind(this);
    this.onChangequantity = this.onChangequantity.bind(this);
    this.onChangediscount = this.onChangediscount.bind(this);

    this.state = {
      price: 0,
      quantity: 0,
      discount: 0,
      orderitems: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/orderitems/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          price: response.data.price,
          quantity: response.data.quantity,
          discount: response.data.discount
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  onChangeprice(e) {
    this.setState({
      price: e.target.value
    })
  }

  onChangequantity(e) {
    this.setState({
      quantity: e.target.value
    })
  }

  onChangediscount(e) {
    this.setState({
      discount: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const orderitem = {
      price: this.state.price,
      quantity: this.state.quantity,
      discount: this.state.discount
    }

    console.log(orderitem);

    axios.post('http://localhost:5000/orderitems/update/' + this.props.match.params.id, orderitem)
      .then(res => console.log(res.data));

    window.location = '/orderitems';
  }

  render() {
    return (
    <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <div className="container">
        <h2>Edit Order Item</h2>
        <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
            <label>
            <h5>Price: </h5>
              </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.price}
                onChange={this.onChangeprice}
                />
          </div>
          <div className="form-group"> 
            <label>
            <h5>Quantity: </h5>
              </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.quantity}
                onChange={this.onChangequantity}
                />
          </div>
          <div className="form-group"> 
            <label>
            <h5>Discount: </h5>
              </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.discount}
                onChange={this.onChangediscount}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
    )
  }
}