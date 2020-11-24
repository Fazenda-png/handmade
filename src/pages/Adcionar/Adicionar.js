import { Container } from '@material-ui/core';
import React from 'react';
import Menu from '../../components/Menu'
import Registro from '../../components/RegistroItem'
import Fundo from '../../components/Fundo'



export default function adicionar() {
  return (
    <div>
      <Fundo></Fundo>
      <Container>
        <Menu></Menu>
        <Registro></Registro>
      </Container>
    </div>
  );
}