// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/data')  // Make a GET request to the backend
      .then(response => {
        setData(response.data); // Set the fetched data in the state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Data from SQL Database</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li> // Display data (change based on your table)
        ))}
      </ul>
    </div>
  );
};

export default App;
