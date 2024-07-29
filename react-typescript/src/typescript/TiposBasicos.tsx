

export const TiposBasicos = () => {
    const nombre: string = 'Alex';
    const edad: number = 25;
    const donanteOrganos: boolean = false;
    const poderes: string[] = ['fuerza', 'volar', 'invisibilidad'];
    poderes.push('velocidad');
    return (
        <div>
            <h3>Tipos Básicos</h3>
            {nombre}, {edad}, {donanteOrganos ? 'Donante' : 'No Donante'}
            <br />
            {poderes.join(' - ')}
        </div>
    )
}
