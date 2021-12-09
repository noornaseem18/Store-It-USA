import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import {CssBaseline} from '@material-ui/core';
import { GlobalStyles } from '@mui/material';

export default class CreatePallet extends Component {
  constructor(props) {
    super(props);

    this.onChangedescription = this.onChangedescription.bind(this);
    this.onChangequantity = this.onChangequantity.bind(this);

    this.state = {
      description: '',
      quantity: 0,
      pallets: []
    }
  }

  onChangedescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangequantity(e) {
    this.setState({
      quantity: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const pallet = {
     description: this.state.description,
      quantity: this.state.quantity
    }

    console.log(pallet);

    axios.post('http://localhost:5000/pallets/add', pallet)
      .then(res => console.log(res.data));

    window.location = '/pallets';
  }

  render() {
    return (
    <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <div className="container">
        <h2>Create New Pallet</h2>
        <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
            <label>
            <h5>Description: </h5>
              </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangedescription}
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
            <input type="submit" value="Create Pallet" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
    )
  }
}