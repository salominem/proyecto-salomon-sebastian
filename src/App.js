import {Routes, Route} from 'react-router-dom';
import Home from './Componentes/Home';
import { Login } from './Componentes/Comp_Login/Login';
import { Registro } from './Componentes/Comp_Registro/Registro';
import { AuthProvider } from './Context/AuthContext';
import AxioRick from './Componentes/Comp_AxiosRick/AxiosRick';
import CardPelis from './Componentes/Comp_CardPelis/CardPelis';
import Series from './Componentes/Comp_Series/Series';
import Nosotros from './Componentes/Comp_Nosotros/Nosotros';
import Soporte from './Componentes/Comp_Soporte/Soporte';




function App() {
  return (
    <AuthProvider>
    <Routes>
          <Route path='/home' element={<Home/>}/>  
          <Route path='/' element={<Login/>}/> 
          <Route path='/registro' element={<Registro/>} />
          <Route path='/rick-and-morty' element={<AxioRick/>}/> 
          <Route path='/card-pelis' element={<CardPelis/>}/>
          <Route path='/series' element={<Series/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/soporte' element={<Soporte/>}/>
          <Route path="*" element={<h1> ERORR 404!!!!</h1>}></Route>
   </Routes>
    </AuthProvider>
  )


}

export default App