export default function Header() {
    return (
        <header className="bg-sky-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">
                    Quantawood
                </h1>
                <nav className="space-x-6 text-sm font-medium">
                    <a href="/" className="hover:text-amber-300 transition">Inicio</a>
                    <a href="/inventario" className="hover:text-amber-300 transition">Inventario</a>
                    <a href="/trazabilidad" className="hover:text-amber-300 transition">Trazabilidad</a>
                    <a href="/reportes" className="hover:text-amber-300 transition">Reportes</a>
                </nav>
            </div>
        </header>
    )
}