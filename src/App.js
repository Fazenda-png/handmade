import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/Main/Main'
import Login from './pages/Login/login'
// import Firebase from './services/firebaseConnect'

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Main} />
        <Route path="/login"  component={Login} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;