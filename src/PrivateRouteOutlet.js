import _ from 'lodash';
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRouteOutlet() {
    const user = useSelector(state => state.user.user);

    return !_.isEmpty(user) ? <Outlet /> : <Navigate to="/login" />

}

export default PrivateRouteOutlet