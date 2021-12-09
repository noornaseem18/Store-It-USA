import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { setAuthentication , isAuthenticated} from "../../../auth"


const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    
    

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:5000/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            setAuthentication(res.data.token,res.data.user)

            if (isAuthenticated() && isAuthenticated().roleid === "Admin")
            {
                history.push("/admin-dashboard/"+ isAuthenticated()._id);
            } else if (isAuthenticated() && isAuthenticated().roleid === "Owner")
            {
                history.push("/owner-dashboard/"+ isAuthenticated()._id);
            } else if (isAuthenticated() && isAuthenticated().roleid === "User")
            {
                history.push("/customer-dashboard/"+isAuthenticated()._id);
            };  
        })
        .catch(err => {
            console.log("Sign in return JSON object error= ", err);
        })
    }


    return (
        <div className="login">
          <div className="logincard">
            <h1>Sign In</h1>
            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Sign In</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Sign Up</div>
            </div>
        </div>
    )
}

export default Login