import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {isAuthenticated} from "../../../auth";

const AdminRoute = ({component: Component, ...rest }) => {
    return (
        <Route
        {...rest }
        render = {(props) => 
            isAuthenticated() && isAuthenticated().roleid === "Admin" ? (
                <Component  {...props }/>
            ) : (
                <Redirect to = "/login"/>
            )
        }
      />
    );
};

export default AdminRoute;