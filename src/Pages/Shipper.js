import React,{useEffect, useState} from "react";
import {Table}from 'react-bootstrap';


//JSX => Razor
function Shipper(){
    const [shippers,setShippers] = useState([]);
  
    const fetchData = async()=>{
        const response = await fetch("https://localhost:44367/api/Shippers");
        const results = await response.json();
        setShippers(results); 
   }
   useEffect(()=>{
      fetchData();
   },[])  

    return(
        <>
          <h3>Shippers Page</h3>
       
   <Table striped bordered hover>
  <thead>
    <tr>     
      <th>ShipperID</th>
      <th>CompanyName</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>    
      {shippers.length > 0 && shippers.map((shipper,i)=>{
          return(
               <tr key={i}>
                <td>{shipper.shipperId}</td>
                <td>{shipper.companyName}</td>
                <td>{shipper.phone}</td>
              </tr>
          )       
      })}
 
  </tbody>
</Table>
        </>
    )
}

export default Shipper;