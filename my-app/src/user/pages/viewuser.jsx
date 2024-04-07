import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);


  const [rf, setRf] = useState(true);

  useEffect(() => {
    const fetchUsers = () => {
      axios.get('http://localhost:5000/api/users')
        .then(response => {
            console.log(response.data)
          setUsers(response.data);
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    };

    fetchUsers();
  }, [rf]);

  const handleRefresh = () => {
    // Toggle the value of rf to trigger a re-fetch
    setRf(prevRf => !prevRf);
  };
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
      setRf(false);
       setRf(true)
      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      console.error('Error creating employee:', error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className="container mt-5">
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
      <h2>User List</h2>
      <button className="btn btn-primary mb-3" onClick={handleRefresh}>
        Refresh
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((a) => (
            <tr key={a._id}>
              <td>{a.firstname}</td>
              <td>{a.lastname}</td>
              <td>{a.age}</td>
              <td>{a.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
