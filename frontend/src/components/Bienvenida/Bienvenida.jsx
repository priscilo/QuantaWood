export default function Bienvenida() {
    return (
        <section className="bg-white text-slate-800 p-6 rounded-lg shadow-md max-w-2xl mx-auto mt-10">
            <h1 className="text-3xl font-bold text-center text-sky-900 mb-4">
                Bienvenido a <span className="text-amber-700">Quantawood</span>
            </h1>
            <p className="text-lg text-center mb-6">
                Este sistema permite gestionar <strong>inventario</strong>, <strong>trazabilidad</strong> y <strong>análisis</strong> de productos madereros.
            </p>
            <ul className="space-y-3 text-base">
                <li>🔍 <strong>Seguimiento</strong> por lote y especie</li>
                <li>📦 <strong>Control de stock</strong> en tiempo real</li>
                <li>📊 <strong>Reportes visuales</strong> y exportables</li>
            </ul>
        </section>
    )
}