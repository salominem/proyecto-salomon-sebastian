import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import './Contador.css';



function ContadorLikes(){
    const [count1, setCount1]=useState(0)
    const [count2, setCount2]=useState(0)
    const handleClick = () => {setCount1 (count1 + 1)}
    const handleClick2 = () => {setCount2 (count2 + 1)}
    const [backgroundColor, setBackgroundColor] = useState("black");
    const handleClickColor = () => {setBackgroundColor ("purple")}
   
    useEffect(()=>{
        document.getElementById('bloque1').style.backgroundColor=backgroundColor;
        document.getElementById('bloque2').style.backgroundColor=backgroundColor;
        document.getElementById('bloque3').style.backgroundColor=backgroundColor;
    },[backgroundColor])
   
    const [count3, setCount3]=useState(0)
    const handleClick3 = () => {setCount3 (count3 + 1)}
    const esPar = count3 % 2 === 0;
    

    return(
        <>
        <div className="grid-layout-likes">
            <div id="bloque1" className="bloque">
                <p className="Top">Me gustas: {count1} </p>
                <p className="Top">No me gustas: {count2} </p>
                <Button variant="primary" onClick={handleClick}>Me gusta 👍</Button>
                <Button variant="danger" onClick={handleClick2}>No me gusta 👎</Button>   
            </div>
            <div id="bloque2" className="bloque">
               
                <Button id='btnColor' variant="warning" onClick={handleClickColor}>Cambiar de color</Button>
            </div>
            <div id="bloque3" className="bloque">
                <div className="div_par">{esPar ? <p>El número {count3} es par.</p> : <p>El número {count3} es impar.</p>}</div>
                <Button id='btnPar' variant="success" onClick={handleClick3}>Par o Impar</Button>{' '}
            </div>
        </div>   
        </>
    )
}
export default ContadorLikes;