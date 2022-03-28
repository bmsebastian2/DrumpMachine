import React, { useEffect, useState, useRef } from 'react';
import './style.css';
import Box from './element/Box.jsx';
import CrearButton from './components/CrearButton.jsx';
import Title from './element/Title.jsx';
import { reprStack, buscarUrlLetra } from './function/track';

const App = () => {
  const inputEl = useRef(null);
  const inputE2 = useRef(null);
  const inputE3 = useRef(null);
  const inputE4 = useRef(null);
  const inputE5 = useRef(null);
  const inputE6 = useRef(null);
  const inputE7 = useRef(null);
  const inputE8 = useRef(null);
  const inputE9 = useRef(null);

  const arrayInput = [
    inputEl,
    inputE2,
    inputE3,
    inputE4,
    inputE5,
    inputE6,
    inputE7,
    inputE8,
    inputE9,
  ];
  const [display, setDisplay] = useState('Presiona ahora');

  const changeColor = (element) => {
    element.current.style.color = 'red';
    element.current.style.textWidth = '2rem';
    setTimeout(() => {
      element.current.style.color = 'yellow';
    }, 200);
  };

  const imprime = (e) => {
    let trackBuscado = buscarUrlLetra(e.key);

    if (trackBuscado !== undefined) {
      reprStack(trackBuscado.url);
      setDisplay(trackBuscado.name);
      switch (e.key) {
        case 'q':
          changeColor(arrayInput[0]);
          return;

        case 'w':
          changeColor(arrayInput[1]);
          return;
        case 'e':
          changeColor(arrayInput[2]);
          return;
        case 'a':
          changeColor(arrayInput[3]);
          return;
        case 's':
          changeColor(arrayInput[4]);
          return;

        case 'd':
          changeColor(arrayInput[5]);
          return;
        case 'z':
          changeColor(arrayInput[6]);
          return;

        case 'x':
          changeColor(arrayInput[7]);
          return;
        case 'c':
          changeColor(arrayInput[8]);
          return;
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', imprime);
  }, []);

  return (
    <div className="main">
      <div
        style={{
          borderRadius: '2rem',
          backgroundColor: 'rgb(52, 73, 94)',
          color: 'white',
          padding: '3rem',
          minHeight: '50vh',
          width: '75%',
          maxWidth: '600px',
          display: 'grid',
          gridTemplateRows: '25% 75%',
        }}
      >
        <Title />

        <Box>
          <CrearButton arrayInput={arrayInput} setDisplay={setDisplay} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <h3>{display}</h3>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default App;
