import React from 'react';
import { Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

//fetching data and routing parameters of client full details
const FullDetails = ({ clients }) => {

  const params = useParams() //for routing
  const id = params.id

  const [details, setDetails] = useState("");
  useEffect(() => {
    fetchDetails();
  }, []);

//fetch data from jsonplaceholder
const fetchDetails = async() => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
  let data = await response.json()

  setDetails(data)
}
  return(
    <>{details && ( //get all details first and out
      <div className ="FullDetail">
      <Card>
        <Card.Body>
          <Card.Title>Name : {details.name}</Card.Title>
            <ul className ="list">
                <li>Username: {details.username}</li>
                <li>Email Address: {details.email}</li>
                <li>Phone Number: {details.phone}</li>
                <li>Website: {details.website}</li>
                <li>Company: {details.company.name}</li>
                <li>Address: </li>
              <ul>
                <li>Street: {details.address.street}</li>
                <li>Suite: {details.address.suite}</li>
                <li>City: {details.address.city}</li>
                <li>Zipcode: {details.address.zipcode}</li>
              </ul>
            </ul>
        </Card.Body>
     </Card>
    </div>)}
   </> )
}

export default FullDetails;
