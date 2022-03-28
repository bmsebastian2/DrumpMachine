import * as React from 'react';
import Box from '@mui/material/Box';

const GridTemplateColumns = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
      }}
    >
      {children}
    </Box>
  );
};

export default GridTemplateColumns;
