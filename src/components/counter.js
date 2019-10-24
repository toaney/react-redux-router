import React from 'react';

const Counter = () => {
    const [ user ] = React.useState('123455');
    const [ userInput, setUserInput ] = React.useState('');

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