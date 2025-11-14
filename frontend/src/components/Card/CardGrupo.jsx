import CardSolucion from './CardSolucion'

export default function CardGrupo({ titulo, icono, soluciones }) {
    return (
        <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">{icono}</span> {titulo}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {soluciones.map((s, i) => (
                    <CardSolucion key={i} {...s} />
                ))}
            </div>
        </section>
    )
}