import React, { useState } from 'react';
import Firebase from '../services/firebaseConnect'

export default function Screens() {

    const [itemEm, setItemEm] = useState("")
    const [itemQuan, setItemQuan] = useState("")
    const [nomePessoa, setNomePessoa] = useState("")
    const [aptoPessoa, setAptoPessoa] = useState("")
    const [mensagem, setMensagem] = useState("")

    const limpar = () => {
        setItemEm("")
        setItemQuan("")
        setNomePessoa("")
        setAptoPessoa("")
    }


    const CadastroItem = () => {

        const utensilio = {
            nome_pessoa: nomePessoa,
            apto_pessoa: aptoPessoa,
            nome: itemEm,
            quantidade: itemQuan,
        }

        Firebase
            .database()
            .ref('pedidos')
            .push(utensilio)
            .then(() => {
                console.log("pedido salvo")
                setMensagem("O utensilio desponibilizado por qualquer modador tem até 7 dias para ser devolvido")
                limpar()
            })
            .catch((erro) => {
                console.log("erro seu merda")
            })
    }


 return (
   <div>
cc
   </div>
 );
}