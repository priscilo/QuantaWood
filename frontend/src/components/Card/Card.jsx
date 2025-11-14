const translations = {
    'Análisis de volumen': {
        en: 'Volume Analysis',
        es: 'Análisis de volumen',
    },
    'Inventario activo': {
        en: 'Active Inventory',
        es: 'Inventario activo',
    },
    'Calcula automáticamente el volumen de madera procesada por lote.': {
        en: 'Automatically calculates the volume of processed wood per batch.',
        es: 'Calcula automáticamente el volumen de madera procesada por lote.',
    },
    'Visualiza el estado actual de los lotes en tiempo real.': {
        en: 'Displays the current status of batches in real time.',
        es: 'Visualiza el estado actual de los lotes en tiempo real.',
    },
}

export default function Card({ icon, title, description, lang = 'es', className = '' }) {
    const translatedTitle = translations[title]?.[lang] || title
    const translatedDescription = translations[description]?.[lang] || description

    return (
        <div
            className={`bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300 text-left ${className}`}
            role="region"
            aria-label={translatedTitle}
        >
            <div className="flex items-center gap-3 text-emerald-700 mb-2">
                <span className="text-3xl" aria-hidden="true">{icon}</span>
                <h3 className="text-lg font-semibold">{translatedTitle}</h3>
            </div>
            <p className="text-sm text-gray-600">{translatedDescription}</p>
        </div>
    )
}