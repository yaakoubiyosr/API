import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  // Declare the state to store the list of users
  const [listOfUsers, setListOfUsers] = useState([]);

  // Fetch data using useEffect and axios
  useEffect(() => {
    // URL for JSONPlaceholder API
    const url = 'https://jsonplaceholder.typicode.com/users';

    // Axios GET request to fetch user data
    axios.get(url)
      .then(response => {
        // Set the response data into state
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }, []); // Empty dependency array to run the effect once when the component mounts

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {/* Map over the listOfUsers and display each user */}
        {listOfUsers.map(user => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Company: {user.company.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
