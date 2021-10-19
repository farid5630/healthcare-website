import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';


const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./home.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <div>
            <Banner></Banner>

            <Container>
                <div  className="my-5 text-info text-cernter">
                <h1>Our Departments</h1>
                <p>Esteem spirit temper too say adieus who direct esteem. <br />
                    It esteems luckily or picture placing drawing.</p>
                </div>
            <div className="row">
                    {
                        services?.map((service) => (
                            
                            <div className="col-md-3">
                                <div className="cart h-100 bg-light shadow-lg">
                                    <div className="cart-details">
                                        <img className="w-100" height="200px" src={service.img} alt="" />
                                    </div>
                                    <div className="text-area p-2 pt-4">
                                        <h4>{service.subject}</h4>
                                        <p>{service.description}</p>
                                        <h6>Service fee : {service.fee}</h6>
                                        {/* <small><button className="btn btn-primary">See Details</button></small> */}
                                    </div>                                    
                                </div>
                            </div>
                        ))
                    };
                </div>
            </Container>
            <div className="text-center mb-5">
            <Link to="/departments" className="btn btn-primary" >See all Our Detartments  
            </Link>
            </div>
        </div>
    );
};
{/* <FontAwesomeIcon icon={faArrowRight} />*/}

export default Home;