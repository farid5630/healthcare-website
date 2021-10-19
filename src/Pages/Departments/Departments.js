import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Departments = () => {
    const [departments, setDepartments] = useState([])
    useEffect(() => {
        fetch('./departments.json')
        .then(res => res.json())
        .then(data => setDepartments(data));
    }, [])
    return (
        <div>

            <div className="my-5 text-info text-cernter">
                <h1>Our Departments</h1>
                <p>Esteem spirit temper too say adieus who direct esteem. <br />
                    It esteems luckily or picture placing drawing.</p>
                </div>
            <Container>
  
                <div className="row">
                    {
                        departments?.map((department) => (
                            
                            <div className="col-md-4  mb-4 text-center">
                                <div className="cart h-100 bg-light shadow-lg  pb-2">
                                    <div className="cart-details">
                                        <img className="w-100" height="200px" src={department.img} alt="" />
                                    </div>
                                    <div className="text-area p-2 pt-4">
                                        <h4 className="text-info">{department.subject}</h4>
                                        <p>{department.description}</p>
                                        <h6>Cost : {department.fee} /-</h6>
                                    </div>  
                                    <Link to="" className="btn btn-success">See Details
                  
                                    </Link>   

                            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                                </div>
                            </div>
                        ))
                    };
                </div>
            </Container>
        </div>
    );
};

export default Departments;