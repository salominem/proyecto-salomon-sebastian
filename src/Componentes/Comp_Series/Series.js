import imagen1 from '../Recursos/arcane.jpg';
import imagen2 from '../Recursos/bronca.jpg';
import imagen3 from '../Recursos/vicenzo.jpg';
import imagen4 from '../Recursos/lucifer.jpg';
import imagen5 from '../Recursos/soga.jpg';
import imagen6 from '../Recursos/thewitcher.jpg';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Titulos from '../Comp_Titulo/Titulo';





function Series() {

    let SeriesTitulo = "SERIES DISPONIBLES";

  return (
       <body className="body-total">
        <div>
          
        <li className='li_titulo'><Titulos titleS={SeriesTitulo}/></li>
        <p className='btn-volver-pelis' > <Link to='/home'> Volver al menu principal</Link> </p> 

          </div>

<div className="contenedor_padre">       
<div className="img_1" >
     <Card id='Card'>
     <div className="div-car" > <Card.Img id='img' variant='top' src={imagen1}/> </div> 
      <Card.Body>
        <Card.Title className='titulo'>Arcane</Card.Title>
        <Card.Text className="txt-card" > Mientras la discordia separa las ciudades gemelas de Piltóver y Zaun, dos hermanas se enfrentan en una guerra feroz entre tecnologías mágicas y convicciones opuestas..
         </Card.Text>
      </Card.Body>
    </Card>
</div>
<div className="img_2"  >
<Card id='Card'>
     <div className="div-car"  > <Card.Img  id='img' variant='top' src={imagen2}/> </div> 
      <Card.Body>
        <Card.Title className='titulo'>Bronca</Card.Title>
        <Card.Text className="txt-card" > Un contratista fracasado y una empresaria descontenta se enfrentan en un incidente de furia al volante que se sale de control y saca lo peor de ellos.
         </Card.Text>
      </Card.Body>
    </Card>
</div>
<div className="img_3"  >
<Card id='Card'>
     <div className="div-car"  >  <Card.Img id='img' variant='top' src={imagen3}/> </div>
      <Card.Body>
        <Card.Title className='titulo'>Vicenzo</Card.Title>
        <Card.Text className="txt-card" > Durante una visita a su patria, un abogado de la mafia coreanoitaliano le da a un conglomerado inexpugnable una cucharada de su propia medicina con extracto de justicia.
         </Card.Text>
      </Card.Body>
    </Card>
</div>
<div className="img_4"  >
<Card id='Card'>
     <div className="div-car" >  <Card.Img id='img' variant='top' src={imagen4}/> </div>
      <Card.Body>
        <Card.Title className='titulo'>Lucifer</Card.Title>
        <Card.Text className="txt-card" >  Impaciente por ser de utilidad, Lucifer ayuda a una irritada Carol a investigar la muerte de una dragqueen. Ella y Chloe examinan los misteriosos antecedentes de Carol.
         </Card.Text>
      </Card.Body>
    </Card>
</div>

<div className="img_5"  >
<Card id='Card'>
      <div className="div-car" ><Card.Img id='img' variant='top' src={imagen5}/> </div> 
      <Card.Body>
        <Card.Title className='titulo'>Con la soga en el cuello</Card.Title>
        <Card.Text className="txt-card" >   Para evitar un escándalo, una pareja de Estambul se muda a un pueblo costero para volver a empezar. Pero pronto descubren que sus habitantes no los quieren allí..
         </Card.Text>
      </Card.Body>
    </Card>
</div>

<div className="img_5"  >
<Card id='Card'>
      <div className="div-car" ><Card.Img id='img' variant='top' src={imagen6}/> </div> 
      <Card.Body>
        <Card.Title className='titulo'>The Witcher</Card.Title>
        <Card.Text className="txt-card" > Monstruos de carne. Patinaje sobre hielo. Peleas. Sumérgete en las historias, las estrellas y las acrobacias de la temporada 3 de «The Witcher».
         </Card.Text>
      </Card.Body>
    </Card>
</div>


</div>


<p className="footer-title">GRACIAS POR VISITAR NUESTRA PAGINA!!!</p>


  </body>
  );
}

export default Series;
