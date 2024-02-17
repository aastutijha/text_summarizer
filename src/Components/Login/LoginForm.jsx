import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../../Context/UserAuthContext';
import TextSummarizer from '../TextSummarizer/TextSummarizer';
import { getAuth } from 'firebase/auth'; // Corrected import
import './Styles.css';

const LoginForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
      const err_msg = "Enter Valid Email";
      setError(err_msg);
      return false;
    } else return true;
  };

  const handleSubmitSignInWithEmailAndPassword = async (e) => {
    e.preventDefault();
    const authInstance = getAuth();

    const validEmail = validateEmail(Email);

    if (validEmail) {
      setError("");
      try {
        await logIn(Email, Password);
        navigate("/home");
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <TextSummarizer />
      <form onSubmit={handleSubmitSignInWithEmailAndPassword} id='login-form'>
        <h1 style={{ marginBottom: "20px" }}>Login</h1>
        {error && <p className='error-msg'>{error}</p>}
        <input
          style={{ marginBottom: "20px" }}
          type="email"
          placeholder='Email'
          required
          onChange={(e) => { setEmail(e.target.value) }}
        /><br />
        <input
          style={{ marginBottom: "20px" }}
          type="password"
          placeholder='Password'
          required
          minLength={8}
          onChange={(e) => { setPassword(e.target.value) }}
        /><br />
        <button style={{ marginBottom: "10px" }} type='submit'>Sign In</button>
        <Link to="/forgot-password" className="forgot-password-option">
          Forgot Password?
        </Link>
        <div id="google-button-container" >
        
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      </form>
      <div className="link-container">
        <p>
          New User? <Link to="/Register">Register</Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
