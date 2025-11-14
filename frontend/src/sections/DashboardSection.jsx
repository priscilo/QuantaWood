// src/pages/Dashboard.jsx
import CardVolumen from '@/components/cards/CardVolumen'
import CardInventario from '@/components/cards/CardInventario'
import CardTrazabilidad from '@/components/cards/CardTrazabilidad'

export default function Dashboard() {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <CardVolumen />
            <CardInventario />
            <CardTrazabilidad />
        </section>
    )
} <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    <div className="bg-white border rounded-lg p-4 shadow hover:shadow-md transition">
        <div className="text-3xl mb-2">🧮</div>
        <h3 className="text-lg font-semibold">Análisis de volumen</h3>
        <p className="text-sm text-gray-700">
            Calcula automáticamente el volumen de madera procesada por lote.
        </p>
    </div>

    <div className="bg-white border rounded-lg p-4 shadow hover:shadow-md transition">
        <div className="text-3xl mb-2">📦</div>
        <h3 className="text-lg font-semibold">Inventario activo</h3>
        <p className="text-sm text-gray-700">
            Visualiza el estado actual de los lotes en tiempo real.
        </p>
    </div>
</section>