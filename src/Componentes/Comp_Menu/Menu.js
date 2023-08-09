import Button from 'react-bootstrap/Button';
import { useEffect , useState} from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';




function PeliculasEstreno({peliculas, estaDisponible}){
  return estaDisponible ? <li className='pelis'>{peliculas} - Esta disponible!</li> : <li>{peliculas} - Proximamente!</li>
}

function SeriesEstreno({series, estaDisponible}){
  return estaDisponible ? <li className='series'>{series} - Esta disponible!</li> : <li>{series} - Proximamente!</li>
}

function Menu() {

  const [fontSize, setFontSize] = useState("");
  const handleClickSize = () => {setFontSize ("20px")}


  useEffect(()=>{
    document.getElementById('caja_menu1').style.fontSize=fontSize;
    document.getElementById('caja_menu2').style.fontSize=fontSize;
},[fontSize])


  return (
    <>
      <div className='grid-layout-menu'>
          <div className='cajamenu' id='caja_menu1'>
            <div className='divprueba'>
              <h6>Series </h6>
            </div>
            <ul className='lista_menu'>
              <SeriesEstreno estaDisponible={true} series={"Arcane"}/>
              <SeriesEstreno estaDisponible={true} series={"Bronca"}/>
              <SeriesEstreno estaDisponible={true} series={"Vicenzo"}/>
              <SeriesEstreno estaDisponible={true} series={"Lucifer"}/>
              <SeriesEstreno estaDisponible={true} series={"Con la soga en el cuello"}/> 
              <SeriesEstreno estaDisponible={true} series={"The Witcher"}/> 
              <SeriesEstreno estaDisponible={false} series={"Peaky Blinders"}/> 
            </ul>
          </div>
          <div className='cajamenu' id='caja_menu2'>
            <div className='divprueba'>
              <h6>Peliculas</h6>
            </div>
              <ul className='lista_menu'>
              <PeliculasEstreno estaDisponible={true} peliculas={"Black Adam"}/>
              <PeliculasEstreno estaDisponible={true} peliculas={"Space Jam"}/>
              <PeliculasEstreno estaDisponible={true} peliculas={"Spiderman"}/>
              <PeliculasEstreno estaDisponible={true} peliculas={"Venom"}/>
              <PeliculasEstreno estaDisponible={true} peliculas={"Super Mascotas"}/> 
              <PeliculasEstreno estaDisponible={false} peliculas={"Hulk"}/> 
              <PeliculasEstreno estaDisponible={false} peliculas={"Un Sueño Posible"}/> 
              </ul>
          </div>
      </div>
      <Button variant="primary" size="lg" className='btn_menu' onClick={handleClickSize}>
        Cambiar tamaño de la fuente
      </Button>
      <Link to='/rick-and-morty'><Button variant="primary" size="lg" className='btn_menu'>Rick and Morty info</Button></Link>
    </>
  );
}

export default Menu;