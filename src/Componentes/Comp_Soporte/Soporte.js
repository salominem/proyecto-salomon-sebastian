import React from 'react'
import { Link } from 'react-router-dom';
import imagen1 from '../Recursos/msnegro.jpg'
import { Card } from 'react-bootstrap';
import '../Comp_Soporte/Soporte.css';

function Soporte() {
  return (
    <body className="body_principal1">
   
    <div className="grid-layout-principal1">

      <div className="caja-a" >
       <b> <h1>Centro de ayuda</h1> </b>
       
      </div>
      
      <div className="caja-c" >
        
      <h1 className='title-movie'>¿En que podemos ayudarte? </h1>
      <h2 className='parrafo-3' >-Para cualquier novedad consultar a sebasalomon@gmail.com</h2>
      <h3 className='parrafo-info' >  NOTICIAS SOBRE PELICULAS :
        Entérate de las novedades más resonantes del mundo del cine: eventos, estrenos, proyectos; información relevante y actualizada que no te querrás perder!!! </h3>
      <h4 className='parrafo-4'>-Pagina libre y gratuita para ver las mejores pelis y series del momento!</h4>
      <h5 className='parrafo-5' > -Porque elegirnos? , somos un equipo experto en direccion y estudio.. con mas de 10 años de experiencia en el ambiente de las peliculas.</h5>

      </div>
      <div className="caja-d" >
       <b> <h1 className='movie-12'>Movies And Series:</h1> </b>
      <Card id='Card'>
       <Card.Img id='img' variant='top' src={imagen1}/> 
      <Card.Body>
        <Card.Title className='titulo'>¿Cuáles son las áreas de soporte? </Card.Title>
        <Card.Text>
       Un área de soporte técnico es un departamento encargado de brindar asistencia y soluciones a problemas técnicos relacionados con productos, servicios o sistemas tecnológicos.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className="caja-e">
      <b><p className='btn_volver-11' > <Link to='/home'> Volver al inicio</Link> </p></b>
      </div>
    
    </div>
    </body>
  )
}

export default Soporte