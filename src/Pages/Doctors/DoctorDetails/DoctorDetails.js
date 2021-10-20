import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DoctorDetails = () => {
    const {doctorId} = useParams();
    const {doctor, setDoctor} = useState([]);
    console.log(doctor);

    useEffect(() => {
        fetch('../../../../public/doctors.json')
        .then(res => res.json())
        .then(data => setDoctor(data));
        
    }, [])

    

    return (
        <div>
            <h1>Doctor Details : {doctorId}</h1>
            
                
            
        </div>
    );
};

export default DoctorDetails;