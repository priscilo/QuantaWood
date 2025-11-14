/**
 * Formatea una fecha en formato legible multicultural.
 * Ejemplo: "2025-11-14T07:09:00Z" → "14 de noviembre de 2025"
 */

export function formatFechaISO(isoString, locale = 'es-PE', opciones = {}) {
    const fecha = new Date(isoString)

    const config = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        ...opciones,
    }

    return fecha.toLocaleDateString(locale, config)
}

/**
 * Formato defensivo para trazabilidad técnica.
 * Ejemplo: "2025-11-14T07:09:00Z" → "2025-11-14 07:09"
 */
export function formatFechaTecnica(isoString) {
    const fecha = new Date(isoString)
    const yyyy = fecha.getFullYear()
    const mm = String(fecha.getMonth() + 1).padStart(2, '0')
    const dd = String(fecha.getDate()).padStart(2, '0')
    const hh = String(fecha.getHours()).padStart(2, '0')
    const min = String(fecha.getMinutes()).padStart(2, '0')

    return `${yyyy}-${mm}-${dd} ${hh}:${min}`
}