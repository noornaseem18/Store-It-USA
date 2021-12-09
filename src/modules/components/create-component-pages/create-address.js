import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import {CssBaseline} from '@material-ui/core';
import { GlobalStyles } from '@mui/material';

export default class CreateAddress extends Component {
  constructor(props) {
    super(props);

    this.onChangequantity = this.onChangequantity.bind(this);
    this.onChangefirstname = this.onChangefirstname.bind(this);
    this.onChangelastname = this.onChangelastname.bind(this);
    this.onChangephonenumber = this.onChangephonenumber.bind(this);
    this.onChangeline1 = this.onChangeline1.bind(this);
    this.onChangeline2 = this.onChangeline2.bind(this);
    this.onChangecity = this.onChangecity.bind(this);
    this.onChangecountry = this.onChangecountry.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      quantity: 0,
      firstname: '',
      lastname: '',
      phonenumber: 0,
      line1: '',
      line2: '',
      city: '',
      country: '',
      email: '',
      addresses: []
    }
  }

  onChangequantity(e) {
    this.setState({
      quantity: e.target.value
    })
  }

  onChangefirstname(e) {
    this.setState({
      Firstname: e.target.value
    })
  }

  onChangelastname(e) {
    this.setState({
      lastname: e.target.value
    })
  }
  onChangephonenumber(e) {
    this.setState({
      phonenumber: e.target.value
    })
  }

  onChangeline1(e) {
    this.setState({
      line1: e.target.value
    })
  }

  onChangeline2(e) {
    this.setState({
      line2: e.target.value
    })
  }

  onChangecity(e) {
    this.setState({
      city: e.target.value
    })
  }

  onChangecountry(e) {
    this.setState({
      country: e.target.value
    })
  }
  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const address = {
      quantity: this.state.quantity,
      firstname: this.state.firstname,
      lastname: this.state.itemlastname,
      phonenumber: this.state.phonenumber,
      line1: this.state.line1,
      line2: this.state.line2,
      city: this.state.city,
      country: this.state.country,
      email: this.state.email
    }

    console.log(address);

    axios.post('http://localhost:5000/addresses/add', address)
      .then(res => console.log(res.data));

    window.location = '/addresses';
  }

  render() {
    return (
    <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <div className="container">
        <h2>Create New Address</h2>
        <form onSubmit={this.onSubmit}>
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
            <h5>First Name: </h5>
              </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.firstname}
                onChange={this.onChangefirstname}
                />
          </div>
          <div className="form-group">
            <label>
            <h5>Last Name: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.lastname}
                onChange={this.onChangelastname}
                />
          </div>
          <div className="form-group">
            <label>
            <h5>Phone Number: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.phonenumber}
                onChange={this.onChangephonenumber}
                />
          </div>
          <div className="form-group">
            <label>
            <h5>Line 1: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.line1}
                onChange={this.onChangeline1}
                />
          </div>
          <div className="form-group">
            <label>
            <h5>Line 2: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.line2}
                onChange={this.onChangeline2}
                />
          </div>
          <div className="form-group">
            <label>
            <h5>City: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.city}
                onChange={this.onChangecity}
                />
          </div>
          <div className="form-group">
            <label>
            <h5>Country: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.country}
                onChange={this.onChangecountry}
                />
          </div>
          <div className="form-group">
            <label>
            <h5>Email: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeemail}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Address" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
    )
  }
}