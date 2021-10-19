import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Abanner from '../Banner/Abanner';

const About = () => {
    return (
        <div>        
            <Abanner></Abanner>
            <Container className="mt-5">
            <Row>
                <Col  xs={12} md={6} lg={6}>
                    <img src="https://i.postimg.cc/nL1vM4nw/Public-Opinion-Research-1200x666.jpg"  alt="" height="400px" width="80%" />
                </Col>
                <Col xs={12} md={6} lg={6} className="text-start mt-5">
                    <h1>We Are Mediplus A Medical Clinic</h1> 
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>  
                    <Link to="/departments" className="btn btn-success rounded p-2">Make an Appointment</Link>  
                              
                </Col>
               
            </Row>
            </Container>
        </div>
    );
};

export default About;