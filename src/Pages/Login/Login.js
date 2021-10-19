import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div>
            <h1>Please Log in</h1>
            <button onClick={handleGoogleLogin}>Sign in Google</button>
        </div>
    );
};

export default Login;