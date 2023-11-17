import React, { useState } from 'react';
import { ListItem, Checkbox, Button, Typography, TextField } from '@mui/material';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada, fechaCreacion }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <ListItem>
      <div>
        <Checkbox checked={completada} onChange={onToggleCompletada} />
        <Typography>{tarea}</Typography>
        {fechaCreacion && <Typography variant="caption"> - {fechaCreacion.toLocaleString()}</Typography>}
      </div>
      {isEditing ? (
        <>
          <TextField
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <Button onClick={handleSaveClick} variant="contained" color="secondary">Guardar</Button>
        </>
      ) : (
        <>
          <Button onClick={onDelete} variant="contained" color="error">Eliminar</Button>
          <Button onClick={handleEditClick} variant="contained" color="info">Editar</Button>
        </>
      )}
    </ListItem>
  );
}

export default Tarea;
