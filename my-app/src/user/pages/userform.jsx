import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../admin/componets/header';

function Userform() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstname,
      lastname,
      age,
      email,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/addemp', formData);
      console.log(response.data.message);
      alert(response.data.message)
      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      console.error('Error creating employee:', error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div>
      <Header/>
      <h1>Userform</h1>
      {firstname}--{lastname}--{age}---{email}
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Userform;
