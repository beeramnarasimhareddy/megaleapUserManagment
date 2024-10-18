import React, { useEffect, useState } from 'react';
import { NavLink,Link } from 'react-router-dom'
import "./userlist.css"
import Additionaldetails from './Additionaldetails';

const Userlist = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []); 

  if (loading) return <h2 className='load'>Loading...</h2>;


  

  return (
    <div>
      <div className='header'>
      <h3 className='heading'>User Management Dashboard</h3>
      Filter <input type="text" />
      </div>
      
      <div className='fullcard'>
        {data.map((user, id) => (
          <div key={id} className='card'>
            
            <h5>Name:{user.name}</h5>
            <p>Username:{user.username}</p>
            <p>Email:{user.email}</p>
            <p>Company:{user.company.name}</p>
            <p>zipcode:{user.address.zipcode}</p>

            <button className='but'>Know More</button>
           
            
          </div>
        ))}
      </div>


      
    </div>

    
  );
};

export default Userlist;
