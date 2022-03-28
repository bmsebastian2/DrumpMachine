import React from 'react';
import Box from '@mui/material/Box';
import ButtonCustom from '../element/Button.jsx';

const CrearButton = ({ arrayInput, setDisplay }) => {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
      <ButtonCustom arrayInput={arrayInput} setDisplay={setDisplay} />
    </Box>
  );
};

export default CrearButton;
