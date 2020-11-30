import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, Grid, Paper } from '@material-ui/core';
import { Title, SubTitle } from './styled'

function Main() {


    return (
        <div>
            <Header />
            <Container>
                <Grid container spacing={3} style={{ alignItems: "center", display: "flex" }}>
                    <Grid item xs={6} >
                        <Paper elevation={0} style={{ textAlign: "center" }}>

                            <Title>
                                Handmade
                            </Title>
                            <SubTitle>
                                Para que é:
                            </SubTitle>
                            <p>O intuito do projeto é ser utilizado por grandes condominos e edifícil para que seus moradores possam emprestar utensilios uns aos outros sem nenhum problema e sempre dentro da regra estabelecida. Proximo semestre a versão Mobile hehe</p>
                            <SubTitle>
                                Como funciona:
                            </SubTitle>
                            <p>O condominio/edifícil será cadastrado e poderá ser acessado por qualquer morador, o mesmo pode fazer o cadastro de um pedido onde outros moradores poderão acompanhar e conseguir ver em tempo real o pedido e realizar o emprestimo.</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <SubTitle>
                            Nome: João Pedro Fazenda dos Santos
                        </SubTitle>
                        <SubTitle>
                            email: 1117210@imed.edu.br
                        </SubTitle>
                        <SubTitle>
                            R.A: 1117210
                        </SubTitle>
                        <SubTitle>
                            Github: (colocar em casa)
                        </SubTitle>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
}

export default Main;