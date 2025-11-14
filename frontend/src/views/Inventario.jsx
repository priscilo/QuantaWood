import React, { useEffect, useState } from 'react';
import { obtenerLotes } from '../api/lotes';

export default function Inventario() {
    const [lotes, setLotes] = useState([]);

    useEffect(() => {
        obtenerLotes().then(setLotes);
    }, []);

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Inventario de Lotes</h2>
            <ul>
                {lotes.map((lote) => (
                    <li key={lote.id}>
                        {lote.nombre} – {lote.volumen} m³
                    </li>
                ))}
            </ul>
        </div>
    );
}