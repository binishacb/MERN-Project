import React, { useState } from 'react';
import Header1 from '../components/header';
import axios from 'axios';

const MyForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstname,
      lastname,
      email,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/students', formData);
      // console.log(response.data.message);
      // alert(response.data.message);
      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      console.error('Error creating student:', error);
      // Handle error, e.g., show an error message
    }
  };
  return (
    <div>
      <Header1 />
      <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
        <h2>Registration Form</h2>
        {firstname}--{lastname}---{email}
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            />
          </label>
          <br />
          <button type="submit" >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
  };

export default MyForm;
