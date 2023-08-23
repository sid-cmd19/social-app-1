import React from "react";

import "./register.css";

const Register = () => {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <div className='loginLogo'>ReactSocial</div>
          <span className='loginDesc'>
            Connect with friends with ReactSocial
          </span>
        </div>
        <div className='loginRight'>
          <div className='loginBox'>
            <input placeholder='Username' className='loginInput' />
            <input placeholder='Email' className='loginInput' />
            <input placeholder='Password' className='loginInput' />
            <input placeholder='Password Again' className='loginInput' />
            <button className='loginButton'>Sign Up</button>
            <button className='loginRegisterButton'>Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
