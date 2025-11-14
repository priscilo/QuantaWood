import Card from '@/components/Card'

export default function SolucionesIndustria() {
    return (
        <section className="p-6 space-y-10 bg-gradient-to-b from-white to-emerald-50">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-emerald-800">🌲 Soluciones para la industria maderera</h2>
                <p className="text-gray-600 mt-2 max-w-xl mx-auto">
                    Desde el cálculo de volumen hasta el control de inventario, Quantawood ofrece herramientas visuales, auditables y listas para escalar.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card
                    icon="🧮"
                    title="Análisis de volumen"
                    description="Calcula automáticamente el volumen de madera procesada por lote, con respaldo visual y trazabilidad técnica."
                />
                <Card
                    icon="📦"
                    title="Inventario activo"
                    description="Visualiza el estado actual de los lotes en tiempo real, con alertas, filtros y trazabilidad."
                />
                <Card
                    icon="📍"
                    title="Trazabilidad geográfica"
                    description="Sigue cada lote desde el bosque hasta el cliente final, con mapas interactivos y auditoría completa."
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card
                    icon="📊"
                    title="Reportes inteligentes"
                    description="Exporta informes técnicos en PDF, Excel o JSON. Compatible con normativas locales e internacionales."
                />
                <Card
                    icon="🧾"
                    title="Facturación electrónica"
                    description="Integración con SUNAT y AFIP. Emite comprobantes desde el lote hasta la entrega."
                />
                <Card
                    icon="🌐"
                    title="Interfaz multilingüe"
                    description="Diseñada para equipos multiculturales. Soporte para español, inglés y portugués con accesibilidad visual."
                />
            </div>
        </section>
    )
}