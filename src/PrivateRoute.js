import React from "react";
import { Route, Redirect } from "react-router-dom";
import { axiosWithAuth } from 'axiosWithAuth.js'

/*
let verified = ''

const PrivateRoute = ({ component: Component, ...rest }) => {

  
  //verifying user before proceeding
  axiosWithAuth()
  .get(`${${${${${process.env.REACT_APP_BACKEND_URL}}}}}.REACT_APP_BACKEND_URL/api/auth/user/${localStorage.getItem('user_id')}`)
  .then( result => {
    console.log(result)
    verified = true;  
  })
  .catch( error => {
    console.log(error)
    verified = false;
  })
  
  return (
    <Route
      {...rest}
      render={(props) => {
        if (verified) {
          return <Component {...props}/>;
        } else {
          return <Redirect to="/auth" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
*/


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          return <Component {...props}/>;
        } else {
          return <Redirect to="/auth" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
