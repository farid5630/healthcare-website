import React from 'react';
import { useParams } from 'react-router';

const DoctorDetails = () => {
    const {doctorId} = useParams()
    return (
        <div>
            <h1>Doctor Details : {doctorId}</h1>
        </div>
    );
};

export default DoctorDetails;