import jwt_decode from 'jwt-decode';
import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  return (props) => {

    const token = localStorage.getItem('token');

    if (!token) {
        console.log('no authorization')
        return <Navigate to="/login" />
    }

    const decodedToken = jwt_decode(token)
    const id = decodedToken.id
    const name = decodedToken.name 
    

    return <WrappedComponent {...props} user={{id: id, name: name}} />;
  };
};

export default withAuth;