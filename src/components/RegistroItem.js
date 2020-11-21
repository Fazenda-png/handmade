import React, { useState } from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import Ferramentas from '../Screens/Ferramenta'
import Cozinha from '../Screens/Cozinha'
import Jardim from '../Screens/Jardim'
import Outros from '../Screens/Outros'


export default function RegistroItem() {

    const [screen, setScreen] = useState(0)

    return (
        <Grid container spacing={1} style={{ padding: "100px" }}>
            <Grid item sm={12} xs={12}>
                <Grid item sm={12} xs={12}>
                    <h1 style={{ textAlign: "center", color: "#8b0e33" }}>Adicione um item para emprestimo</h1>

                    <h3 style={{ textAlign: "left", color: "#8b0e33" }}>Selecione o tipo do item emprestado:</h3>
                    <Button variant="contained" style={{ backgroundColor: "#8b0e33", color: "#ffffff", alignItems: "center", marginBottom: "30px", margin: "0 5px 0 5px" }} onClick={() => setScreen(0)}>
                        Cozinha
                    </Button>
                    <Button variant="contained" style={{ backgroundColor: "#8b0e33", color: "#ffffff", alignItems: "center", marginBottom: "30px", margin: "0 5px 0 5px" }} onClick={() => setScreen(1)}>
                        Jardim
                    </Button>
                    <Button variant="contained" style={{ backgroundColor: "#8b0e33", color: "#ffffff", alignItems: "center", marginBottom: "30px", margin: "0 5px 0 5px" }} onClick={() => setScreen(2)}>
                        Ferramenta
                    </Button>
                    <Button variant="contained" style={{ backgroundColor: "#8b0e33", color: "#ffffff", alignItems: "center", marginBottom: "30px", margin: "0 5px 0 5px" }} onClick={() => setScreen(3)}>
                        Outros
                    </Button>
                </Grid>
                <Paper>
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
                </Paper>
            </Grid>
        </Grid>
    );
}