
import React, { useEffect, useState } from "react";
import axios from "axios"
import './card.css';
//import { BrowserRouter, Route } from 'react-router-dom'


function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/users");

      setClients(result.data);
    };
    fetchData();
  }, []);

  /*return(
    <div className = 'user-cards'>
    {clients}

    </div>
  );
}*/

  //console.log(clients);

 return (
    <>
        <h1 className="heading"> This is the information of clients!</h1>
        <div className = "container">
          <div className = "user-cards">
            {clients && clients.map((client) => (
              <div className = "user-card">
                <h2>{client.name}</h2>
                <h3>{client.email}</h3>
                <p>{client.phone}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}


export default App;
