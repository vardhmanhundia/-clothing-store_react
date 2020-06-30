import React from 'react';
import './App.css';
import HomePage from './containers/homepage/homepage.container';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route exact path='/' component={HomePage} /> */}
      </Switch>
    </div>
  );
}

export default App;
