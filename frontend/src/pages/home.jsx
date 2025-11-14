import React from 'react';
import { Button } from './components/Button';

export default function Home() {
    return (
        <div style={{ padding: '2rem' }}>
            <h2>Botón visible</h2>
            <Button
                text="Aceptar"
                onClick={() => alert('¡Botón funcionando!')}
            />
        </div>
    );
}