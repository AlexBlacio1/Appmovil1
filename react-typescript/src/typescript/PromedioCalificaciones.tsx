import React from 'react';

interface Alumno {
    nombre: string;
    edad: number;
    calificacion: number;
}

const alumnos: Alumno[] = [
    {
        nombre: 'Viviana',
        edad: 19,
        calificacion: 10
    },


    {
        nombre: 'Wendy',
        edad: 20,
        calificacion: 8
    },

    {
        nombre: 'Gerson',
        edad: 18,
        calificacion: 9
    },
];

const PromedioCalificaciones: React.FC = () => {
    const promedio = alumnos.reduce((acc, alumno) => acc + alumno.calificacion, 0) / alumnos.length;
    return <div>
        <h5>El promedio de calificaciones es:</h5> {promedio}
    </div>;
};

export default PromedioCalificaciones;