import React from 'react';
import { Card, Button } from "react-bootstrap"

const SingleCard = ({ client }) => {
  console.log(client.name)
  return(
    <>

    <h2>{client.name}</h2>
    <h4>{client.email}</h4>
    <p>{client.phone}</p>
    
</>  )
}

export default SingleCard
