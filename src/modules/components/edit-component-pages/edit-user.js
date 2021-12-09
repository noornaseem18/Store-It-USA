import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import {CssBaseline , Box } from '@material-ui/core';
import { GlobalStyles } from '@mui/material';
import Container from '@mui/material/Container';
import NavList from "../dashboard-navbar"

export default class EditUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeroleid = this.onChangeroleid.bind(this);
    this.onChangefirstname = this.onChangefirstname.bind(this);
    this.onChangemiddlename = this.onChangemiddlename.bind(this);
    this.onChangelastname = this.onChangelastname.bind(this);
    this.onChangeusername = this.onChangeusername.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      roleid: '',
      firstname: '',
      middlename: '',
      lastname: '',
      username: '',
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          roleid: response.data.roleid,
          firstname: response.data.firstname,
          middlename: response.data.middlename,
          lastname: response.data.lastname,
          username: response.data.username,
          email: response.data.email,
          password: response.data.password
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  onChangeusername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeroleid(e) {
    this.setState({
      roleid: e.target.value
    })
  }

  onChangefirstname(e) {
    this.setState({
      firstname: e.target.value
    })
  }
  onChangemiddlename(e) {
    this.setState({
      middlename: e.target.value
    })
  }

  onChangelastname(e) {
    this.setState({
      lastname: e.target.value
    })
  }

  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangepassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      roleid: this.state.roleid,
      firstname: this.state.firstname,
      middlename: this.state.middlename,
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    console.log(user);

    axios.post('http://localhost:5000/users/update/' + this.props.match.params.id, user)
      .then(res => console.log(res.data));

    window.location = '/users';
  }

  render() {
    return (
    <div>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 8 , listStyle: 'none' } }} />
      <CssBaseline />
      <NavList />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <h2>Edit User</h2>
        <Box
          sx={{
          width: 100,
          height: 10,
          }}
           />
        <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>
          <h5>Roll Name: </h5>
          <select value={this.state.rollid} onChange={this.onChangerollid}>            
          <option value="Owner">Owner</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </label>
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
            <h5>Middle Name: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.middlename}
                onChange={this.onChangemiddlename}
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
            <h5>Username: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeusername}
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
            <label>
            <h5>Password: </h5> 
              </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.password}
                onChange={this.onChangepassword}
                />
          </div>

          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
        </Container>
      </div>
    )
  }
}