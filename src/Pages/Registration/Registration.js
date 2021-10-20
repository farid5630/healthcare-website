import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from '@firebase/auth';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Registration = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const {signInUsingGoogle} = useAuth()
  const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
  

  const handleGoogleLogin = () => {
    signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
}

  const handleEmailchange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }

  const handleSubmitForm = e => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      console.log(user);

    });
      e.preventDefault();
  }
  


  return (
    <div className="m-auto w-50">
        <div>
            <form onSubmit={handleSubmitForm}>
            <h1 className="text-info text-center mb-3">Please Registration  </h1>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">First Name</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" id="inputEmail3" required/>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Last Name</label>
              <div className="col-sm-9">
                <input type="Text" className="form-control" id="inputEmail3"  required/>
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email</label>
              <div className="col-sm-9">
                <input onBlur={handleEmailchange} type="email" className="form-control" id="inputEmail3" required/>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Password</label>
              <div className="col-sm-9">
                <input type="password" onBlur={handlePasswordChange}  className="form-control" id="inputPassword3" required/>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>  
          <p>I have already account <Link to="/login">Login</Link></p>
      <button className="btn btn-success" onClick={handleGoogleLogin}>Google Sign In </button>
    </div>
    </div>
  );
};

export default Registration;