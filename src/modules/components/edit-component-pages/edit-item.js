import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import {CssBaseline} from '@material-ui/core';
import { GlobalStyles } from '@mui/material';
import Container from '@mui/material/Container';
import NavList from "../dashboard-navbar"

export default class EditItem extends Component {
  constructor(props) {
    super(props);

    this.onChangename = this.onChangename.bind(this);
    this.onChangecategory = this.onChangecategory.bind(this);
    this.onChangepalletsquantity = this.onChangepalletsquantity.bind(this);
    this.onChangeboxesquantity = this.onChangeboxesquantity.bind(this);
    this.onChangedescription = this.onChangedescription.bind(this);
    this.onChangelocation = this.onChangelocation.bind(this);
    this.onChangepaid = this.onChangepaid.bind(this);
    this.onChangestatus = this.onChangestatus.bind(this);
    this.onChangestoredfrom = this.onChangestoredfrom.bind(this);
    this.onChangestoreduptill = this.onChangestoreduptill.bind(this);
    this.onChangeprice = this.onChangeprice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      category: '',
      palletsquantity: '',
      boxesquantity: '',
      description: '',
      location: '',
      paid: '',
      status: '',
      storedfrom: new Date(),
      storeduptill: new Date(),
      price: '',
      items: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/item/'+ this.props.match.params.id1 + '/' + this.props.match.params.id2)
      .then(response => {
        this.setState({
          name: response.data.name,
          category: response.data.category,
          palletsquantity: response.data.palletsquantity,
          boxesquantity: response.data.boxesquantity,
          description: response.data.description,
          location: response.data.location,
          paid: response.data.paid,
          status: response.data.status,
          storedfrom: new Date(response.data.storedfrom),
          storeduptill: new Date(response.data.storeduptill),
          price: response.data.price
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

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

  onChangelocation(e) {
    this.setState({
      location: e.target.value
    })
  }

  onChangepaid(e) {
    this.setState({
      paid: e.target.value
    })
  }

  onChangestatus(e) {
    this.setState({
      status: e.target.value
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

  onChangeprice(e) {
    this.setState({
      price: e.target.value
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
      location: this.state.location,
      paid: this.state.paid,
      status: this.state.status,
      storedfrom: this.state.storedfrom,
      storeduptill: this.state.storeduptill,
      price: this.state.price
    }

    console.log(item);

    axios.post('http://localhost:5000/users/item/'+ this.props.match.params.id1 + '/' + this.props.match.params.id2, item)
      .then(res => console.log(res.data))
   //   .catch(error => res.status(400).json('Error: ' + error)); 

    console.log("Users id = ", this.props.match.params.id1);
    console.log("Item id = ", this.props.match.params.id2);
      window.location = '/item/' + this.props.match.params.id1;
  }

  render() {
    return (
    <div>
       <GlobalStyles styles={{ ul: { margin: 0, padding: 8 , listStyle: 'none' } }} />
      <CssBaseline />
      <NavList />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <h2>Edit Item</h2>
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
            <h5>Location: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.location}
                onChange={this.onChangelocation}
                />
          </div>
          <div className="form-group"> 
          <label>
          <h5>Paid: </h5>
          <select value={this.state.paid} onChange={this.onChangepaid}>            
          <option value="Paid">Paid</option>
            <option value="Not Paid">Not Paid</option>
          </select>
        </label>
          </div>
          <div className="form-group"> 
          <label>
          <h5>Status: </h5>
          <select value={this.state.status} onChange={this.onChangestatus}>            
          <option value="Registered">Registered</option>
            <option value="Not Registered">Not Registered</option>
          </select>
        </label>
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
            <h5>Price: </h5>
              </label>
            <input  type="number"
                required
                className="form-control"
                value={this.state.price}
                readOnly
                />
          </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Edit Item" className="btn btn-primary" />
          </div>
        </form>
        </Container>
      </div>
    )
  }
}