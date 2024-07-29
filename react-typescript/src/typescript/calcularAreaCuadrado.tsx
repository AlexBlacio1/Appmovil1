import React from 'react';

const CalcularAreaCuadrado: React.FC = () => {

  const lado = 20;
  const area = lado * lado;

  return (
    <div>
      <h5>El área del cuadrado con lado {lado} es:</h5>
      <div>{area}</div>
    </div>
  );
};

export default CalcularAreaCuadrado