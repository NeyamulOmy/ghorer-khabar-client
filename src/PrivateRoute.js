import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './context/AuthProvider'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (

            <div className="radial-progress" style={{ "--value": 99 }}>99%</div>

        )
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;