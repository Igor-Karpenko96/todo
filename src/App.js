import React from 'react';
import TodoWrapper from './components/TodoWrapper.jsx';
import LoginPage from './components/LoginPage/LoginPage.jsx';
import ResetPage from './components/ResetPage/ResetPage.jsx';
import RegistrationPage from './components/RegistrationPage/RegistrationPage.jsx';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={TodoWrapper} />
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/reset" component={ResetPage} />
          <Route exact path="/register  " component={RegistrationPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
