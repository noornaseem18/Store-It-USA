import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        firstname: "",
        middlename: "",
        lastname: "",
        username: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { firstname, middlename, lastname, username, email, password, reEnterPassword } = user
        if( firstname && lastname && username && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:5000/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invalid input")
        }
        
    }

    return (
        <div className="register">
            <div className="registercard">
            {console.log("User", user)}
            <h1>Sign Up</h1>
            <input type="text" name="firstname" value={user.firstname} placeholder="First Name" onChange={ handleChange }></input>
            <input type="text" name="middlename" value={user.middlename} placeholder="Middle Name" onChange={ handleChange }></input>
            <input type="text" name="lastname" value={user.lastname} placeholder="Last Name" onChange={ handleChange }></input>
            <input type="text" name="username" value={user.username} placeholder="Username" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Sign Up</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Sign In</div>
            </div>
        </div>
    )
}

export default Register