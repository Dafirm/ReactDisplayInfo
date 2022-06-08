import React from 'react';
import { Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


const SingleCard = ({ client }) => {
  const navigate = useNavigate()
  //getting the first letter of each client's name using slice
  let FirstLetter = (client.name.slice(0,1));

  return(
    <>
      <Card>
          <div className = "AllClient">
            <div className = "Circle">{FirstLetter}</div>
              <div className = "Container">
                <Card.Body>
                  <div className = "Name">{client.name}</div>

                  <p>{client.username}</p>
                  <h4>{client.email}</h4>

                  <Button className = "More"onClick={() => navigate("/" + client.id)} variant="primary">MORE DETAILS</Button>
                  </Card.Body>
               </div>
            </div>
        </Card>

    </>  )
}

export default SingleCard
