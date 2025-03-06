import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import ProductScreen from './screens/ProductScreen';
import UserScreen from './screens/UserScreen';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/product/:uuid" component={ProductScreen} />
        <Route path="/user/:id" component={UserScreen} />
      </Switch>
    </Router>
  );
};

export default App;
