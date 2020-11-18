import { Container } from '@material-ui/core';
import React from 'react';
import Menu from '../../components/Menu'
import Registro from '../../components/RegistroItem'


export default function adicionar() {
  return (
    <div>
      <Container>
        <Menu></Menu>
        <Registro></Registro>
      </Container>
    </div>
  );
}