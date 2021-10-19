import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        
          <div className="banner-container">
            <div className="">
                <div className="row d-flex banner  align-items-center justify-content-center">
                    <div className="col-md-6 ps-5">
                        <h1 className="title " style={{fontSize:'65px', fontWeight:'900'}}>
                          We are here <br /> for your care
                        </h1>
                        <p className="text-muted text-conter mt-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                    </div>
                    <div className="col-md-6">
                    </div>
                </div>
            </div>
           </div>
        
    );
};

export default Banner;