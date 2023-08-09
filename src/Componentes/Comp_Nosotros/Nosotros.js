import React from 'react'
import '../Comp_Nosotros/Nosotros.css';
import { Link } from 'react-router-dom';
import imagen1 from '../Recursos/mslogo.jpg'
import { Card } from 'react-bootstrap';

function Nosotros() {
  return (
    <body className="body_principal1">
   
    <div className="grid-layout-principal1">

      <div className="caja-a" >
      <b> <h1>Movies And Series</h1> </b>
      <b><p className='btn_volver-1' > <Link to='/home'> Volver al inicio</Link> </p></b> 
      </div>
      
      <div className="caja-c" >
        <h1 className='title-movie'>Historia sobre nosotros: </h1>
      <p className='parrafo-info1' >  Movies and Series es un sitio web argentino dedicado a la distribución de producciones de cine y televisión a través de la web. M.a.S fue creado en mayo de 2021 y en 2023 el sitio web fue uno de los 5 más visitados de Argentina, con más de medio millón de visitas diarias. Movies and Series no almacenaba datos sino que ponía a la orden menús que facilitaban la navegación, a través de enlaces a servicios externos de almacenamiento en línea mediante un método de reproducción conocido como "streaming", algo que otros sitios de medios también realizan y que ha creado un fuerte debate sobre legalidad y derechos de propiedad de autor.El 25 de marzo de 2022, Movies And Series realizó el primer lanzamiento de una película en forma exclusiva que, sin pasar por salas de cine, fue estrenada directamente en esta plataforma web. La película titulada Boquita fue dirigida por el cineasta argentino Miguel Salomon.
    </p>
      </div>
      <div className="caja-d" >
      <Card id='Card'>
       <Card.Img id='img' variant='top' src={imagen1}/> 
      <Card.Body>
        
        <Card.Text>
          <h1>Informacion General de la pagina web: </h1>
          <br></br>
          <p className='title_lateral' >
          <ol>
          <li>
            Tipo1: transmision de peliculas.
          </li>
          <li>
            Tipo2: transmision de series.
          </li>
          <li>
            Comercial: No.
          </li>
          <li>
            Registro: No.
          </li>
          <li>
            Idiomas disponibles: Español.
          </li>
          <li>
            Otro: Ingles.
          </li>
          <li>
            Lanzamiento: 5 de mayo de 2021.
          </li>
          <li>
            Cierre: No definido.
          </li>
          <li>
            Desarrollador: Sebastian Salomon.
          </li>
          <li>
            Contacto: sebasalomon@gmail.com
          </li>
          </ol>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className="caja-e">
     <b> <p> UWU </p> </b>
      </div>
    
    </div>
    </body>
  )
}

export default Nosotros