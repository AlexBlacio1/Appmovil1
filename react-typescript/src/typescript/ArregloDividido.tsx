import React from 'react';

const arregloOriginal = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const ArregloDividido: React.FC = () => {
    const arregloDividido = arregloOriginal.map(valor => valor / 5);

    return (
        <div>
            <h4>Valores divididos por 5</h4>
            <br />
            Arreglo Original = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50,]
            <br /><br />
            <ul>
                {arregloDividido.map((valor, index) => (
                    <li key={index}>Valor dividido: {valor}</li>
                ))}
            </ul>
        </div>
    );
};

export default ArregloDividido;