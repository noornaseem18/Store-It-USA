import React, { Component } from 'react';
import axios from 'axios';
import {CssBaseline} from '@material-ui/core';
import { GlobalStyles } from '@mui/material';

export default class CreateTransaction extends Component {
  constructor(props) {
    super(props);

    this.onChangecode = this.onChangecode.bind(this);
    this.onChangemode = this.onChangemode.bind(this);
    this.onChangestatus = this.onChangestatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        code: 0,
        mode: '',
        status: '',
      transactions: []
    }
  }

  onChangecode(e) {
    this.setState({
      code: e.target.value
    })
  }

  onChangemode(e) {
    this.setState({
      mode: e.target.value
    })
  }

  onChangestatus(e) {
    this.setState({
      status: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const transaction = {
      code: this.state.code,
      mode: this.state.mode,
      status: this.state.status
    }

    console.log(transaction);

    axios.post('http://localhost:5000/transactions/add', transaction)
      .then(res => console.log(res.data));

    window.location = '/transactions';
  }

  render() {
    return (
    <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <div className="container">
        <h2>Create New Transaction</h2>
        <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
            <label>
            <h5>Code: </h5>
              </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.code}
                onChange={this.onChangecode}
                />
          </div>
          <div className="form-group"> 
            <label>
            <h5>Mode: </h5>
              </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.mode}
                onChange={this.onChangemode}
                />
          </div>
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
            <input type="submit" value="Create Transaction" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
    )
  }
}