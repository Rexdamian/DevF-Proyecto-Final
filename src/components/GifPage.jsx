import React from 'react';

const GifPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#121212' }}>
      <img 
        src="https://media1.tenor.com/m/q5BICsyoDnQAAAAd/gato-fiesta.gif" 
        alt="GIF Example" 
        style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: '10px' }} 
      />
    </div>
  );
};

export default GifPage