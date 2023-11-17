import React from 'react';
import Tarea from './Tarea';
import { List } from '@mui/material';

function ListaTareas({ tareas, eliminarTarea, editarTarea, toggleCompletada, orden }) {
  const tareasOrdenadas = tareas.sort((a, b) => {
    const factor = orden === 'asc' ? 1 : -1;
    return factor * (a.fechaCreacion - b.fechaCreacion);
  });

  return (
    <List>
      {tareasOrdenadas.map((tarea, index) => (
        <Tarea
          key={index}
          tarea={tarea.texto}
          completada={tarea.completada}
          onDelete={() => eliminarTarea(index)}
          onEdit={(nuevoTexto) => editarTarea(index, nuevoTexto)}
          onToggleCompletada={() => toggleCompletada(index)}
          fechaCreacion={tarea.fechaCreacion}
        />
      ))}
    </List>
  );
}

export default ListaTareas;
