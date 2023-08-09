import imagen1 from '../Recursos/BigBang.jpg'
import imagen2 from '../Recursos/Posible.jpg'
import { Card  } from 'react-bootstrap';
import '../Comp_Card/CardSeries.css';


function CardSeries() {
  return (
      
     <div>
      <Card id='Card'>
       <Card.Img id='img' variant='top' src={imagen1}/> 
      <Card.Body>
        <Card.Title className='titulo'>Acerca de: </Card.Title>
        <Card.Text>
          <p className='title_lateral' >Esta exitosa serie, sigue a dos mejores amigos que podrían explicarte todo sobre física cuántica, pero cuando se trata del mundo real, se pierden en el cosmos.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
     
      <Card id='Card'>
       <Card.Img id='img' variant='top' src={imagen2}/> 
      <Card.Body>
        <Card.Title className='titulo'>Acerca de: </Card.Title>
        <Card.Text>
          <p className='title_lateral' >Cuando Michael conoce a Leigh Anne Tuohy encuentra un hogar, y los Tuohys descubren algo que les cambiará la vida: un adorable y nuevo hermano e hijo.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
        </div> 
  )
}

export default CardSeries;