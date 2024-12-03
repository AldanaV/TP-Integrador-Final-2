//Gestiona toda la app
import React, {createContext, useState, useContext} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ Children}) => { //envuelve la app, se van a poder definir las sesiones que necesitan esta autentificacion
    const [isAuthenticaded, setIsAuthenticaded] = useState(() => {
        return localStorage.getItem('isAuthenticaded') === 'true';
    });

    const login = () => {
        setIsAuthenticaded(true);
        localStorage.setItem('isAuthenticaded', 'true');
    };

    const logout = () => {
        setIsAuthenticaded(false);
        localStorage.removeItem('isAuthenticaded'); 
    }
    return(
        <AuthContext.Provider value = {{ isAuthenticaded, login, logout}}>
        {Children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);