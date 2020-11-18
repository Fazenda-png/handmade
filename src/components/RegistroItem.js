import React, { useState } from 'react';
import { Grid, Paper, Select } from '@material-ui/core';
import Ferramentas from '../Screens/Ferramenta'
import Cozinha from '../Screens/Cozinha'
import Jardim from '../Screens/Jardim'


export default function RegistroItem() {

    const [screen, setScreen] = useState(0)

    return (
        <Grid container spacing={1}>
            <Grid item sm={12} xs={12}>
                <h1 style={{ textAlign: "center", color: "#8b0e33" }}>Cadastre um pedido</h1>

                <Select
                >
                    <option aria-label="None" value="" />
                    <option onClick={() => setScreen(0)} >Cozinha</option>
                    <option onClick={() => setScreen(1)} >Ferramentas</option>
                    <option onClick={() => setScreen(2)} >Jardin</option>
                </Select>

                <Paper>
                    {screen == 0 &&

                        <Cozinha></Cozinha>
                    }
                    {screen == 1 &&

                        <Ferramentas></Ferramentas>
                    }
                    {screen == 2 &&

                        <Jardim></Jardim>
                    }
                </Paper>
            </Grid>
        </Grid>
    );
}