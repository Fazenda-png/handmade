import React, { useState } from 'react';
import { Button, Grid, TextField, Paper } from '@material-ui/core';
import Firebase from '../Services/FirebaseConnect'
import { useHistory } from "react-router-dom";


export default function ModalCadastro() {

    const [cadastroEmail, setCadastroEmail] = useState("")
    const [cadastroSenha, setCadastroSenha] = useState("")

    const history = useHistory()

    const Cadastro = () => {
        Firebase
            .auth()
            .createUserWithEmailAndPassword(cadastroEmail, cadastroSenha)
            .then(() => {
                history.push("/home")
            }).catch(
            )
    }

    return (
        <Grid container spacing={1}>
            <Grid item sm={12} xs={12}>
                <h1 style={{ textAlign: "center", color: "#8b0e33" }}>Cadastro</h1>
                <Paper elevation={0}>
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
                        value={cadastroSenha}
                        onChange={(e) => setCadastroSenha(e.target.value)}
                        label="Senha"
                        id="senhaCadastro"
                        variant="outlined"
                        type="password"
                        size="small"
                        style={{ width: "100%", marginBottom: 10 }}
                    />
                    <Button
                        onClick={() => Cadastro()}
                        variant="outlined"
                        style={{ width: "100%", color: "#8b0e33", border: "solid 1px #8b0e33" }}>
                        Entrar
                                </Button>
                </Paper>
            </Grid>
        </Grid>
    );
}