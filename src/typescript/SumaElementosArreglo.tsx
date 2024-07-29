import React from 'react';

const SumaElementosArreglo: React.FC = () => {
    const elementos = [24, 2, 123, 12, 5, 6];
    const suma = elementos.reduce((acc, val) => acc + val, 0);

    return <div><h5>La suma de los elementos del arreglo es:</h5> {suma}</div>;
};

export default SumaElementosArreglo;