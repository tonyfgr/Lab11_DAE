import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setTexto(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (texto.trim() === '') {
      setError('La tarea no puede estar en blanco.');
      return;
    }

    if (texto.length > 50) {
      setError('La tarea es demasiado larga. Por favor, ingresa una tarea más corta.');
      return;
    }

    // Si pasa las validaciones, agregar la tarea
    agregarTarea(texto);

    // Limpiar el campo de texto
    setTexto('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        value={texto}
        onChange={handleInputChange}
        placeholder="Añadir tarea..."
      />
      <Button type="submit" variant="contained" color="primary">
        Agregar
      </Button>
      {error && <Typography style={{ color: 'red' }}>{error}</Typography>}
    </form>
  );
}

export default TareaForm;
