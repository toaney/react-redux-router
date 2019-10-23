// import axios from 'axios';

// set initial state
const INITIAL_STATE = {
    isLoggedIn: false,
    userName: ''
}

// state we are editing and with what action
const loginReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_LOGIN': 

            // const getUser = (input) => {

            //     get_user(input).then((api_response) => {
            //         return(api_response.given_name);
            //     //     setPokemonName(api_response.result.forms[0].name);
            //     //     setPokemonNumber(addLeadingZeros(api_response.result.id))
            //     })
            // }
        
            // const get_user = (num) => {
            //     return axios({
            //         url: `https://web-api-ashu.staging.brilliant.tech/ramjet/users/${num}`,
            //         method: 'get',
            //         responseType: 'json'
            //     })
            //     .then((res) => {
            //         let status = 'OK';
            //         // let result = res
            //         let result = res.data || 'Error getting pokemon';
            //         return {
            //             status: status,
            //             result: result
            //         };
            //     })
            //     .catch((err) => {
            //         let status = 'ERROR';
            //         let result = err.message;
            //         return {
            //             status: status,
            //             result: result
            //         };
            //     });
            // };

            // let user = getUser(123455);

            return{
                ...state,
                isLoggedIn: action.isLoggedIn
                // userName: action.userName
                // getUser(123455)
            }
        case 'SET_LOGOUT': 
            return{
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        default: 
            return state
    }
}

// export reducer
export default loginReducer;