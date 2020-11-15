import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Home from './pages/Home/Home'
import Perfil from './pages/Perfil/Perfil'

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Main} />
        <Route path="/Home" exact={true} component={Home} />
        <Route path="/Perfil" exact={true} component={Perfil} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;