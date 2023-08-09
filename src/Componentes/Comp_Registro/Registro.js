import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import './Registro.css'

export function Registro() {


  const [usuario, setUsuario] = useState({
    email:'',
    password: '',
  });

  const {signup} = useAuth() 
  const navigate = useNavigate()
  const [error, setError] = useState();
  

  const handleChange = ({target: {name, value}}) => {
    setUsuario({...usuario, [name]: value})
  }

  const handleSubmit = async e =>{
    e.preventDefault()
   
    try{
     await signup(usuario.email, usuario.password)
      navigate('/')
    }catch(error) {
      setError(error.message);
    }
  }

  return (

<body className='body_registro' >
<div className="cabecera-registro" >
<div className="error-class"> {error && <p>{error}</p> } </div>
</div>
<div className="contenedor_registro" >


      <form className="form_iniciar1" onSubmit={handleSubmit}>
      
      <h1 className="titulo_registro" >Registrarse</h1> 
      <label className="name_label" >Email</label>
      <input className="input_style1" type="email" name="email" placeholder="correo electronico"
      onChange={handleChange}
      />
      <label className="name_label" >Contraseña</label>
      <input className="input_style1" type="password" name="password" placeholder="******" 
      onChange={handleChange}
      />

        <button className="btn_registrar" >Registrar</button>
        <p>¿Ya tienes cuenta? <Link to='/' >¡Ir a Iniciar Sesión!</Link> </p>
    </form>
</div>

</body>
  )
}

