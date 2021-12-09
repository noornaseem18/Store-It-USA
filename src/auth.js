import {setCookie , getCookie, deleteCookie} from './cookies';
import {setlocalStorage , getlocalStorage, deletelocalStorage} from './localstorage';

export const setAuthentication = (token, user) => {
    setCookie('token', token);
    setlocalStorage('user', user);
};

export const isAuthenticated = () => {
    if (getCookie('token') && getlocalStorage('user'))
    {
        return getlocalStorage('user');
    } else 
    {
        return false;
    };  
};

export const logout = (next) => {
    deleteCookie('token');
    deletelocalStorage('user');
    next();
};