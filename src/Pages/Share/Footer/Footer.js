import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark text-white mt-5 padding text-start">
            <Container>
                <Row>
                    <Col> 
                        <h1>Madiplus</h1>
                        <p>Firmament morning sixth subdue darkness creeping gathered divide.</p>
                        <a href="https://www.facebook.com/mdforidul.islam.14418" target="_blank">facebook</a>
                    </Col>
                    <Col>
                        <h3>Departments</h3><br /><br />
                        <p>Eye Care</p>
                        <p>Skin Care</p>
                        <p>Pathology</p>
                        <p>Madicine</p>
                        <p>Dental</p>
                    </Col>
                    <Col>
                        <h3>UseFul Links</h3>
                        <br /><br />
                        <Link className="link" to="/home">Home</Link>
                        <Link className="link" to="/about">About</Link>
                        <Link className="link" to="/departments">Departments</Link>
                        <Link className="link" to="/doctors">Doctors</Link>
                        <Link className="link" to="/blo">Blog</Link>


                    </Col>
                    <Col>
                        <h3>Address</h3>
                        <br /><br />
                        <h6>Chilmari, Ulipur, Kurigram</h6>
                        <h5>Bangladesh.</h5>
                        <h6>01762-880051</h6>
                        <p>mdforidulislam5630@gmail.com</p>
                    </Col>
                </Row>
                <p className="text-center mt-5 text-muted">CopyRight<span >&copy;</span>2021 All rights reserved | Designed By Forid .</p>
            </Container>
        </div>
    );
};

export default Footer;