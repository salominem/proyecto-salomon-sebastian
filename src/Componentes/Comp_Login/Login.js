import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'

export function Login() {

  const [usuario, setUsuario] = useState({
    email:'',
    password: '',
  });

  const {login} = useAuth() 
  const navigate = useNavigate()
  const [error, setError] = useState();

  const handleChange = ({target: {name, value}}) => {
    setUsuario({...usuario, [name]: value})
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    setError('')
    try{
     await login(usuario.email, usuario.password)
      navigate('/home')
    }catch(error) {
      setError(error.message);
    }
  }

  return (

<body className='body_login' >
<div className="cabecera-registro" >
<div className="error-class"> {error && <p>{error}</p> } </div>
</div>
<div className="Contenedor">
 
      <form className="form_iniciar" onSubmit={handleSubmit}>
      <h1 className="titulo_1" >Login</h1>  
      <label className="title_label" >Email: </label>
      <input className="input_style"  type="email" name="email" placeholder="Correo electronico"
      onChange={handleChange}
      />
      <label className="title_label">Contraseña: </label>
      <input className="input_style" type="password" name="password" placeholder="******" 
      onChange={handleChange}
      />
      <button className="btn_iniciar" >Iniciar Sesión</button>
      <p>¿Todavia no tienes cuenta? <Link to='/registro' >¡Registrate ya!</Link> </p>
      </form>

</div>
</body>
    
  )
}

