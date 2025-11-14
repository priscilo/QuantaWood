# 🧭 Guía Visual de Onboarding Frontend

Esta guía está diseñada para facilitar el onboarding técnico y visual de nuevos desarrolladores en el proyecto **Quantawood Frontend**. Incluye rutas clave, convenciones visuales, ejemplos de componentes y scripts defensivos.

---

## 📁 Estructura de Carpetas Clave

| Alias         | Ruta física          | Uso principal                          |
| ------------- | -------------------- | -------------------------------------- |
| `@components` | `src/components/`    | Componentes reutilizables              |
| `@sections`   | `src/sections/`      | Secciones específicas de páginas       |
| `@pages`      | `src/pages/`         | Rutas principales                      |
| `@styles`     | `src/assets/styles/` | Variables SCSS, resets, mixins         |
| `@visual`     | `src/assets/visual/` | Íconos, imágenes, SVGs                 |
| `@hooks`      | `src/hooks/`         | Custom hooks                           |
| `@context`    | `src/context/`       | Contextos globales (Auth, Theme, etc.) |

---

## 🎨 Tokens Visuales

Los tokens visuales permiten mantener consistencia multicultural en los estados visuales.

| Estado      | Clase CSS               | Ejemplo visual                    |
| ----------- | ----------------------- | --------------------------------- |
| Primario    | `visual-token--primary` | ![primary](../visual/primary.svg) |
| Éxito       | `visual-token--success` | ![success](../visual/success.svg) |
| Advertencia | `visual-token--warning` | ![warning](../visual/warning.svg) |
| Error       | `visual-token--danger`  | ![danger](../visual/danger.svg)   |

---

## 🧪 Scripts Defensivos

| Script                | Comando             | Propósito                                      |
| --------------------- | ------------------- | ---------------------------------------------- |
| Validación de entorno | `npm run check-env` | Verifica variables críticas (`VITE_API_URL`)   |
| Formato de código     | `npm run format`    | Aplica Prettier a todo el código fuente        |
| Generación de docs    | `npm run docs`      | Genera documentación automática por componente |

---

## 🧩 Ejemplo de Componente Documentado

📁 `src/components/VisualToken/`


📄 `README.md` incluye:
- Props documentadas
- Tabla de variantes visuales
- Ejemplo de uso con íconos

---

## 🧠 Buenas prácticas visuales

- Usa `@styles/theme.scss` para importar variables globales.
- Documenta cada componente con `README.md` y `preview.png`.
- Prefiere `@apply` de Tailwind para consistencia visual.
- Usa `@visual` para íconos y assets compartidos.

---

## 🚀 Primeros pasos

```bash
npm install
npm run check-env
npm run dev
