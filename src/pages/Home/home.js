import React, { useLayoutEffect, useState } from "react";
import {
  Button,
  Grid,
  Paper,
  TableCell,
  TableRow,
  Container,
  TableContainer,
  Table,
  TableBody,
  TableHead,
} from "@material-ui/core";
import Firebase from "../../Services/FirebaseConnect";
import Menu from "../../components/Menu";
import Fundo from "../../components/Fundo";

function Home(props) {
  const [lista, setLista] = useState([]);

  useLayoutEffect(() => {
    Firebase.database()
      .ref(`pedidos`)
      .on('value', (snapchot) => {
        // converter objetos em listas
        if (snapchot.val()) {
          let dados = snapchot.val();
          const keys = Object.keys(dados);
          const lista = keys.map((key) => {
            return { ...dados[key], id: key };
          });
          setLista(lista);
        } else {
          setLista([]);
        }
      });
  }, []);


  const Empre = (item) => {
    const empre = {
      estado: "Emprestado",
    };

    Firebase.database()
      .ref(`pedidos`)
      .on("value", (snapchot) => {
        const saida = snapchot.val();
        const chave = Object.keys(saida);
        const pedi = chave.map((key) => {
          return { ...saida[key], id: key };
        });
        Firebase.database()
          .ref(`pedidos/${item.id}`)
          .update(empre)
          .then((retorno) => {
          })
          .catch((erro) => { });
      });
  };


  return (
    <div>
      <Fundo></Fundo>
      <Menu></Menu>
      <Container>
        <Grid container spacing={1} style={{ padding: "100px" }}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell align="right">Apartamento</TableCell>
                  <TableCell align="right">Item</TableCell>
                  <TableCell align="right">Tipo do item</TableCell>
                  <TableCell align="right">Quantidade</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {lista.map((item, key) => {
                  return (
                    <TableRow key={key} style={{ width: "100%" }}>
                      <TableCell component="th" scope="row">
                        {item.nome_pessoa}
                      </TableCell>
                      <TableCell align="right">{item.apto_pessoa}</TableCell>
                      <TableCell align="right">{item.nome}</TableCell>
                      <TableCell align="right">{item.tipo}</TableCell>
                      <TableCell align="right">{item.quantidade}</TableCell>
                      <TableCell align="right">{item.estado}</TableCell>
                      <TableCell><Button 
                        onClick={() => Empre(item)}
                      >Emprestar</Button></TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
