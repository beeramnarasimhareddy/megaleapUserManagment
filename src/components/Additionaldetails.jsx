import React, { useEffect, useState } from 'react'
const Additionaldetails = () => {

  const[data,setData]=useState([])
  const[loading,setLoading]=useState(true)


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json()).then
    ((data)=>{
      setData(data)
      setLoading(false)
    })
  },[]);

  if (loading) return <h3>Loading...</h3>;
  return (
    <div>
      <h3 className='heading'>User Management Dashboard</h3>
      <div className='fullcard'>
        {data.map((user, id) => (
          <div key={id} className='card'>
            
           
            <p>Phone number:{user.phone}</p>
            <p>website:{user.website}</p>
            <p>Company details:{user.company.name}</p>
            <p>address:{user.address.street}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Additionaldetails
