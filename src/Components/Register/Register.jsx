import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../Context/UserAuthContext';

const Register = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [Address, setAddress] = useState('');
  const [ProfilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState('');
  const { signUp, setUser } = useUserAuth();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
      const err_msg = 'Enter Valid Email';
      setError(err_msg);
      return false;
    } else return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validEmail = validateEmail(Email);
    if (validEmail) {
      setError('');
      try {
        // Signup user with Firebase
        const userCredential = await signUp(Email, Password);

        setUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          name: Name,
          address: Address,
          profilePicture: ProfilePicture ? URL.createObjectURL(ProfilePicture) : null,
        });

        navigate('/home');
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="registration-form">
        <h1 style={{ marginBottom: '20px' }}>Register</h1>
        {error && <p className="error-msg">{error}</p>}
        <input
          style={{ marginBottom: '20px' }}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          style={{ marginBottom: '20px' }}
          type="text"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <input
          style={{ marginBottom: '20px' }}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          minLength={8}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="file" onChange={(e) => setProfilePicture(e.target.files[0])} />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <div className="link-container">
        <p>
          Already Registered ? <Link to="/">Sign In</Link>
        </p>
      </div>
    </>
  );
};

export default Register;
