import React, { Component } from 'react';
import { Button, Grid, Paper, Container } from '@material-ui/core';
import Logo from '../images/logo.png'

export default class components extends Component {
    render() {
        return (
            <div>
                <Container maxWidth="xl" style={{ background: "#f5000082" }}>
                    <Grid container spacing={1} style={{ padding: "15px" }}>
                        <Grid item sm={11} xs={12}>
                            <img src={Logo} alt="Logo" style={{ width: "10%", padding: "10px"}} />
                        </Grid>
                        <Grid item sm={1} xs={12} style={{justifyContent: "center", display: "flex", alignItems: "center"}}>
                            <Paper elevation={0}>
                                <Button
                                    variant="outlined"
                                    href="/login"
                                    style={{ width: "100%" , color: "#8b0e33", border: "solid 1px #8b0e33" }}>
                                    Entrar
                            </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}