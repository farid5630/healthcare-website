import React from 'react';
import { useParams } from 'react-router';

const DepartmentDetails = () => {
    const {departmentId} = useParams();
    
    return (
        <div>
            <h1>Department Details : {departmentId}</h1>
        

            <h2>দেখাতে পারি নাই , অনেক চেষ্টা করেছি । </h2>

        </div>
    );
};

export default DepartmentDetails;