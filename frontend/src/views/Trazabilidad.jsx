import { useEffect, useState } from 'react'
import { formatFechaTecnica } from '@utils/formatFecha'

export default function Trazabilidad() {
    const [lotes, setLotes] = useState([])

    useEffect(() => {
        // Simulación de datos (puedes reemplazar con fetch a tu backend)
        const datosSimulados = [
            {
                id: 'LQ-001',
                especie: 'Cedro',
                origen: 'Ucayali',
                fechaIngreso: '2025-11-12T08:30:00Z',
                estado: 'Procesado',
            },
            {
                id: 'LQ-002',
                especie: 'Caoba',
                origen: 'Madre de Dios',
                fechaIngreso: '2025-11-13T10:15:00Z',
                estado: 'En tránsito',
            },
        ]
        setLotes(datosSimulados)
    }, [])

    return (
        <section className="p-6 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-sky-900 mb-4">🔍 Trazabilidad de Lotes</h2>
            <p className="mb-6 text-slate-700">
                Visualiza el estado, origen y especie de cada lote ingresado al sistema.
            </p>

            <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-sky-900 text-white">
                    <tr>
                        <th className="px-4 py-2 text-left">ID</th>
                        <th className="px-4 py-2 text-left">Especie</th>
                        <th className="px-4 py-2 text-left">Origen</th>
                        <th className="px-4 py-2 text-left">Ingreso</th>
                        <th className="px-4 py-2 text-left">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {lotes.map((lote) => (
                        <tr key={lote.id} className="border-b hover:bg-slate-50">
                            <td className="px-4 py-2">{lote.id}</td>
                            <td className="px-4 py-2">{lote.especie}</td>
                            <td className="px-4 py-2">{lote.origen}</td>
                            <td className="px-4 py-2">{formatFechaTecnica(lote.fechaIngreso)}</td>
                            <td className="px-4 py-2">{lote.estado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}