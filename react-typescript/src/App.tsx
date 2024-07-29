import React from 'react';
import CalcularAreaCuadrado from './typescript/calcularAreaCuadrado';
import SumaElementosArreglo from './typescript/SumaElementosArreglo';
import ArregloDividido from './typescript/ArregloDividido';
import PromedioCalificaciones from './typescript/PromedioCalificaciones';
import Acumulador from './typescript/Acumulador';

const App: React.FC = () => {
  return (
    <div>
      <h1>Aplicaciónes Móviles I</h1>
      <h2>Actividad en contacto con el docente </h2>
      <h3>Ejercicios Typescript - React</h3>
      <br /><br />
      <CalcularAreaCuadrado />
      <hr />
      <SumaElementosArreglo />
      <hr />
      <ArregloDividido />
      <hr />
      <PromedioCalificaciones />
      <hr />
      <Acumulador />
      <hr />
    </div>
  );
};

export default App;