import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {CssBaseline , Box } from '@material-ui/core';
import { GlobalStyles } from '@mui/material';
import Container from '@mui/material/Container';
import NavList from "../dashboard-navbar"


const Pallet = props => (
  <tr>
    <td>{props.pallet.description}</td>
    <td>{props.pallet.quantity}</td>
    <td>
      <Link to={"/editpallet/"+props.pallet._id}>edit</Link> | <a href="#" onClick={() => { props.deletepallet(props.pallet._id) }}>delete</a> | <Link to={"/box/"+props.pallet._id}>details</Link>
    </td>
  </tr>
)

export default class PalletList extends Component {
  constructor(props) {
    super(props);

    this.deletePallet= this.deletePallet.bind(this)

    this.state = {
      pallets: []
  };
 }
 

  componentDidMount() {
    axios.get('http://localhost:5000/items/pallet/'+ this.props.match.params.id)
      .then(response => {
        this.setState({ pallets: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletePallet(id) {
    axios.delete('http://localhost:5000/items/pallet/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      pallets: this.state.pallets.filter(el => el._id !== id)
    })
  }

  palletsList() {
    return this.state.pallets.map(currentpallet => {
      return <Pallet pallet={currentpallet} deletepallet={this.deletePallet} key={currentpallet._id}/>;
    })
  }

  render() {
    return (
      <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 8 , listStyle: 'none' } }} />
      <CssBaseline />
      <NavList />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <h3>Logged Pallets of the Customer</h3> 
        <Box
          sx={{
          width: 100,
          height: 10,
          }}
           />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.palletsList() }
          </tbody>
        </table>
        </Container>
      </div>
    )
  }
}