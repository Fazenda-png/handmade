import React, { useState } from "react";
import { Button, Grid, TextField, Paper } from "@material-ui/core";
import Firebase from "../Services/FirebaseConnect";
import { v4 as uuidv4 } from "uuid";

export default function Screens() {
  const [itemEm, setItemEm] = useState("");
  const [itemQuan, setItemQuan] = useState("");
  const [nomePessoa, setNomePessoa] = useState("");
  const [aptoPessoa, setAptoPessoa] = useState("");
  const [tipoItem, setTipoItem] = useState("Cozinha");
  const [estado, setEstado] = useState("Disponivel");
  const [mensagem, setMensagem] = useState("");
  const [aptoEmpre, setAptoEmpre] = useState("");
  const [nomeEmpre, setnomeEmpre] = useState("");

  const limpar = () => {
    setItemEm("");
    setItemQuan("");
    setNomePessoa("");
    setAptoPessoa("");
  };

  const CadastroItem = () => {
    const utensilio = {
      nome_pessoa: nomePessoa,
      apto_pessoa: aptoPessoa,
      nome: itemEm,
      tipo: tipoItem,
      estado: estado,
      quantidade: itemQuan,
      nome_emprest: nomeEmpre,
      apto_emprest: aptoEmpre,
    };

    const code = uuidv4();

    Firebase.database()
      .ref(`pedidos/${code}`)
      .set(utensilio)
      .then(() => {
        console.log("pedido salvo");
        setMensagem(
          "*O utensilio desponibilizado por qualquer modador tem até 7 dias para ser devolvido"
        );
        limpar();
      })
      .catch((erro) => {
        console.log("erro seu merda");
      });
  };

  return (
    <div style={{ padding: "50px 100px" }}>
      <h1 style={{ textAlign: "center", color: "#8b0e33" }}>Adicionar item</h1>
      <Paper elevation={0}>
        <TextField
          label="Nome do item"
          variant="outlined"
          size="small"
          type="text"
          id="nomeCadastro"
          value={itemEm}
          onChange={(e) => setItemEm(e.target.value)}
          style={{ width: "100%", marginBottom: "10px"}}
        />
        <TextField
          label="Quantidade (Kg, g)"
          variant="outlined"
          size="small"
          type="text"
          id="quantidadeCadastro"
          value={itemQuan}
          onChange={(e) => setItemQuan(e.target.value)}
          style={{ width: "100%", marginBottom: "10px"}}
        />
        <TextField
          label="Nome do morador"
          variant="outlined"
          size="small"
          type="text"
          id="nomeMoradorCadastro"
          value={nomePessoa}
          onChange={(e) => setNomePessoa(e.target.value)}
          style={{ width: "100%", marginBottom: "10px"}}
        />
        <TextField
          label="Número do apartamento"
          variant="outlined"
          size="small"
          type="text"
          id="aptoNumCadastro"
          value={aptoPessoa}
          onChange={(e) => setAptoPessoa(e.target.value)}
          style={{ width: "100%", marginBottom: "10px"}}
        />
        <TextField
          label="Tipo do utensilio"
          variant="outlined"
          size="small"
          type="text"
          id="tipoUteCadastro"
          value={tipoItem}
          disabled
          onChange={(e) => setTipoItem(e.target.value)}
          style={{ width: "100%", marginBottom: "10px"}}
        />
        <Grid item sm={12} xs={12} style={{ textAlign: "center", marginBottom: "10px" }}>
          {mensagem}
        </Grid>
        <Button
          onClick={CadastroItem}
          variant="outlined"
          style={{
            width: "100%",
            color: "#8b0e33",
            border: "solid 1px #8b0e33",
          }}
        >
          Enviar
        </Button>
      </Paper>
    </div>
  );
}
