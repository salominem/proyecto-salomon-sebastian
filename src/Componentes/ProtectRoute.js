import { useAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";


export function ProtectRoute({children}) {
  const {usuario, loading} = useAuth()
  
if (loading) return <h1>loading</h1>

if (!usuario) return <Navigate to='/login'/>

return <>{children}</>

}