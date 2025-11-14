export default function CardSolucion({ icon, nombre, descripcion, enlaces = [] }) {
    return (
        <div className="bg-white border rounded-lg p-4 shadow hover:shadow-md transition">
            <div className="text-3xl mb-2">{icon}</div>
            <h3 className="text-lg font-semibold">{nombre}</h3>
            <p className="text-sm text-gray-700 mb-2">{descripcion}</p>
            <ul className="text-sm text-blue-600 list-disc pl-4">
                {enlaces.map((link, i) => (
                    <li key={i}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}