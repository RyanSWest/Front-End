import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRouter = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} />
                }
                return <Redirect to='/login' />
            }}
            />
    )
}

export default PrivateRouter;