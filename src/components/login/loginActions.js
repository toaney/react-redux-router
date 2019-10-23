import axios from 'axios';

export const setLogin = (num) => {

    return axios({
        url: `https://web-api-ashu.staging.brilliant.tech/ramjet/users/${num}`,
        method: 'get',
        responseType: 'json'
    })
    .then((res, dispatch) => {
        let status = 'OK';
        // let result = res
        let result = res.data || 'Error getting data';

        dispatch({
            type: 'SET_LOGIN',
            isLoggedIn: true
        });

        return {
            status: status,
            result: result
        };
    })
    .catch((err) => {
        let status = 'ERROR';
        let result = err.message;
        return {
            status: status,
            result: result
        };
    });

};

export const setLogout = () => ({
    type: 'SET_LOGOUT',
    isLoggedIn: false 
});