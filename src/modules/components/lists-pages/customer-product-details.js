import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {CssBaseline , Box } from '@material-ui/core';
import { GlobalStyles } from '@mui/material';
import Container from '@mui/material/Container';
import NavList from "../dashboard-navbar"


const Product = props => (
  <tr>
    <td>{props.product.title}</td>
    <td>{props.product.summary}</td>
    <td>
      <Link to={"/editproduct/"+props.product._id}>edit</Link> | <a href="#" onClick={() => { props.deleteproduct(props.product._id) }}>delete</a>
    </td>
  </tr>
)

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.deleteProduct= this.deleteProduct.bind(this)

    this.state = {
      products: []
  };
 }
 

  componentDidMount() {
    axios.get('http://localhost:5000/boxes/product/'+ this.props.match.params.id)
      .then(response => {
        this.setState({ products: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteProduct(id) {
    axios.delete('http://localhost:5000/boxes/product/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      products: this.state.products.filter(el => el._id !== id)
    })
  }

  productsList() {
    return this.state.products.map(currentproduct => {
      return <Product product={currentproduct} deleteproduct={this.deleteProduct} key={currentproduct._id}/>;
    })
  }

  render() {
    return (
      <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 8 , listStyle: 'none' } }} />
      <CssBaseline />
      <NavList />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <h3>Logged Products of the Customer</h3> 
        <Box
          sx={{
          width: 100,
          height: 10,
          }}
           />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Summary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.productsList() }
          </tbody>
        </table>
        </Container>
      </div>
    )
  }
}