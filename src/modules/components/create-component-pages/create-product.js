import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import {CssBaseline} from '@material-ui/core';
import { GlobalStyles } from '@mui/material';

export default class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangetitle = this.onChangetitle.bind(this);
    this.onChangesummary = this.onChangesummary.bind(this);

    this.state = {
      title: '',
      summary: '',
      products: []
    }
  }

  onChangetitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangesummary(e) {
    this.setState({
      summary: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const product = {
      title: this.state.title,
      summary: this.state.summary
    }

    console.log(product);

    axios.post('http://localhost:5000/products/add', product)
      .then(res => console.log(res.data));

    window.location = '/products';
  }

  render() {
    return (
    <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <div className="container">
        <h2>Create New Product</h2>
        <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
            <label>
            <h5>Title: </h5>
              </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.title}
                onChange={this.onChangetitle}
                />
          </div>
          <div className="form-group"> 
            <label>
            <h5>Summary: </h5>
              </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.summary}
                onChange={this.onChangesummary}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Product" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
    )
  }
}