import React from 'react';
const Title = () => {
  return (
    <div
      style={{
        // border: '1px solid yellow',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <h2>Teclas Músicales!</h2>
      <p>
        by : (
        <strong style={{ color: 'orange ' }}>
          Sebastian Benitez Mandirola
        </strong>
        )
      </p>
    </div>
  );
};

export default Title;
