import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';
import { Container, Typography } from '@mui/material';

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState('Todas');
  const [orden, setOrden] = useState('asc');

  const agregarTarea = (texto) => {
    setTareas([...tareas, { texto, completada: false, fechaCreacion: new Date() }]);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoTexto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  const cambiarOrden = () => {
    setOrden(orden === 'asc' ? 'desc' : 'asc');
  };

  let tareasFiltradas = tareas;
  if (filtro === 'Pendientes') {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === 'Completadas') {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }

  return (
    <Container>
      <Typography variant="h3">Lista de Tareas</Typography>
      <TareaForm agregarTarea={agregarTarea} />
      <Filtros filtrarTareas={filtrarTareas} cambiarOrden={cambiarOrden} orden={orden} />
      <ListaTareas
        tareas={tareasFiltradas}
        eliminarTarea={eliminarTarea}
        editarTarea={editarTarea}
        toggleCompletada={toggleCompletada}
        orden={orden}
      />
    </Container>
  );
}

export default App;
