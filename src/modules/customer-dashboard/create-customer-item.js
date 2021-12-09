import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {CssBaseline} from '@material-ui/core';
import { GlobalStyles } from '@mui/material';
import Container from '@mui/material/Container';
import CustomerNavbar from "./customer-navbar";
import { isAuthenticated} from "../../auth"


var x = 0;

export default class CreateCustomerItem extends Component {
  constructor(props) {
    super(props);

    this.onChangename = this.onChangename.bind(this);
    this.onChangecategory = this.onChangecategory.bind(this); 
    this.onChangepalletsquantity = this.onChangepalletsquantity.bind(this);
    this.onChangeboxesquantity = this.onChangeboxesquantity.bind(this);
    this.onChangedescription = this.onChangedescription.bind(this);
    this.onChangestoredfrom = this.onChangestoredfrom.bind(this);
    this.onChangestoreduptill = this.onChangestoreduptill.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      category: '',
      palletsquantity: '',
      boxesquantity: '',
      description: '',
      storedfrom: new Date(),
      storeduptill: new Date(),
      price: '',
      items: []
    }
  }

  onChangename(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangecategory(e) {
    this.setState({
      category: e.target.value
    })
  }

  onChangepalletsquantity(e) {
    this.setState({
      palletsquantity: e.target.value
    })
  }
  onChangeboxesquantity(e) {
    this.setState({
      boxesquantity: e.target.value
    })
  }

  onChangedescription(e) {
    this.setState({
      description: e.target.value
    })
  }


  onChangestoredfrom(date) {
    this.setState({
      storedfrom: date
    })
  }
  onChangestoreduptill(date) {
    this.setState({
      storeduptill: date
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const item = {
      name: this.state.name,
      category: this.state.category,
      palletsquantity: this.state.palletsquantity,
      boxesquantity: this.state.boxesquantity,
      description: this.state.description,
      storedfrom: this.state.storedfrom,
      storeduptill: this.state.storeduptill,
      price: this.state.price
    }

    console.log(item);

    item.price = x;

    axios.post('http://localhost:5000/users/item/' + isAuthenticated()._id, item)
      .then(res => {
        console.log(res.data)}
        )
      .catch(err => {
        console.log("Sign in return JSON object error= ", err);
    })

    window.location = '/customer-dashboard/'+ isAuthenticated()._id;

  }

  CalculateDays() {
    const storedfromdays = new Date(this.state.storedfrom);
    const storeduptilldays = new Date(this.state.storeduptill);
    const difftime = Math.abs( storeduptilldays - storedfromdays );
    const diffdays = Math.ceil( difftime / (1000*60*60*24));
    let amountofdays = diffdays;
    return amountofdays;
  };
  
  CalculatePrice() {
    const category = this.state.category;
    var categoryprice = 0;
      if (category === "Electronics")
      {
       categoryprice = 300;
      } else if (category === "Paintings")
      {
         categoryprice = 500;
      } else if (category === "Edibles")
      {
        categoryprice = 100;
      } else if (category === "Clothes") 
      {
        categoryprice = 250;
      }
      const Palletsquantity =  this.state.palletsquantity;
      const Boxesquantity =  this.state.boxesquantity;
      const palletsandboxesprice = Palletsquantity * 10 + Boxesquantity * 2;
      const totalprice = palletsandboxesprice * categoryprice * this.CalculateDays();
      x = totalprice;
      return totalprice;
  };

  render() {
    return (
    <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 8 , listStyle: 'none' } }} />
      <CssBaseline />
      <CustomerNavbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <h2>Create New Item</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>
            <h5>Name: </h5>
              </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangename}
                />
          </div>
          <div className="form-group"> 
          <label>
          <h5>Category: </h5>
          <select value={this.state.category} onChange={this.onChangecategory}>            
          <option value="Electronics">Electronics</option>
            <option value="Paintings">Paintings</option>
            <option value="Edibles">Edibles</option>
            <option value="Clothes">Clothes</option>
          </select>
        </label>
          </div>
          <div className="form-group">
            <label>
            <h5>Number of Pallets: </h5> 
              </label>
            <input 
                type="number" 
                required
                className="form-control"
                value={this.state.palletsquantity}
                onChange={this.onChangepalletsquantity}
                />
          </div>
          <div className="form-group">
            <label>
            <h5>Number of Boxes per Pallet: </h5> 
              </label>
            <input 
                type="number" 
                required
                className="form-control"
                value={this.state.boxesquantity}
                onChange={this.onChangeboxesquantity}
                />
          </div>
          <div className="form-group">
            <label>
            <h5>Description: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.description}
                onChange={this.onChangedescription}
                />
          </div>
          <div className="form-group">
            <label>
            <h5>Stored from: </h5> 
              </label>
              <div>
            <DatePicker
              selected={this.state.storedfrom}
              onChange={this.onChangestoredfrom}
            />
          </div>
          </div>
          <div className="form-group">
            <label>
            <h5>Stored uptill: </h5> 
              </label>
              <div>
            <DatePicker
              selected={this.state.storeduptill}
              onChange={this.onChangestoreduptill}
            />
          </div>
          
          <div className="form-group"> 
            <label>
            <h5>Price: ($)</h5>
              </label>
            <input  type="number"
                className="form-control"
                value = {this.CalculatePrice()}
                readOnly
                />
          </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Create Item" className="btn btn-primary" />
          </div>
        </form>
        </Container>
      </div>
    )
  }
}