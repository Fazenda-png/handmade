import React, { useState, useLayoutEffect } from 'react';
import { Button, Grid, TextField, Paper, Tabs, Tab, AppBar, Typography, Box, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Firebase from '../services/firebaseConnect'
import ModalCadastro from './ModalCadastro'
import { useHistory } from "react-router-dom";


function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box span={2}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const useStyled = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    }
}));


export default function SimpleModal() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const history = useHistory();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [lembrar, setLembrar] = useState(false)

    useLayoutEffect(() => {
        let emailStorage = localStorage.getItem('email')
        let passwordStorage = localStorage.getItem('password')
        if (emailStorage && passwordStorage) {
            setEmail(emailStorage)
            setPassword(passwordStorage)
            setLembrar(true)
        }
    }, [])



    const login = () => {


        if (lembrar == false) {
            localStorage.removeItem("email")
            localStorage.removeItem("password")
        }

        Firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((retorno) => {
                sessionStorage.setItem("uuid", retorno.user.uid)
                if (lembrar === true) {
                    localStorage.setItem("email", email)
                    localStorage.setItem("password", password)
                }
                setMensagem("")
                history.push("/home");

            })
            .catch((erro) => {
                console.log(erro)
                setMensagem("Usuário ou senha inválidos!")
            })
    }
    

    const classed = useStyled();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div className={classed.root}>
                <AppBar position="static" style={{ width: "100%", backgroundColor: "#8b0e33" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                    >
                        <Tab style={{ minWidth: "200px" }} label="Entrar" />
                        <Tab style={{ minWidth: "200px" }} label="Cadastro" />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>

                    <Grid container spacing={1}>
                        <Grid item sm={12} xs={12}>
                            <h1 style={{ textAlign: "center", color: "#8b0e33" }}>Entrar</h1>
                            <Paper elevation={0}>
                                <TextField
                                    label="E-mail"
                                    variant="outlined"
                                    size="small"
                                    type="email"
                                    id="emailLogin"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{ width: "100%", marginBottom: 10 }} />
                                <TextField
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    label="Senha"
                                    variant="outlined"
                                    type="password"
                                    id="senhaLogin"
                                    size="small"
                                    style={{ width: "100%", marginBottom: 10 }}
                                />
                                <Checkbox
                                    checked={lembrar}
                                    onChange={(e) => setLembrar(e.target.checked)}
                                />Lembre-me
                                <Grid item  sm={12} xs={12} style={{ color: "#8b0e33", textAlign: "center", margin: "0 15px 15px" }}>{mensagem}</Grid>
                                <Button
                                    onClick={login}
                                    variant="outlined"
                                    style={{ width: "100%", color: "#8b0e33", border: "solid 1px #8b0e33" }}>
                                    Entrar
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ModalCadastro></ModalCadastro>
                </TabPanel>
            </div>
        </div>
    );



    return (
        <div>
            <Button
                variant="outlined"
                style={{ width: "100%", color: "#8b0e33", border: "solid 1px #8b0e33" }}
                onClick={handleOpen}
            >
                Entrar
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

