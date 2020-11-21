import React, { useLayoutEffect, useState } from 'react'
import { Grid, Paper, CardContent, TableRow, Container } from '@material-ui/core';
import Firebase from '../../services/firebaseConnect'
import Menu from '../../components/Menu'



function Home(props) {

    const [lista, setLista] = useState([])

    useLayoutEffect(() => {


        Firebase
            .database()
            .ref("pedidos")
            .on('value', snapchot => {
                // converter objetos em listas
                let dados = snapchot.val()
                const keys = Object.keys(dados)
                const lista = keys.map((key) => {
                    return { ...dados[key], id: key }
                })
                setLista(lista)
                console.log(lista)
            })

    }, [])

    return (
        <div>
            <Menu></Menu>
            <Container>
                <Grid container spacing={1} style={{padding: "100px"}}>
                    <Grid item sm={12} xs={12}>
                        {lista.map((item, key) => {
                            return <CardContent key={key}>
                                <TableCell component="th" scope="row">
                                    {item.nome_pessoa}
                                </TableCell>
                                <TableCell align="right">{item.apto_pessoa}</TableCell>
                                <TableCell align="right">{item.nome}</TableCell>
                                <TableCell align="right">{item.tipo}</TableCell>
                                <TableCell align="right">{item.quantidade}</TableCell>
                            </CardContent>
                        }
                        )}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Home;