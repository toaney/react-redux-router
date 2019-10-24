export const setLogin = () => ({
    type: 'SET_LOGIN',
    isLoggedIn: true
});

export const setLogout = () => ({
    type: 'SET_LOGOUT',
    isLoggedIn: false 
});