# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
Perfecto, Priscilo. Vamos a consolidar los componentes clave del frontend de Quantawood con enfoque defensivo, modular y accesible para equipos multiculturales. Aquí tienes una propuesta estructurada con ejemplos y recomendaciones:

🧭 1.  – Navegación adaptable y multilingüe
Objetivo: Crear una barra de navegación responsiva, accesible y preparada para traducciones.
Estructura sugerida:

Ejemplo de :

Defensividad:
• 	Usa  y roles semánticos.
• 	Detecta idioma desde contexto ( o ).
• 	Fallback visual si no hay rutas disponibles.

🧱 2.  – Estructura base con slots y contexto visual
Objetivo: Unificar la presentación de páginas con encabezado, contenido y pie de página.
Estructura sugerida:

Ejemplo de :

Defensividad:
• 	Validación de  como nodo React.
• 	Fallback visual si  o  fallan.
• 	Soporte para temas visuales ().

🛡️ 3.  – Captura de errores con trazabilidad
Objetivo: Evitar que errores de renderizado rompan toda la app y mostrar mensajes claros.
Estructura sugerida:

Ejemplo básico:

Mejoras defensivas:
• 	Logs técnicos () con contexto.
• 	Mensajes localizados desde .
• 	Integración con  o sistema de trazabilidad.

🧪 4. Testing y documentación visual
Checklist por componente:
• 	✅ Pruebas unitarias con  o 
• 	✅ Capturas visuales en 
• 	✅ README por componente con props, ejemplos y flujos
Ejemplo de README para :
# Navbar

Componente de navegación adaptable. Soporta múltiples idiomas y rutas configurables.

## Props
- `language`: Idioma actual (`'en'`, `'es'`, etc.)
- `theme`: Tema visual (`'light'`, `'dark'`, `'quantawood'`)

## Ejemplo
```jsx
<Navbar language="es" theme="quantawood" />

# Navbar

Componente de navegación adaptable. Soporta múltiples idiomas y temas visuales.

## Props
- `language`: Idioma actual (`'en'`, `'es'`, etc.)
- `theme`: Tema visual (`'default'`, `'quantawood'`, `'orion'`)

## Defensividad
- Fallback visual si no hay rutas
- Advertencia en consola si el idioma no está configurado


# ErrorBoundary

Componente que captura errores de renderizado y muestra mensajes localizados.

## Props
- `language`: Idioma para el mensaje de error

## Defensividad
- Captura automática de errores
- Mensajes multilingües desde `fallback.config.js`
- Log técnico en consola


 agregar filtros visuales, exportación de reportes o un gráfico de resumen por especie o mes

 FRONTEND/
├── public/                  # Archivos públicos estáticos (favicon, manifest, etc.)
│   └── vite.svg
├── dist/                    # Salida de compilación (generado por Vite)
│   └── assets/
├── src/                     # Código fuente principal
│   ├── api/                 # Lógica de conexión con backend (fetch, axios, etc.)
│   │   └── client.js
│   │   └── lotes.js
│   ├── assets/              # Recursos visuales y estilos
│   │   ├── styles/          # Variables globales, mixins, resets
│   │   └── visual/          # Imágenes, íconos, SVGs
│   │       └── Logo.svg
│   │       └── react.svg
│   │       └── theme.scss
│   ├── components/          # Componentes reutilizables
│   │   ├── Button/
│   │   │   └── Button.jsx
│   │   │   └── Button.scss
│   │   ├── Card/
│   │   ├── ErrorBoundary/
│   │   ├── Form/
│   │   ├── Layout/
│   │   ├── Navbar/
│   │   └── LandingIntro.jsx
│   ├── context/             # Contextos globales (Auth, Theme, etc.)
│   ├── hooks/               # Custom hooks
│   ├── pages/               # Vistas principales (rutas)
│   ├── sections/            # Secciones específicas de páginas (hero, footer, etc.)
│   ├── App.jsx              # Componente raíz
│   ├── App.scss             # Estilos globales
│   ├── main.js              # Punto de entrada
│   └── main.scss            # Estilos base
├── index.html               # HTML base
├── vite.config.js           # Configuración de Vite
├── package.json             # Dependencias y scripts
└── README.md                # Documentación del proyecto

frontend/
├── server/
│   ├── index.js
│   ├── routes/
│   │   └── api.js
│   ├── middleware/
│   │   └── logger.js
│   ├── config/
│   │   └── express-config.js
│   └── utils/
│       └── errorHandler.js