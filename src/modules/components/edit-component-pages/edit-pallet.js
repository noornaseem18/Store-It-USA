import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import {CssBaseline , Box } from '@material-ui/core';
import { GlobalStyles } from '@mui/material';
import Container from '@mui/material/Container';
import NavList from "../dashboard-navbar"

export default class EditPallet extends Component {
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

  componentDidMount() {
    axios.get('http://localhost:5000/pallets/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          description: response.data.description,
          quantity: response.data.quantity
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

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

    axios.post('http://localhost:5000/pallets/update/' + this.props.match.params.id, pallet)
      .then(res => console.log(res.data));

    window.location = '/pallets';
  }

  render() {
    return (
    <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 8 , listStyle: 'none' } }} />
      <CssBaseline />
      <NavList />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <h2>Edit Pallet</h2>
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
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
        </Container>
      </div>
    )
  }
}