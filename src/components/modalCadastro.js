import React, { useState } from 'react';
import { Button, Grid, TextField, Paper } from '@material-ui/core';
import db from '../services/firebaseConfig'

export default function ModalCadastro() {

    const [cadastroNome, setCadastroNome] = useState("")
    const [cadastroEmail, setCadastroEmail] = useState("")
    const [cadastroSenha, setCadastroSenha] = useState("")
    const [cadastroCidade, setCadastroCidade] = useState("")

    const Cadastro = () => {

        db.collection("usuario").set({
            nome: cadastroNome,
            cidade: cadastroCidade,
            email: cadastroEmail,
            senha: cadastroSenha
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }



    return (
        <Grid container spacing={1}>
            <Grid item sm={12} xs={12}>
                <h1 style={{ textAlign: "center", color: "#8b0e33" }}>Cadastro</h1>
                <Paper elevation={0}>
                    <TextField
                        label="Nome"
                        variant="outlined"
                        size="small"
                        type="name"
                        id="nomeCadastro"
                        value={cadastroNome}
                        onChange={(e) => setCadastroNome(e.target.value)}
                        style={{ width: "100%", marginBottom: 10 }} />
                    <TextField
                        label="E-mail"
                        variant="outlined"
                        size="small"
                        type="email"
                        id="emailCadastro"
                        value={cadastroEmail}
                        onChange={(e) => setCadastroEmail(e.target.value)}
                        style={{ width: "100%", marginBottom: 10 }} />
                    <TextField
                        label="Cidade"
                        variant="outlined"
                        size="small"
                        type="email"
                        id="cidadeCadastro"
                        value={cadastroCidade}
                        onChange={(e) => setCadastroCidade(e.target.value)}
                        style={{ width: "100%", marginBottom: 10 }} />
                    <TextField
                        value={cadastroSenha}
                        onChange={(e) => setCadastroSenha(e.target.value)}
                        label="Senha"
                        id="senhaCadastro"
                        variant="outlined"
                        type="password"
                        size="small"
                        style={{ width: "100%", marginBottom: 10 }}
                    />
                    <TextField
                        label="Confirme sua senha"
                        variant="outlined"
                        type="password"
                        size="small"
                        style={{ width: "100%", marginBottom: 10 }}
                    />
                    <Button
                        onClick={Cadastro}
                        variant="outlined"
                        style={{ width: "100%", color: "#8b0e33", border: "solid 1px #8b0e33" }}>
                        Entrar
                                </Button>
                </Paper>
            </Grid>
        </Grid>
    );
}