import { useEffect, useState } from 'react'
import { formatFechaTecnica } from '@utils/formatFecha'

export default function Reporte() {
    const [reportes, setReportes] = useState([])
    const [filtroTipo, setFiltroTipo] = useState('Todos')
    const [filtroFecha, setFiltroFecha] = useState('')

    useEffect(() => {
        const datos = [
            {
                id: 'RPT-001',
                tipo: 'Inventario',
                fecha: '2025-11-13T09:00:00Z',
                totalItems: 128,
                generadoPor: 'Priscilo Pomachagua',
            },
            {
                id: 'RPT-002',
                tipo: 'Trazabilidad',
                fecha: '2025-11-14T07:00:00Z',
                totalItems: 64,
                generadoPor: 'Priscilo Pomachagua',
            },
        ]
        setReportes(datos)
    }, [])

    const reportesFiltrados = reportes.filter((r) => {
        const coincideTipo = filtroTipo === 'Todos' || r.tipo === filtroTipo
        const coincideFecha = !filtroFecha || r.fecha.startsWith(filtroFecha)
        return coincideTipo && coincideFecha
    })

    const exportarCSV = () => {
        const encabezado = ['ID', 'Tipo', 'Fecha', 'Items', 'Generado por']
        const filas = reportesFiltrados.map((r) => [
            r.id,
            r.tipo,
            formatFechaTecnica(r.fecha),
            r.totalItems,
            r.generadoPor,
        ])
        const contenido = [encabezado, ...filas].map((fila) => fila.join(',')).join('\n')
        const blob = new Blob([contenido], { type: 'text/csv;charset=utf-8;' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'reportes_quantawood.csv')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section className="p-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-sky-900 mb-4">📊 Reportes del Sistema</h2>

            {/* Filtros visuales */}
            <div className="flex flex-wrap gap-4 mb-6">
                <select
                    value={filtroTipo}
                    onChange={(e) => setFiltroTipo(e.target.value)}
                    className="border rounded px-3 py-2"
                >
                    <option value="Todos">Todos los tipos</option>
                    <option value="Inventario">Inventario</option>
                    <option value="Trazabilidad">Trazabilidad</option>
                </select>

                <input
                    type="date"
                    value={filtroFecha}
                    onChange={(e) => setFiltroFecha(e.target.value)}
                    className="border rounded px-3 py-2"
                />

                <button
                    onClick={exportarCSV}
                    className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
                >
                    Exportar CSV
                </button>
            </div>

            {/* Tabla de reportes */}
            <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-sky-900 text-white">
                    <tr>
                        <th className="px-4 py-2 text-left">ID</th>
                        <th className="px-4 py-2 text-left">Tipo</th>
                        <th className="px-4 py-2 text-left">Fecha</th>
                        <th className="px-4 py-2 text-left">Items</th>
                        <th className="px-4 py-2 text-left">Generado por</th>
                    </tr>
                </thead>
                <tbody>
                    {reportesFiltrados.map((r) => (
                        <tr key={r.id} className="border-b hover:bg-slate-50">
                            <td className="px-4 py-2">{r.id}</td>
                            <td className="px-4 py-2">{r.tipo}</td>
                            <td className="px-4 py-2">{formatFechaTecnica(r.fecha)}</td>
                            <td className="px-4 py-2">{r.totalItems}</td>
                            <td className="px-4 py-2">{r.generadoPor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}