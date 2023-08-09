import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AxiosRick.css';
import { Card  } from 'react-bootstrap';

function AxioRick() {
  const [caracteres, setCaracteres] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCaracteres(response.data.results.slice(0, 6));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
  <body className='body_axio'>
    <div className='contenedor'>
    <b> <p className='btn_volver1' ><Link to='/home'> Home</Link> </p>  </b>
    <h1 className='h1-contenedor'>Rick and Morty</h1>
     
        {[0, 3].map((index) => (
          <div className="cartas-contenedor">
              {caracteres.slice(index, index + 3).map((car) => (
                <Card key={car.id} className="caracteres-cartas">
                  <Card.Img variant="top" src={car.image} />
                  <Card.Body>
                    <Card.Title>{car.name}</Card.Title>
                    <Card.Text>Species: {car.species}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
        
        ))}
   
    </div>
  </body>
  );
}

export default AxioRick;
