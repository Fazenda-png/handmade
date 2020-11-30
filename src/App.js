import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from './pages/Main/Main';
import Home from './pages/Home/home'
// import Adicionar from './pages/Adcionar/Adicionar'
// import Pedidos from './pages/Pedidos/Pedidos'
// import Contato from './pages/Contato/Contato'

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
          {/* <RotaPrivadas path="/adicionar" component={Adicionar} />
          <RotaPrivadas path="/pedidos" component={Pedidos} />
          <RotaPrivadas path="/contato" component={Contato} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;