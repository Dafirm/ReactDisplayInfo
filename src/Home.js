import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import SingleCard from "./SingleCard.js";
import { Row, Col } from "react-bootstrap";

//Function component for homepage
const Home = () => {
  const [clients, setClients] = useState([]);

//Fetch data from json placeholder
  useEffect(() => {
    const fetchData = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        setClients(result.data);
      };
    fetchData();
  }, []);


  return (
    <div className = "home">
        <h1> Meet our clients</h1>
        <div><p>
        <br/></p></div>
          <Row>
              {clients.map((client) =>(
                <Col md={4} lg={3} className = "Client-preview" key = {client.id}>
                  <SingleCard client={client}/>
                </Col>
              ))}
          </Row>
    </div>
  );
}
export default Home;
