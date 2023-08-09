import { Link } from "react-router-dom";
import Menu from "./Comp_Menu/Menu";
import ContadorLikes from "./Comp_likes/ContadorLikes";
import './Home.css'
import { Button, Card } from "react-bootstrap";
import CardSeries from "./Comp_Card/CardSeries";
import imagen1 from '../Componentes/Recursos/mslogoinicio.jpg'


 
export function Home() {


  return (
    <body className="body_principal">
   
    <div className="grid-layout-principal">

      <div className="caja1" >
      <div className="logo-inicio-logo">
         <Card>
      <Card.Img  id='img' variant='top' src={imagen1}/> 
        </Card>
    </div>
      <ul className='ul_titulo1'>
        <b> <li className='btn_titulo_10'> <Link to='/'> <Button className='btn_titulo' variant="info">Cerrar Sesión</Button></Link></li> </b>      
      </ul>   
      </div>
      <div className="caja2" >
      <div className="link-div">
             <Link to='/card-pelis'> <Button className='btn_link1' variant="info">Peliculas</Button></Link>
             </div>
            <div className="link-div">
             <Link to='/series'> <Button className='btn_link1' variant="info">Series</Button></Link>
             </div>
             <div className="link-div">
             <Link to='/nosotros'> <Button className='btn_link1' variant="info">Nosotros</Button></Link>
             </div>
             <div className="link-div">
             <Link to='/soporte'> <Button className='btn_link1' variant="info">Soporte</Button></Link>
             </div>
             
      </div>
      <div className="caja3" >
      <Menu></Menu>
      </div>
      <div className="caja4" >
      <CardSeries></CardSeries>  
      </div>
      <div className="caja5">
      <ContadorLikes></ContadorLikes>
      </div>
    
    </div>
    </body>
  )
}

export default Home