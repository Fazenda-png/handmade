import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from './pages/Main/Main';
import Home from './pages/Home/home'
import Adicionar from './pages/Adcionar/Adicionar'


function App() {

  const RotaPrivadas = ({ component: Component }) => {
    return <Route
      render={(props => {
        let isAuthenticated = sessionStorage.getItem("uuid")
        if (isAuthenticated) {
          return <Component {...props} />
        } else {
          return <Redirect to={{ pathname: "/" }} />
        }
      })}

    />
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Main} />
          <RotaPrivadas path="/home" component={Home} />
          <RotaPrivadas path="/adicionar" component={Adicionar} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;