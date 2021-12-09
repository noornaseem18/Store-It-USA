import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {CssBaseline , Box } from '@material-ui/core';
import { GlobalStyles } from '@mui/material';
import Container from '@mui/material/Container';
import NavList from "../dashboard-navbar"


const Boxx = props => (
  <tr>
    <td>{props.box.description}</td>
    <td>{props.box.quantity}</td>
    <td>
      <Link to={"/editbox/"+props.box._id}>edit</Link> | <a href="#" onClick={() => { props.deletebox(props.box._id) }}>delete</a> | <Link to={"/product/"+props.box._id}>details</Link>
    </td>
  </tr>
)

export default class BoxList extends Component {
  constructor(props) {
    super(props);

    this.deleteBox= this.deleteBox.bind(this)

    this.state = {
      boxes: []
  };
 }
 

  componentDidMount() {
    axios.get('http://localhost:5000/pallets/box/'+ this.props.match.params.id)
      .then(response => {
        this.setState({ boxes: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteBox(id) {
    axios.delete('http://localhost:5000/pallets/box/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      boxes: this.state.boxes.filter(el => el._id !== id)
    })
  }

  boxesList() {
    return this.state.boxes.map(currentbox => {
      return <Boxx box={currentbox} deletebox={this.deleteBox} key={currentbox._id}/>;
    })
  }

  render() {
    return (
      <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 8 , listStyle: 'none' } }} />
      <CssBaseline />
      <NavList />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <h3>Logged Boxes of the Customer</h3> 
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
            { this.boxesList() }
          </tbody>
        </table>
        </Container>
      </div>
    )
  }
}