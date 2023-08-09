import "./CardPelis.css";
import '../Comp_CardPelis/CardPelis.css';
import imagen1 from '../Recursos/BlackAdam.jpg';
import imagen2 from '../Recursos/SpaceJam.jpg';
import imagen3 from '../Recursos/Spiderman.jpg';
import imagen4 from '../Recursos/Venom.jpg';
import imagen5 from '../Recursos/SuperMascotas.jpg';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Titulos from "../Comp_Titulo/Titulo";




function CardPelis() {

  let peliTitulo = "PELICULAS DISPONIBLES";


  return (
       <body className="body-total">
        <div> <li className='li_titulo'><Titulos title={peliTitulo}/></li>
        <p className='btn-volver-pelis' ><Link to='/home'> Volver al menu principal</Link> </p> 

          </div>

<div className="contenedor_padre">       
<div className="img_1" >
     <Card id='Card'>
     <div className="div-car" > <Card.Img id='img' variant='top' src={imagen1}/> </div> 
      <Card.Body>
        <Card.Title className='titulo'>BlackAdam</Card.Title>
        <Card.Text className="txt-card" > Luego de casi 5000 años de recibir los poderes de los antiguos
                  dioses y ser encarcelado con la misma rapidez, Black Adam es
                  liberado de su tumba terrenal, listo para dar rienda suelta a
                  su único sentido de justicia en el mundo moderno.
         </Card.Text>
      </Card.Body>
    </Card>
</div>
<div className="img_2"  >
<Card id='Card'>
     <div className="div-car"  > <Card.Img  id='img' variant='top' src={imagen2}/> </div> 
      <Card.Body>
        <Card.Title className='titulo'>SpaceJam</Card.Title>
        <Card.Text className="txt-card" > ¡Te damos la bienvenida al mundo de Space Jam! El ícono
                  mundial de la NBA LeBron James se embarca en una aventura
                  épica junto al personaje clásico Bugs Bunny en un evento que
                  combina animación y actores reales, Space Jam: Una nueva era.
         </Card.Text>
      </Card.Body>
    </Card>
</div>
<div className="img_3"  >
<Card id='Card'>
     <div className="div-car"  >  <Card.Img id='img' variant='top' src={imagen3}/> </div>
      <Card.Body>
        <Card.Title className='titulo'>Spiderman</Card.Title>
        <Card.Text className="txt-card" > Tom Holland, Zendaya y Benedict Cumberbatch estelarizan la
                  versión extendida y más divertida de esta aventura donde
                  Spider-Man se enfrenta a sus mayores enemigos luego de que el
                  Dr. Strange abre, sin querer, una grieta en el Multiverso.
         </Card.Text>
      </Card.Body>
    </Card>
</div>
<div className="img_4"  >
<Card id='Card'>
     <div className="div-car" >  <Card.Img id='img' variant='top' src={imagen4}/> </div>
      <Card.Body>
        <Card.Title className='titulo'>Venom</Card.Title>
        <Card.Text className="txt-card" >  Tom Hardy y Woody Harrelson interpretan a Eddie Brock y Cletus
                  Kasady en una batalla mortal junto a sus simbiontes Venom y
                  Carnage.
         </Card.Text>
      </Card.Body>
    </Card>
</div>

<div className="img_5"  >
<Card id='Card'>
      <div className="div-car" ><Card.Img id='img' variant='top' src={imagen5}/> </div> 
      <Card.Body>
        <Card.Title className='titulo'>Super mascotas</Card.Title>
        <Card.Text className="txt-card" >   Krypto debe convencer a un grupo diverso, un sabueso, un
                  cerdo, una tortuga y una ardilla, de que dominen sus nuevos
                  poderes y lo ayuden a rescatar a la Liga de la Justicia.
         </Card.Text>
      </Card.Body>
    </Card>
</div>


</div>


<p className="footer-title">GRACIAS POR VISITAR NUESTRA PAGINA!!!</p>


  </body>
  );
}

export default CardPelis;
