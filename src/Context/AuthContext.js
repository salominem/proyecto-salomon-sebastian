import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

 
export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('no hay auth provider')
    return context 
}

export function AuthProvider ({children}) {

    const [usuario, setUsuario] = useState('')
    const [loading, setLoading] = useState(true)   

    const signup = (email,password) =>  createUserWithEmailAndPassword(auth,email,password);

    const login = async (email,password) =>  signInWithEmailAndPassword(auth,email,password);

    const logout = () => signOut(auth)
       
    useEffect(()=> {
        onAuthStateChanged(auth, currentUsuario =>{
            setUsuario(currentUsuario);
            setLoading(false); 
        } );
    }, [] )
  
    return(
        <authContext.Provider value={{ signup, login, usuario, logout, loading }} >
            {children}
        </authContext.Provider>
    )
}