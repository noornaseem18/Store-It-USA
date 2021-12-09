import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {CssBaseline , Box, Button} from '@material-ui/core';
import { GlobalStyles } from '@mui/material';
import Container from '@mui/material/Container';
import CustomerNavbar from "./customer-navbar";
import { isAuthenticated} from "../../auth"
import { getlocalStorage} from "../../localstorage"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './button.css'; 
import './dropdown.css'; 


var grandtotal= 0;

const user = getlocalStorage("user")

const handleSend = (event, email, firstname, lastname, total) => {
  event.preventDefault()
  try {
    axios.post("http://localhost:5000/send_mail",{
      email, firstname, lastname, total
    })
    .then(res => {
      alert(res.data.message) })
  } catch (error) {
    console.error(error)
  }
}

const Item = props => (
  <tr>
    <td>{props.item.name}</td>
    <td>{props.item.palletsquantity}</td>
    <td>{props.item.boxesquantity}</td> 
    <td>{props.item.paid}</td>
    <td>{props.item.price}</td>
  </tr>
)

export default class InvoiceList extends Component {
  constructor(props) {
    super(props);

    this.state = {items: [], search: 'All'};
  }
 
  componentDidMount() {
    axios.get('http://localhost:5000/users/item/'+ isAuthenticated()._id)
      .then(response => {
        this.setState({ items: response.data })
      })
      .catch((error) => {
        console.log(error);
      })

      for (var i=0; i < user.items.length; i++) {
        if (user.items[i].paid === "Not Paid")
        {
          grandtotal = grandtotal + user.items[i].price;
        }
    } 
    console.log("Grandtotal = ", grandtotal);
  }
  
  itemsList(search) {
    return this.state.items.filter(val =>{
      if (search === "All")
    {
      return val;
    } else if (search === "Paid")
    {
      return val.paid === "Paid";
    } else if (search === "Not Paid")
    {
      return val.paid === "Not Paid";
    }
  })
    .map(currentitem => {
      return <Item item={currentitem} key={currentitem._id}/>;
    })
  }



  render() {
    return (
      <div>
      <GlobalStyles styles={{ ul: { padding: 8 , listStyle: 'none' } }} />
      <CssBaseline />
      <CustomerNavbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <label className="dropdown ms-auto">
          <select value={this.state.search} onChange={(e) =>{this.setState({search: e.target.value})}}>
          <option value="All">All</option>            
          <option value="Not Paid">Not Paid</option>
          <option value="Paid">Paid</option>
          </select>
        </label>
        <h3>Invoice</h3>
        <table className="table">
        <Box
          sx={{
          width: 30,
          }}
           />
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Pallets Quantity</th>
              <th>Boxes per Pallet</th>
              <th>Paid</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { this.itemsList(this.state.search) }
          </tbody>
        </table>
          <div className='col-md-4 ms-auto'>
            <div className='card card-body mt-3 '>
              <h5> Grand Total:
                  <span className='float-end'>{ grandtotal }</span>
                </h5>
                <hr />
                <button className='btn btn-invoice' onClick =  {(e) => handleSend(e, user.email, user.firstname, user.lastname, grandtotal)}>
                  <ShoppingCartIcon />
                    Generate Invoice
                  </button>
                  </div>
            </div>
        </Container>
      </div>
    )
  }
}