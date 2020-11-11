import React, { Component } from 'react';
import {  Grid, Paper, Container } from '@material-ui/core';
import Logo from '../images/logo.png'
import Modal from './Modal'

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
                            <Modal></Modal>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}