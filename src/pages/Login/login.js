import React from 'react'
import { Button, Grid, Paper, Container} from '@material-ui/core';


function login() {


    return (
        <div>
            <Container fixed>
                <Grid container spacing={1}>
                    <Grid item sm={11} xs={12}>

                    </Grid>
                    <Grid item sm={1} xs={12} >
                        <Paper elevation={0}>
                            <Button
                                onClick={login}
                                variant="outlined"
                                color="primary"
                                style={{ width: "100%" }}>
                                Entrar
            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default login;