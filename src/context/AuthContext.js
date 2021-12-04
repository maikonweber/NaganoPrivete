import { createContext, useEffect, useState, useContext} from 'react';
import { signinRequest } from '../services/auth';
import {setCookie} from 'nookies';
import Router from 'next/router';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const isAuthenticated = !!user;
    useEffect(() => {
        if (isAuthenticated) {
            Router.push('/');
        }

    const [user, setUser] = useState<User || null>(null);
    async function login(email, password) {
     const { token, user }  =  await signinRequest({
            email,
            password, 
     });
       setCookie(undefined, 'naganoToken', token, {
           maxAge: 60 * 60 * 60 * 60,
       });

       setUser(user);
       Router.push('/dashboard');
    }

    return (
        <AuthContext.Provider value={user ,isAuthenticated, login}>
            {children}
        </AuthContext.Provider>
    );
}