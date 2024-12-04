import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

    const ProtectedRoute = ({ element }) => {
    const {isAuthenticated} = useAuth();

    if(isAuthenticated){
        //alert('Sesion iniciada...');
    }

    return isAuthenticated ? element : <Navigate to ="/loginpage"/>;
}

export default ProtectedRoute;