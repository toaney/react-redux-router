import React from 'react';
import './scss/styles.scss';
import Nav from './components/nav.js';
import { Route, Switch } from 'react-router-dom';
import Counter from './components/counter.js';
import Home from './components/home.js';

function App() {
  return (
    <React.Fragment>
      <Nav />

      <Switch>
        <Route path="/counter" component={Counter} />
        <Route path="/" component={Home}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
