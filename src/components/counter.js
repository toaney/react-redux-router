import React from 'react';
// import axios from 'axios';

const Counter = () => {
    const [ user, setUser ] = React.useState('123455');
    const [ userInput, setUserInput ] = React.useState('');


    // const getUser = (input) => {
    //     get_user(input).then((api_response) => {
    //         setUser(api_response.result.given_name)
    //     })
    //  }
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

    // React.useEffect(() => {
    //     let userName = getUser(123455);
    //     console.log(userName);
    //     setUser(userName)
    // }, [])

    // const updateUser = () => {

    // }

    return(
        <div className="counter-page">
            <h2>Profile</h2>
            <p>{user}</p>
            <p>{userInput}</p>
            <input value={userInput} 
                onChange={(e) => setUserInput(e.target.value)}
            />
        </div>
    )
}

export default Counter;