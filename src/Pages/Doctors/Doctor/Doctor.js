import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
    const{img, name, expert, fee, id} = doctor;
    return (
        <div className="">
            <div className="mb-4 rounded">
                        <div className="cart h-100 bg-light shadow-lg">
                            <div className="cart-details">
                                <img className="w-100" height="200px" src={img} alt="" />
                            </div>
                            <div className="text-area p-2 pt-4">
                                <h4>{name}</h4>
                                <p className="text-success">{expert}</p>
                                <h6>Course fee : {fee}</h6>
                                <Link to={`/dtdetails/${id}`}>
                                <button className="btn btn-primary">See Details</button>
                                </Link>
                            </div>                                    
                        </div>
                    </div>
        </div>
    );
};

export default Doctor;