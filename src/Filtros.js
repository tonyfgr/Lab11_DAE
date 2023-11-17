import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

function Filtros({ filtrarTareas, cambiarOrden, orden }) {
  return (
    <ButtonGroup>
      <Button onClick={() => filtrarTareas('Todas')}>Todas</Button>
      <Button onClick={() => filtrarTareas('Pendientes')}>Pendientes</Button>
      <Button onClick={() => filtrarTareas('Completadas')}>Completadas</Button>
      <Button onClick={cambiarOrden}>
        Cambiar Orden ({orden === 'asc' ? 'Ascendente' : 'Descendente'})
      </Button>
    </ButtonGroup>
  );
}

export default Filtros;


