import React from 'react';
import './App.css';
import HomePage from './containers/homepage/homepage.container';
import ShopPage from './containers/shop/shop.container';
import Header from './components/header/header.components';
import SignInAndSignUp from './containers/sign-in-and-sign-up/sign-in-and-sign-up.container';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUp} />
      
      </Switch>
    </div>
  );
}

export default App;
