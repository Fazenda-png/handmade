import React, { useState, useLayoutEffect } from 'react'

import {
  Button,
  Grid,
  Paper,
  MenuList,
  MenuItem,
  Container
}
  from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from "react-router-dom";
import Firebase from '../../Services/FirebaseConnect'
import Home from '../../Screens_princ/home'
import Adicionar from '../../Screens_princ/Adicionar'
import Contato from '../../Screens_princ/Contato'
import Pedidos from '../../Screens_princ/Pedidos'
import Fundo from '../../components/Fundo'

export default function Menu() {
  const email = localStorage.getItem('email');

  const history = useHistory();

  const [screen, setScreen] = useState(0)

  const logoff = () => {
    sessionStorage.removeItem("uuid")
    Firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      }).catch(() => {
        history.push("/");
      })
  }

  return (
    <div>
      <Fundo></Fundo>
      <Grid >
        <Grid item sm={12} xs={12} style={{ background: "#f5000082" }}>
          <Grid item sm={12} xs={12} >
            <Paper style={{ padding: "20px", display: "flex", borderRadius: "0px" }}>
              <MenuList style={{ display: "flex", alignItems: "center" }}>
                <p>Bem vindo(a) {email} ao Handmade</p>
              </MenuList>
              <MenuList style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0", }}>
                <MenuItem onClick={() => setScreen(0)}>Home</MenuItem>
                <MenuItem onClick={() => setScreen(1)}>Adicionar</MenuItem>
                <MenuItem onClick={() => setScreen(2)}>Contato</MenuItem>
                <MenuItem onClick={() => setScreen(3)}>Pedidos</MenuItem>
                <MenuItem>
                  <Button
                    onClick={logoff}
                    variant="contained"
                    style={{ background: "#f5000082" }}
                    startIcon={<ExitToAppIcon />}>
                    Logoff
                    </Button>
                </MenuItem>
              </MenuList>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Container style={{ marginTop: "40px" }}>
        <Grid item sm={12} xs={12}>
          <Paper style={{background: "transparent", boxShadow: "none"}}>
            {screen == 0 &&
              <Home setScreen={setScreen} />
            }
            {screen == 1 &&
              <Adicionar setScreen={setScreen} />
            }
            {screen == 2 &&
              <Contato setScreen={setScreen} />
            }
            {screen == 3 &&
              <Pedidos setScreen={setScreen} />
            }
          </Paper>
        </Grid>
      </Container>
    </div >
  )
}