import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios"
import SingleCard from "./SingleCard.js"
import { Row, Col } from "react-bootstrap"

const Home = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try{
      const result = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(result)
      setClients(result.data);
    } catch(error){
      console.log(error)
    }

  };
  console.log(clients)
  return (

    <div className = "home">


    
      {clients.map((client) =>(
      <div className = "Client-preview" key = {client.id}>
      <SingleCard client={client}/>
      </div>
    ))}



 </div>
  );

}
export default Home;
