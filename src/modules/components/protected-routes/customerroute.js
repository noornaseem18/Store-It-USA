import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {isAuthenticated} from "../../../auth";

const CustomerRoute = ({component: Component, ...rest }) => {
    return (
        <Route
        {...rest }
        render = {(props) => 
            isAuthenticated() && isAuthenticated().roleid === "User" ? (
                <Component  {...props }/>
            ) : (
                <Redirect to = "/login"/>
            )
        }
      />
    );
};

export default CustomerRoute;