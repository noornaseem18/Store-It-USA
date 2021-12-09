import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {isAuthenticated} from "../../../auth";

const OwnerRoute = ({component: Component, ...rest }) => {
    return (
        <Route
        {...rest }
        render = {(props) => 
            isAuthenticated() && isAuthenticated().roleid === "Owner" ? (
                <Component  {...props }/>
            ) : (
                <Redirect to = "/login"/>
            )
        }
      />
    );
};

export default OwnerRoute;