import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App.jsx';
import HomePage from './HomePage.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import succes from './assets/success.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/order" component={App} />
      <Route path="/success" component={succes} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
