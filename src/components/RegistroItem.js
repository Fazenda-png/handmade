import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import Ferramentas from '../Screens/Ferramenta'
import Cozinha from '../Screens/Cozinha'
import Jardim from '../Screens/Jardim'
import Outros from '../Screens/Outros'


export default function RegistroItem() {

    const [screen, setScreen] = useState(0)

    return (
        <div>
            <Grid container spacing={1} style={{ padding: " 0 30px" }}>
                <Grid item sm={12} xs={12} >
                    <Grid item sm={12} xs={12} style={{ marginBottom: "25px" }}>

                        <h3 style={{ textAlign: "left", color: "#8b0e33", paddingTop: "55px" }}>Selecione o tipo do item emprestado:</h3>
                        <Button variant="contained" style={{ backgroundColor: "#8b0e33", color: "#ffffff", alignItems: "center", margin: "0 5px 0 5px" }} onClick={() => setScreen(0)}>
                            Cozinha
                    </Button>
                        <Button variant="contained" style={{ backgroundColor: "#8b0e33", color: "#ffffff", alignItems: "center", margin: "0 5px 0 5px" }} onClick={() => setScreen(1)}>
                            Jardim
                    </Button>
                        <Button variant="contained" style={{ backgroundColor: "#8b0e33", color: "#ffffff", alignItems: "center", margin: "0 5px 0 5px" }} onClick={() => setScreen(2)}>
                            Ferramenta
                    </Button>
                        <Button variant="contained" style={{ backgroundColor: "#8b0e33", color: "#ffffff", alignItems: "center", margin: "0 5px 0 5px" }} onClick={() => setScreen(3)}>
                            Outros
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
            <div>
                {screen == 0 &&

                    <Cozinha></Cozinha>
                }
                {screen == 1 &&

                    <Jardim></Jardim>
                }
                {screen == 2 &&

                    <Ferramentas></Ferramentas>
                }
                {screen == 3 &&

                    <Outros></Outros>
                }
            </div>
        </div>
    );
}