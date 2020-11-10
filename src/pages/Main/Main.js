import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, Grid, Paper } from '@material-ui/core';

function Main() {


    return (
        <div>
            <Header />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper elevation={0}>kkkk</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper elevation={0}>kkkk</Paper>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
}

export default Main;