import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="p-5 ">
            <h4>Page not Found</h4>
            <h1>404</h1>
            <Link to="/home">Go Back</Link>

        </div>
    );
};

export default NotFound;