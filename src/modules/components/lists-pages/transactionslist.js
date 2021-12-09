import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {CssBaseline , Box , Button} from '@material-ui/core';
import { GlobalStyles } from '@mui/material';
import Container from '@mui/material/Container';

const Transaction = props => (
  <tr>
    <td>{props.transaction.code}</td>
    <td>{props.transaction.mode}</td>
    <td>{props.transaction.status}</td>
    <td>
      <Link to={"/edittransaction/"+props.transaction._id}>edit</Link> | <a href="#" onClick={() => { props.deletetransaction(props.transaction._id) }}>delete</a> 
    </td>
  </tr>
)

export default class TransactionsList extends Component {
  constructor(props) {
    super(props);

    this.deleteTransaction= this.deleteTransaction.bind(this)

    this.state = {transactions: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/transactions/')
      .then(response => {
        this.setState({ transactions: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTransaction(id) {
    axios.delete('http://localhost:5000/transactions/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      users: this.state.transactions.filter(el => el._id !== id)
    })
  }

  transactionsList() {
    return this.state.transactions.map(currenttransaction => {
      return <Transaction transaction={currenttransaction} deletetransaction={this.deleteTransaction} key={currenttransaction._id}/>;
    })
  }

  render() {
    return (
      <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 8 , listStyle: 'none' } }} />
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Button variant="contained" href="/create-transaction" color =  "primary">
        Create New Transaction
        </Button>
        <Box
          sx={{
            width: 30,
            height: 20,
          }}
           />
        <h3>Logged Transactions</h3>
        <table className="table">
        <Box
          sx={{
          width: 30,
          }}
           />
          <thead className="thead-light">
            <tr>
              <th>Code</th>
              <th>Mode</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.transactionsList() }
          </tbody>
        </table>
        </Container>
      </div>
    )
  }
}