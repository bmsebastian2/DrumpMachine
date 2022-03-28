import React, { useRef } from 'react';
import { trackList, reprStack, buscarUrl } from '../function/track';
import B from '@mui/material/Button';

const Button = ({ arrayInput, setDisplay }) => {
  return (
    <>
      {trackList.map((element, item) => (
        <B
          style={{
            boxShadow: 'inset 0px -3px 7px 0px #29bbff',
            background: 'linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%)',
            backgroundColor: '#2dabf9',
            borderRadius: '3px',
            border: '1px solid #0b0e07',
            display: 'inline-block',
            cursor: 'pointer',
            color: `yellow`,
            fontFamily: 'Arial',
            fontSize: '15px',
            padding: '9px 23px',
            textDecoration: 'none',
            textShadow: '0px 1px 0px #263666',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          ref={arrayInput[item]}
          key={element.id}
          id={element.id}
          onClick={() => {
            reprStack(buscarUrl(element.id));
            setDisplay(element.name);
          }}
        >
          {element.descripcion}
        </B>
      ))}
    </>
  );
};

export default Button;
