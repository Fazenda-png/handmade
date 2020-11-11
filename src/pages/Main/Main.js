import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, Grid, Paper } from '@material-ui/core';
import Mapa from '../../images/mapa3.png'
import {Title, SubTitle} from './styled'

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
                                Como funciona:
                            </SubTitle>
                            <p>A intensão do site é ser o mais intuitivo o possivel para os vendedores e para seus clientes. Basecamente o vendedor ira realizar o seu cadastro e apresentar um "Cardapio" onde seu cliente ira poder ter acesso e realizar a encomenda dos produtos via WhatsApp</p>
                            <SubTitle>
                                Para que é:
                            </SubTitle>
                            <p>Este site é indicado para você que trabalha sobre encomenda de produtos e que expandir suas vendas conseguindo fazer o gerenciamento pelo mesmo e tendo contado dos seus clientes no seu celular.</p>

                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper elevation={0}>
                            <img style={{width: "710px"}} alt="Imagem ilustrativa MAPA" src={Mapa}></img>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
}

export default Main;