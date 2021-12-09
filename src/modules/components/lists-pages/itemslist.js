import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {CssBaseline , Box, Button} from '@material-ui/core';
import { GlobalStyles } from '@mui/material';
import Container from '@mui/material/Container';
import Userdatafetching from './userdatafetching';

var grandtotal= 0;


const Item = props => (
  <tr>
   <td>{props.item.name}</td>
    <td>{props.item.category}</td>
    <td>{props.item.palletsquantity}</td>
    <td>{props.item.boxesquantity}</td> 
    <td>{props.item.description}</td>
    <td>{props.item.location}</td>
    <td>{props.item.paid}</td>
    <td>{props.item.status}</td>
    <td>{props.item.storedfrom}</td>
    <td>{props.item.storeduptill}</td>
    <td>{props.item.price}</td>
    <td>
      <a href="#" onClick={() => { props.deleteitem(props.item._id) }}>delete</a>
    </td> 
  </tr>
)

export default class ItemsList extends Component {
  constructor(props) {
    super(props);

    this.deleteItem= this.deleteItem.bind(this)

    this.state = {items: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/items/')
      .then(response => {
        this.setState({ items: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteItem(id) {
    axios.delete('http://localhost:5000/items/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      items: this.state.items.filter(el => el._id !== id)
    })
  }


  itemsList() {
    return this.state.items.map(currentitem => {
      return <Item item={currentitem} deleteitem={this.deleteItem} key={currentitem._id}/>;
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
        <h3>Logged Items</h3>
        <table className="table">
        <Box
          sx={{
          width: 30,
          }}
           />
          <thead className="thead-light">
            <tr>
            <th>Name</th>
              <th>Category</th>
              <th>Pallets Quantity</th>
              <th>Boxes per Pallet</th>
              <th>Description</th>
              <th>Location</th>
              <th>Paid</th>
              <th>Status</th>
              <th>Stored from</th>
              <th>Stored Uptill</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {this.itemsList()}
          </tbody>
        </table>
        </Container>
      </div>
    )
  }
}