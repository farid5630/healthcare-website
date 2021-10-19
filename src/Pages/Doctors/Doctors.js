import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data));
        
    }, [])
    return (
        <div>
            
            <Container>
                <div className="m-5">
                <h1 className="text-info">Our Qualified Doctors</h1>
                <p>Separated they live in. A small river named Duden flows by their place <br /> and supplies it with the necessary regelialia. It is a paradisematic <br /> country</p>
                </div>
                <div className="row row-cols-md-3 row-cols-sm-1 ">
                    
                
            {
                doctors?.map(doctor => <Doctor
                key={doctor.key}
                doctor={doctor}
                ></Doctor>)
            }
            
            </div>
            </Container>
        </div>
    );
};

export default Doctors;