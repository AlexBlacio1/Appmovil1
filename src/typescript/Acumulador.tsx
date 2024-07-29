import React, { useState } from 'react';

const Acumulador: React.FC = () => {
    const [contador, setContador] = useState<number>(5);

    return (
        <div>
            <h1>Valor: {contador}</h1>
            <button onClick={() => setContador(contador + 5)}>Incrementar</button>
            <button onClick={() => setContador(contador - 5)}>Disminuir</button>
        </div>
    );
};

export default Acumulador;
