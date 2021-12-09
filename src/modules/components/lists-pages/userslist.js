import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {CssBaseline , Box , Button} from '@material-ui/core';
import { GlobalStyles } from '@mui/material';
import Container from '@mui/material/Container';
import AddIcon from '@mui/icons-material/Add';
import '../../customer-dashboard/button.css';

const User = props => (
  <tr>
    <td>{props.user.roleid}</td>
    <td>{props.user.firstname}</td>
    <td>{props.user.middlename}</td>
    <td>{props.user.lastname}</td>
    <td>{props.user.username}</td>
    <td>{props.user.email}</td>
    <td>
      <Link to={"/edituser/"+props.user._id}>edit</Link> | <a href="#" onClick={() => { props.deleteuser(props.user._id) }}>delete</a> | <Link to={"/item/"+props.user._id}>items</Link> 
    </td>
  </tr>
)

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.deleteUser= this.deleteUser.bind(this)

    this.state = {users: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteUser(id) {
    axios.delete('http://localhost:5000/users/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    })
  }

  usersList() {
    return this.state.users.map(currentuser => {
      return <User user={currentuser} deleteuser={this.deleteUser} key={currentuser._id}/>;
    })
  }

  render() {
    return (
      <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 8 , listStyle: 'none' } }} />
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <div className='col-md-3 ms-auto'>
      <Link to = '/create-user' className='btn btn-create' role="button" >
      <AddIcon />
      Create New User
      </Link>
      </div>
        <Box
          sx={{
            width: 30,
            height: 20,
          }}
           />
        <h3>Logged Users</h3> 
        <Box
          sx={{
          width: 30,
          height: 5,
          }}
           />

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Role Name</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.usersList() }
          </tbody>
        </table>
        </Container>
      </div>
    )
  }
}